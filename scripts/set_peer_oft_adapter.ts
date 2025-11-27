import { zeroPad } from "@ethersproject/bytes";
import { ethers } from "hardhat";

const OFTAdapter_CONTRACT_NAME = process.env.OFTAdapter_CONTRACT_NAME || "MyOFTAdapter";

async function setPeerMyOFTAdapter(
  oftAdapterContractAddress: string,
  lzEndpointIdOnDestChain: string,
  oftPackageId: string,
) {
  console.log(
    `setPeerMyOFTAdapter - oftAdapterContractAddress:${oftAdapterContractAddress}, lzEndpointIdOnDestChain:${lzEndpointIdOnDestChain}, oftPackageId:${oftPackageId}`,
  );

  const myOFTAdapterContract = await ethers.getContractAt(
    OFTAdapter_CONTRACT_NAME,
    oftAdapterContractAddress,
  );

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-trusted-peers
  const tx = await myOFTAdapterContract.setPeer(
    lzEndpointIdOnDestChain,
    zeroPad(oftPackageId, 32),
  );
  const txReceipt = await tx.wait();

  console.log("MyOFTAdapter - setPeer tx:", txReceipt?.hash);
}

async function main() {
  const { oftAdapterContractAddress, lzEndpointIdOnDestChain, oftPackageId } = process.env;

  if (!oftAdapterContractAddress) {
    throw new Error("Missing oftAdapterContractAddress");
  } else if (!lzEndpointIdOnDestChain) {
    throw new Error("Missing lzEndpointIdOnDestChain");
  } else if (!oftPackageId) {
    throw new Error("Missing oftPackageId");
  }

  await setPeerMyOFTAdapter(oftAdapterContractAddress, lzEndpointIdOnDestChain, oftPackageId);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
