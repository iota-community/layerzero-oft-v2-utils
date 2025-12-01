import { zeroPad } from '@ethersproject/bytes';
import { ethers } from 'hardhat';
import config from '../config';

const OFT_CONTRACT_NAME = 'MyOFT';

async function setPeerMyOFT(
  oftContractAddress: string,
  lzEndpointIdOnRemoteChain: string,
  oftPackageId: string,
) {
  console.log(
    `setPeerMyOFT - oftContractAddress:${oftContractAddress}, lzEndpointIdOnRemoteChain:${lzEndpointIdOnRemoteChain}, oftPackageId:${oftPackageId}`,
  );

  const myOFTContract = await ethers.getContractAt(OFT_CONTRACT_NAME, oftContractAddress);

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-trusted-peers
  const tx = await myOFTContract.setPeer(
    lzEndpointIdOnRemoteChain,
    // zeroPad(oftPackageId, 32),
    oftPackageId,
  );
  const txReceipt = await tx.wait();

  console.log('MyOFT - setPeer tx:', txReceipt?.transactionHash);
}

async function main() {
  const { oftContractAddress, lzEndpointIdOnRemoteChain, oftPackageId } = config;

  if (!oftContractAddress) {
    throw new Error('Missing oftContractAddress');
  } else if (!lzEndpointIdOnRemoteChain) {
    throw new Error('Missing lzEndpointIdOnRemoteChain');
  } else if (!oftPackageId) {
    throw new Error('Missing oftPackageId');
  }

  await setPeerMyOFT(oftContractAddress, lzEndpointIdOnRemoteChain, oftPackageId);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
