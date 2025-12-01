import { ethers } from 'hardhat';
import config from '../config';

const OFTAdapter_CONTRACT_NAME = 'MyOFTAdapter';

async function deployOFTAdapter(erc20TokenAddress: string, lzEndpointOnCurrentChain: string) {
  const contractOwner: string = await ethers.getSigners().then((res) => res[0].address);
  const myOFTAdapterContract = await ethers.deployContract(OFTAdapter_CONTRACT_NAME, [
    erc20TokenAddress,
    lzEndpointOnCurrentChain,
    contractOwner,
  ]);
  await myOFTAdapterContract.deployed();

  console.log('Deployed OFTAdapter contract address:', await myOFTAdapterContract.address);
}

async function main() {
  const { erc20TokenAddress, lzEndpointOnCurrentChain } = config;

  if (!erc20TokenAddress) {
    throw new Error('Missing erc20TokenAddress');
  } else if (!lzEndpointOnCurrentChain) {
    throw new Error('Missing lzEndpointOnCurrentChain');
  }

  await deployOFTAdapter(erc20TokenAddress, lzEndpointOnCurrentChain);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
