import { zeroPad } from "@ethersproject/bytes";
import { ethers } from "hardhat";

async function setPeerMyOFTAdapter(
  oftAdapterContractAddress: string,
  lzEndpointIdOnDestChain: string,
  oftContractAddress: string,
) {
  console.log(
    `setPeerMyOFTAdapter - oftAdapterContractAddress:${oftAdapterContractAddress}, lzEndpointIdOnDestChain:${lzEndpointIdOnDestChain}, oftContractAddress:${oftContractAddress}`,
  );

  const myOFTAdapterContract = await ethers.getContractAt(
    "MyOFTAdapter",
    oftAdapterContractAddress,
  );

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-trusted-peers
  const tx = await myOFTAdapterContract.setPeer(
    lzEndpointIdOnDestChain,
    zeroPad(oftContractAddress, 32),
  );
  const txReceipt = await tx.wait();

  console.log("MyOFTAdapter - setPeer tx:", txReceipt?.hash);
}

async function main() {
  const { oftAdapterContractAddress, lzEndpointIdOnDestChain, oftContractAddress } = process.env;

  if (!oftAdapterContractAddress) {
    throw new Error("Missing oftAdapterContractAddress");
  } else if (!lzEndpointIdOnDestChain) {
    throw new Error("Missing lzEndpointIdOnDestChain");
  } else if (!oftContractAddress) {
    throw new Error("Missing oftContractAddress");
  }

  await setPeerMyOFTAdapter(oftAdapterContractAddress, lzEndpointIdOnDestChain, oftContractAddress);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
