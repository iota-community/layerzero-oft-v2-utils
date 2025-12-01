import { zeroPad } from '@ethersproject/bytes';
import { ethers } from 'hardhat';
import config from '../config';

const OFTAdapter_CONTRACT_NAME = 'MyOFTAdapter';

async function setPeerMyOFTAdapter(
  oftAdapterContractAddress: string,
  lzEndpointIdOnRemoteChain: string,
  oftPackageId: string,
) {
  console.log(
    `setPeerMyOFTAdapter - oftAdapterContractAddress:${oftAdapterContractAddress}, lzEndpointIdOnRemoteChain:${lzEndpointIdOnRemoteChain}, oftPackageId:${oftPackageId}`,
  );

  const myOFTAdapterContract = await ethers.getContractAt(
    OFTAdapter_CONTRACT_NAME,
    oftAdapterContractAddress,
  );

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-trusted-peers
  const tx = await myOFTAdapterContract.setPeer(lzEndpointIdOnRemoteChain, zeroPad(oftPackageId, 32));
  const txReceipt = await tx.wait();

  console.log('MyOFTAdapter - setPeer tx:', txReceipt?.transactionHash);
}

async function main() {
  const { oftAdapterContractAddress, lzEndpointIdOnRemoteChain, oftPackageId } = config;

  if (!oftAdapterContractAddress) {
    throw new Error('Missing oftAdapterContractAddress');
  } else if (!lzEndpointIdOnRemoteChain) {
    throw new Error('Missing lzEndpointIdOnRemoteChain');
  } else if (!oftPackageId) {
    throw new Error('Missing oftPackageId');
  }

  await setPeerMyOFTAdapter(oftAdapterContractAddress, lzEndpointIdOnRemoteChain, oftPackageId);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
