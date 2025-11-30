import { ethers } from 'hardhat';
import config from '../config';

const OFT_CONTRACT_NAME = 'MyOFT';

async function deployOFT(
  mintedTokenName: string,
  mintedTokenSymbol: string,
  lzEndpointOnCurrentChain: string,
) {
  const contractOwner: string = await ethers.getSigners().then((res) => res[0].address);
  const myOFTContract = await ethers.deployContract(OFT_CONTRACT_NAME, [
    mintedTokenName,
    mintedTokenSymbol,
    lzEndpointOnCurrentChain,
    contractOwner,
  ]);
  await myOFTContract.deployed();

  console.log('Deployed OFT contract address:', await myOFTContract.address);
}

async function main() {
  const { mintedTokenName, mintedTokenSymbol, lzEndpointOnCurrentChain } = config;

  if (!mintedTokenName) {
    throw new Error('Missing mintedTokenName');
  } else if (!mintedTokenSymbol) {
    throw new Error('Missing mintedTokenSymbol');
  } else if (!lzEndpointOnCurrentChain) {
    throw new Error('Missing lzEndpointOnCurrentChain');
  }

  await deployOFT(mintedTokenName, mintedTokenSymbol, lzEndpointOnCurrentChain);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
