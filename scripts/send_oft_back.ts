import { Options } from '@layerzerolabs/lz-v2-utilities';
import { waitForMessageReceived } from '@layerzerolabs/scan-client';
import { zeroPad } from '@ethersproject/bytes';
import { ethers } from 'hardhat';
import config from '../config';

const OFT_CONTRACT_NAME = 'MyOFT';
const WAIT_FOR_MSG_RECEIVED = 1 * 60 * 1000;

// Via the OFT contract, send back the OFT-wrapped tokens on the destination chain (e.g. BNB testnet) to the source chain (e.g. Sepolia)
async function sendOFTBack(
  oftAdapterContractAddress: string,
  oftContractAddress: string,
  lzEndpointIdOnCurrentChain: string,
  lzEndpointIdOnRemoteChain: string,
  executorGasDropInWeiOnDestChain: string,
  executorLzReceiveOptionMaxGas: string,
  sendingAccountPrivKey: string,
  receivingAccountAddress: string,
  amount: string,
) {
  const sender = new ethers.Wallet(sendingAccountPrivKey, ethers.provider);

  console.log(
    `sendOFTBack - oftAdapterContractAddress:${oftAdapterContractAddress}, oftContractAddress:${oftContractAddress}, lzEndpointIdOnCurrentChain:${lzEndpointIdOnCurrentChain}, lzEndpointIdOnRemoteChain:${lzEndpointIdOnRemoteChain}, executorGasDropInWeiOnDestChain:${executorGasDropInWeiOnDestChain}, executorLzReceiveOptionMaxGas:${executorLzReceiveOptionMaxGas}, receivingAccountAddress:${receivingAccountAddress}, sender: ${sender.address}, amount:${amount}`,
  );

  // It is the OFT contract whose send() func is to be called to transfer OFT-wrapped tokens cross-chain
  const myOFTContract = await ethers.getContractAt(OFT_CONTRACT_NAME, oftContractAddress, sender);

  const amountInWei = ethers.parseEther(amount);
  const receiverAddressInBytes32 = zeroPad(receivingAccountAddress, 32);

  // Approve step is not needed for sending the OFT-wrapped tokens on destination chain back to the source chain

  // Set the required options for cross-chain send
  const options = Options.newOptions()
    // addExecutorNativeDropOption is optional
    .addExecutorNativeDropOption(Number(executorGasDropInWeiOnDestChain), receivingAccountAddress as any)
    // Without addExecutorLzReceiveOption, will get execution reverted. Why???
    .addExecutorLzReceiveOption(Number(executorLzReceiveOptionMaxGas), 0)
    .toHex()
    .toString();

  // Set the send param
  // https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L10
  const sendParam = [
    lzEndpointIdOnCurrentChain, // Sepolia
    receiverAddressInBytes32,
    amountInWei,
    amountInWei,
    options, // additional options
    '0x', // composed message for the send() operation
    '0x', // OFT command to be executed, unused in default OFT implementations
  ];

  // Step 1: call the func quoteSend() to estimate cross-chain fee to be paid in native on the source chain
  // https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L127C60-L127C73
  // false is set for _payInLzToken Flag indicating whether the caller is paying in the LZ token
  const [nativeFee] = await myOFTContract.quoteSend(sendParam as any, false);
  console.log('sendOFTBack - estimated nativeFee:', ethers.formatEther(nativeFee));

  // Step 2: call the func send() to transfer tokens on source chain to destination chain
  const sendTx = await myOFTContract.send(
    sendParam as any,
    [nativeFee, 0] as any, // set 0 for lzTokenFee
    sender.address, // refund address
    {
      value: nativeFee,
    },
  );
  const sendTxReceipt = await sendTx.wait();
  console.log('sendOFTBack - send tx on source chain:', sendTxReceipt?.transactionHash);

  // Wait for cross-chain tx finalization by LayerZero
  console.log('Wait for cross-chain tx finalization by LayerZero ...');
  const deliveredMsg = await waitForMessageReceived(
    Number(lzEndpointIdOnRemoteChain),
    sendTxReceipt?.transactionHash as string,
    WAIT_FOR_MSG_RECEIVED,
  );
  console.log('sendOFTBack - received tx on destination chain:', deliveredMsg?.dstTxHash);
}

async function main() {
  const {
    oftAdapterContractAddress,
    oftContractAddress,
    lzEndpointIdOnCurrentChain,
    lzEndpointIdOnRemoteChain,
    executorGasDropInWeiOnDestChain,
    executorLzReceiveOptionMaxGas,
  } = config;

  const { SENDER_ACCOUNT_PRIV_KEY, RECEIVER_ACCOUNT_ADDRESS, TOKEN_AMOUNT_WITHOUT_DECIMALS } = process.env;

  // Check input params
  if (!oftAdapterContractAddress) {
    throw new Error('Missing oftAdapterContractAddress');
  } else if (!oftContractAddress) {
    throw new Error('Missing oftContractAddress');
  } else if (!lzEndpointIdOnCurrentChain) {
    throw new Error('Missing lzEndpointIdOnCurrentChain');
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
  } else if (!TOKEN_AMOUNT_WITHOUT_DECIMALS) {
    throw new Error('Missing TOKEN_AMOUNT_WITHOUT_DECIMALS');
  }

  await sendOFTBack(
    oftAdapterContractAddress,
    oftContractAddress,
    lzEndpointIdOnCurrentChain,
    lzEndpointIdOnRemoteChain,
    executorGasDropInWeiOnDestChain,
    executorLzReceiveOptionMaxGas,
    SENDER_ACCOUNT_PRIV_KEY,
    RECEIVER_ACCOUNT_ADDRESS,
    TOKEN_AMOUNT_WITHOUT_DECIMALS,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
