import { ethers } from 'hardhat';

async function deployMockErc20() {
  const myContract = await ethers.deployContract('MockUSDT', []);
  await myContract.deployed();

  console.log('Deployed MockUSDT contract address:', await myContract.address);
}

async function main() {
  await deployMockErc20();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
