import { ethers } from 'hardhat';
import config from '../config';

const OFT_CONTRACT_NAME = 'MyOFT';

async function deployOFT(
  mintedTokenName: string,
  mintedTokenSymbol: string,
  lzEndpointOnDestChain: string,
) {
  const contractOwner: string = await ethers.getSigners().then((res) => res[0].address);
  const myOFTContract = await ethers.deployContract(OFT_CONTRACT_NAME, [
    mintedTokenName,
    mintedTokenSymbol,
    lzEndpointOnDestChain,
    contractOwner,
  ]);
  await myOFTContract.waitForDeployment();

  console.log('Deployed OFT contract address:', await myOFTContract.getAddress());
}

async function main() {
  const { mintedTokenName, mintedTokenSymbol, lzEndpointOnDestChain } = config;

  if (!mintedTokenName) {
    throw new Error('Missing mintedTokenName');
  } else if (!mintedTokenSymbol) {
    throw new Error('Missing mintedTokenSymbol');
  } else if (!lzEndpointOnDestChain) {
    throw new Error('Missing lzEndpointOnDestChain');
  }

  await deployOFT(mintedTokenName, mintedTokenSymbol, lzEndpointOnDestChain);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
