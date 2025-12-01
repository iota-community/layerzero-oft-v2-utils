import { Options } from '@layerzerolabs/lz-v2-utilities';
import { waitForMessageReceived } from '@layerzerolabs/scan-client-v2';
import { zeroPad } from '@ethersproject/bytes';
import { ethers } from 'hardhat';
import config from '../config';

const OFTAdapter_CONTRACT_NAME = 'MyOFTAdapter';
const OFT_CONTRACT_NAME = 'MyOFT';

const WAIT_FOR_MSG_RECEIVED = 1 * 60 * 1000;

const ERC20_TOKEN_APPROVE_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// Via the OFTAdapter contract, send erc20 tokens on the source chain (e.g. Sepolia) to the destination chain (e.g. BNB testnet)
async function sendOFT(
  isForOFTAdapter: string,
  oftAdapterContractAddress: string,
  oftContractAddress: string,
  lzEndpointIdOnRemoteChain: string,
  executorGasDropInWeiOnDestChain: string,
  executorLzReceiveOptionMaxGas: string,
  sendingAccountPrivKey: string,
  receivingAccountAddress: string,
  amount: string,
  erc20TokenAddress: string,
) {
  const sender = new ethers.Wallet(sendingAccountPrivKey, ethers.provider);

  console.log(
    `sendOFT - oftAdapterContractAddress:${oftAdapterContractAddress}, oftContractAddress:${oftContractAddress}, lzEndpointIdOnRemoteChain:${lzEndpointIdOnRemoteChain}, executorGasDropInWeiOnDestChain:${executorGasDropInWeiOnDestChain}, executorLzReceiveOptionMaxGas:${executorLzReceiveOptionMaxGas}, receivingAccountAddress:${receivingAccountAddress}, sender: ${sender.address}, amount:${amount}, erc20TokenAddress:${erc20TokenAddress}`,
  );

  // It is the OFTAdapter contract whose send() func is to be called to transfer tokens cross-chain
  const myOAppContract =
    isForOFTAdapter === 'true'
      ? await ethers.getContractAt(OFTAdapter_CONTRACT_NAME, oftAdapterContractAddress, sender)
      : await ethers.getContractAt(OFT_CONTRACT_NAME, oftContractAddress, sender);

  const erc20TokenContract = await ethers.getContractAt(
    ERC20_TOKEN_APPROVE_ABI,
    isForOFTAdapter === 'true' ? erc20TokenAddress : oftContractAddress,
    sender,
  );

  const amountInWei = ethers.utils.parseEther(amount);
  // const receiverAddressInBytes32 = zeroPad(receivingAccountAddress, 32);

  // Only if OFTAdapter, the sender approves his erc20 tokens for the OFTAdapter contract
  if (isForOFTAdapter === 'true') {
    const approveTx = await erc20TokenContract.approve(oftAdapterContractAddress, amountInWei);
    const approveTxReceipt = await approveTx.wait();
    console.log('sendOFT - approve tx:', approveTxReceipt?.hash);
  }

  // Set the required options for cross-chain send
  const options = Options.newOptions()
    // addExecutorNativeDropOption is optional
    .addExecutorNativeDropOption(
      BigInt(executorGasDropInWeiOnDestChain),
      receivingAccountAddress as any,
    )
    // Without addExecutorLzReceiveOption, will get execution reverted. Why???
    .addExecutorLzReceiveOption(BigInt(executorLzReceiveOptionMaxGas), 0)
    .toHex()
    .toString();

  // Set the send param
  // https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L10
  const sendParam = [
    lzEndpointIdOnRemoteChain,
    // receiverAddressInBytes32,
    receivingAccountAddress,
    amountInWei,
    amountInWei,
    options, // additional options
    '0x', // composed message for the send() operation
    '0x', // OFT command to be executed, unused in default OFT implementations
  ];

  // Step 2: call the func quoteSend() to estimate cross-chain fee to be paid in native on the source chain
  // https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L127C60-L127C73
  // false is set for _payInLzToken Flag indicating whether the caller is paying in the LZ token
  const [nativeFee] = await myOAppContract.quoteSend(sendParam as any, false);
  console.log('sendOFT - estimated nativeFee:', ethers.utils.formatEther(nativeFee));

  // Step 3: call the func send() to transfer tokens on source chain to destination chain
  const sendTx = await myOAppContract.send(
    sendParam as any,
    [nativeFee, 0] as any, // set 0 for lzTokenFee
    sender.address, // refund address
    {
      value: nativeFee,
    },
  );
  const sendTxReceipt = await sendTx.wait();
  console.log('sendOFT - send tx on source chain:', sendTxReceipt?.transactionHash);

  // Wait for cross-chain tx finalization by LayerZero
  console.log('Wait for cross-chain tx finalization by LayerZero ...');
  const deliveredMsg = await waitForMessageReceived(
    Number(lzEndpointIdOnRemoteChain),
    sendTxReceipt?.transactionHash as string,
    WAIT_FOR_MSG_RECEIVED,
  );
  console.log('sendOFT - received tx on destination chain:', deliveredMsg?.dstTxHash);
}

async function main() {
  const {
    oftAdapterContractAddress,
    oftContractAddress,
    lzEndpointIdOnRemoteChain,
    executorGasDropInWeiOnDestChain,
    executorLzReceiveOptionMaxGas,
    erc20TokenAddress,
  } = config;

  const { SENDER_ACCOUNT_PRIV_KEY, RECEIVER_ACCOUNT_ADDRESS, AMOUNT, isForOFTAdapter } =
    process.env;

  if (!isForOFTAdapter) {
    throw new Error('Missing isForOFTAdapter');
  }

  // Check input params
  if (isForOFTAdapter === 'true' && !oftAdapterContractAddress) {
    throw new Error('Missing oftAdapterContractAddress');
  } else if (isForOFTAdapter === 'false' && !oftContractAddress) {
    throw new Error('Missing oftContractAddress');
  } else if (!lzEndpointIdOnRemoteChain) {
    throw new Error('Missing lzEndpointIdOnRemoteChain');
  } else if (!executorGasDropInWeiOnDestChain) {
    throw new Error('Missing executorGasDropInWeiOnDestChain');
  } else if (!executorLzReceiveOptionMaxGas) {
    throw new Error('Missing executorLzReceiveOptionMaxGas');
  } else if (!SENDER_ACCOUNT_PRIV_KEY) {
    throw new Error('Missing SENDER_ACCOUNT_PRIV_KEY');
  } else if (!RECEIVER_ACCOUNT_ADDRESS) {
    throw new Error('Missing RECEIVER_ACCOUNT_ADDRESS');
  } else if (!AMOUNT) {
    throw new Error('Missing AMOUNT');
  } else if (isForOFTAdapter === 'true' && !erc20TokenAddress) {
    throw new Error('Missing erc20TokenAddress');
  }

  await sendOFT(
    isForOFTAdapter,
    oftAdapterContractAddress,
    oftContractAddress,
    lzEndpointIdOnRemoteChain,
    executorGasDropInWeiOnDestChain,
    executorLzReceiveOptionMaxGas,
    SENDER_ACCOUNT_PRIV_KEY,
    RECEIVER_ACCOUNT_ADDRESS,
    AMOUNT,
    erc20TokenAddress,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
