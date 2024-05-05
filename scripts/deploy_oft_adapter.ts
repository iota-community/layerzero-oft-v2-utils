import { ethers } from "hardhat";
import { MyOFTAdapter } from "../typechain-types";

async function deployMyOFTAdapter(
  erc20TokenAddress: string,
  lzEndpointOnSrcChain: string,
): Promise<MyOFTAdapter> {
  const contractOwner: string = await ethers.getSigners().then(res => res[0].address);
  const myOFTAdapterContract = await ethers.deployContract("MyOFTAdapter", [
    erc20TokenAddress,
    lzEndpointOnSrcChain,
    contractOwner,
  ]);
  await myOFTAdapterContract.waitForDeployment();

  console.log("Deployed MyOFTAdapter contract address:", await myOFTAdapterContract.getAddress());

  return myOFTAdapterContract;
}

async function main() {
  const { erc20TokenAddress, lzEndpointOnSrcChain } = process.env;

  if (!erc20TokenAddress) {
    throw new Error("Missing erc20TokenAddress");
  } else if (!lzEndpointOnSrcChain) {
    throw new Error("Missing lzEndpointOnSrcChain");
  }

  await deployMyOFTAdapter(erc20TokenAddress, lzEndpointOnSrcChain);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
