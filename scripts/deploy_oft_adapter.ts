import { ethers } from "hardhat";

const OFTAdapter_CONTRACT_NAME = process.env.OFTAdapter_CONTRACT_NAME || "MyOFTAdapter";

async function deployOFTAdapter(erc20TokenAddress: string, lzEndpointOnSrcChain: string) {
  const contractOwner: string = await ethers.getSigners().then(res => res[0].address);
  const myOFTAdapterContract = await ethers.deployContract(OFTAdapter_CONTRACT_NAME, [
    erc20TokenAddress,
    lzEndpointOnSrcChain,
    contractOwner,
  ]);
  await myOFTAdapterContract.waitForDeployment();

  console.log("Deployed OFTAdapter contract address:", await myOFTAdapterContract.getAddress());
}

async function main() {
  const { erc20TokenAddress, lzEndpointOnSrcChain } = process.env;

  if (!erc20TokenAddress) {
    throw new Error("Missing erc20TokenAddress");
  } else if (!lzEndpointOnSrcChain) {
    throw new Error("Missing lzEndpointOnSrcChain");
  }

  await deployOFTAdapter(erc20TokenAddress, lzEndpointOnSrcChain);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
