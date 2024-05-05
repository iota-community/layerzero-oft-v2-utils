import { zeroPad } from "@ethersproject/bytes";
import { ethers } from "hardhat";

async function setPeerMyOFT(
  oftContractAddress: string,
  lzEndpointIdOnSrcChain: string,
  oftAdapterContractAddress: string,
) {
  console.log(
    `setPeerMyOFT - oftContractAddress:${oftContractAddress}, lzEndpointIdOnSrcChain:${lzEndpointIdOnSrcChain}, oftAdapterContractAddress:${oftAdapterContractAddress}`,
  );

  const myOFTContract = await ethers.getContractAt("MyOFT", oftContractAddress);

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-trusted-peers
  const tx = await myOFTContract.setPeer(
    lzEndpointIdOnSrcChain,
    zeroPad(oftAdapterContractAddress, 32),
  );
  const txReceipt = await tx.wait();

  console.log("MyOFT - setPeer tx:", txReceipt?.hash);
}

async function main() {
  const { oftContractAddress, lzEndpointIdOnSrcChain, oftAdapterContractAddress } = process.env;

  if (!oftContractAddress) {
    throw new Error("Missing oftContractAddress");
  } else if (!lzEndpointIdOnSrcChain) {
    throw new Error("Missing lzEndpointIdOnSrcChain");
  } else if (!oftAdapterContractAddress) {
    throw new Error("Missing oftAdapterContractAddress");
  }

  await setPeerMyOFT(oftContractAddress, lzEndpointIdOnSrcChain, oftAdapterContractAddress);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
