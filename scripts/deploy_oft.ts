import { ethers } from "hardhat";
import { MyOFT } from "../typechain-types";

async function deployMyOFT(
  mintedTokenName: string,
  mintedTokenSymbol: string,
  lzEndpointOnDestChain: string,
): Promise<MyOFT> {
  const contractOwner: string = await ethers.getSigners().then(res => res[0].address);
  const myOFTContract = await ethers.deployContract("MyOFT", [
    mintedTokenName,
    mintedTokenSymbol,
    lzEndpointOnDestChain,
    contractOwner,
  ]);
  await myOFTContract.waitForDeployment();

  console.log("Deployed MyOFT contract address:", await myOFTContract.getAddress());

  return myOFTContract;
}

async function main() {
  const { mintedTokenName, mintedTokenSymbol, lzEndpointOnDestChain } = process.env;

  if (!mintedTokenName) {
    throw new Error("Missing mintedTokenName");
  } else if (!mintedTokenSymbol) {
    throw new Error("Missing mintedTokenSymbol");
  } else if (!lzEndpointOnDestChain) {
    throw new Error("Missing lzEndpointOnDestChain");
  }

  await deployMyOFT(mintedTokenName, mintedTokenSymbol, lzEndpointOnDestChain);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
