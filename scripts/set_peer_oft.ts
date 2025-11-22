import { zeroPad } from "@ethersproject/bytes";
import { ethers } from "hardhat";

const OFT_CONTRACT_NAME = process.env.OFT_CONTRACT_NAME || "MyOFT";

async function setPeerMyOFT(
  oftContractAddress: string,
  lzEndpointIdOnSrcChain: string,
  oftPackageId: string,
) {
  console.log(
    `setPeerMyOFT - oftContractAddress:${oftContractAddress}, lzEndpointIdOnSrcChain:${lzEndpointIdOnSrcChain}, oftPackageId:${oftPackageId}`,
  );

  const myOFTContract = await ethers.getContractAt(OFT_CONTRACT_NAME, oftContractAddress);

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-trusted-peers
  const tx = await myOFTContract.setPeer(
    lzEndpointIdOnSrcChain,
    // zeroPad(oftPackageId, 32),
    oftPackageId,
  );
  const txReceipt = await tx.wait();

  console.log("MyOFT - setPeer tx:", txReceipt?.hash);
}

async function main() {
  const { oftContractAddress, lzEndpointIdOnSrcChain, oftPackageId } = process.env;

  if (!oftContractAddress) {
    throw new Error("Missing oftContractAddress");
  } else if (!lzEndpointIdOnSrcChain) {
    throw new Error("Missing lzEndpointIdOnSrcChain");
  } else if (!oftPackageId) {
    throw new Error("Missing oftPackageId");
  }

  await setPeerMyOFT(oftContractAddress, lzEndpointIdOnSrcChain, oftPackageId);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
