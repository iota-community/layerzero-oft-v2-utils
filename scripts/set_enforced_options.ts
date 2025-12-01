import { ethers } from 'hardhat';
import config from '../config';

// https://docs.layerzero.network/v2/developers/evm/gas-settings/options#options-sdk
import { Options } from '@layerzerolabs/lz-v2-utilities';

const OFTAdapter_CONTRACT_NAME = 'MyOFTAdapter';
const OFT_CONTRACT_NAME = 'MyOFT';

async function setEnforcedOptions(
  isForOFTAdapter: boolean,
  oftAdapterContractAddress: string,
  oftContractAddress: string,
  executorLzReceiveOptionMaxGas: number,
  executorGasDropInWeiOnDestChain: number,
  lzEndpointIdOnRemoteChain: string,
) {
  console.log(
    `setEnforcedOptions - isForOFTAdapter:${isForOFTAdapter}, oftAdapterContractAddress:${oftAdapterContractAddress}, oftContractAddress:${oftContractAddress}, executorLzReceiveOptionMaxGas:${executorLzReceiveOptionMaxGas}, executorGasDropInWeiOnDestChain:${executorGasDropInWeiOnDestChain}, lzEndpointIdOnRemoteChain:${lzEndpointIdOnRemoteChain}`,
  );

  const myContract = isForOFTAdapter
    ? await ethers.getContractAt(OFTAdapter_CONTRACT_NAME, oftAdapterContractAddress)
    : await ethers.getContractAt(OFT_CONTRACT_NAME, oftContractAddress);

  // https://docs.layerzero.network/v2/developers/evm/gas-settings/options#lzreceive-option
  const options = Options.newOptions().addExecutorLzReceiveOption(
    executorLzReceiveOptionMaxGas,
    executorGasDropInWeiOnDestChain,
  );

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-enforced-options
  let enforcedOptions = [
    {
      eid: lzEndpointIdOnRemoteChain, // destination Endpoint ID
      msgType: 1,
      options: options.toBytes(),
    },
  ];

  const tx = await myContract.setEnforcedOptions(enforcedOptions);
  const txReceipt = await tx.wait();
  console.log('setEnforcedOptions tx:', txReceipt?.transactionHash);
}

async function main() {
  const { isForOFTAdapter } = process.env;

  const {
    oftAdapterContractAddress,
    oftContractAddress,
    executorLzReceiveOptionMaxGas,
    executorGasDropInWeiOnDestChain,
    lzEndpointIdOnRemoteChain,
  } = config;

  if (!isForOFTAdapter) {
    throw new Error('Missing isForOFTAdapter');
  } else if (isForOFTAdapter === 'true' && !oftAdapterContractAddress) {
    throw new Error('Missing oftAdapterContractAddress');
  } else if (isForOFTAdapter === 'false' && !oftContractAddress) {
    throw new Error('Missing oftContractAddress');
  } else if (!executorLzReceiveOptionMaxGas) {
    throw new Error('Missing executorLzReceiveOptionMaxGas');
  } else if (!executorGasDropInWeiOnDestChain) {
    throw new Error('Missing executorGasDropInWeiOnDestChain');
  } else if (!lzEndpointIdOnRemoteChain) {
    throw new Error('Missing lzEndpointIdOnRemoteChain');
  }

  await setEnforcedOptions(
    isForOFTAdapter === 'true' ? true : false,
    oftAdapterContractAddress as string,
    oftContractAddress as string,
    Number(executorLzReceiveOptionMaxGas),
    Number(executorGasDropInWeiOnDestChain),
    lzEndpointIdOnRemoteChain,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
