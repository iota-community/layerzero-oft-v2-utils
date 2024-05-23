import { ethers } from "hardhat";

const OFTAdapter_CONTRACT_NAME = process.env.OFTAdapter_CONTRACT_NAME || "MyOFTAdapter";
const OFT_CONTRACT_NAME = process.env.OFT_CONTRACT_NAME || "MyOFT";

async function transferOwnership(
  isForOFTAdapter: boolean,
  oftAdapterContractAddress: string,
  oftContractAddress: string,
  newOwnerAddress: string,
) {
  console.log(
    `transferOwnership - isForOFTAdapter:${isForOFTAdapter}, oftAdapterContractAddress:${oftAdapterContractAddress}, oftContractAddress:${oftContractAddress}, newOwnerAddress:${newOwnerAddress}`,
  );

  const myOFTAdapterContract = await ethers.getContractAt(
    OFTAdapter_CONTRACT_NAME,
    oftAdapterContractAddress,
  );

  const myOFTContract = await ethers.getContractAt(OFT_CONTRACT_NAME, oftContractAddress);

  const myContract = isForOFTAdapter ? myOFTAdapterContract : myOFTContract;

  const tx = await myContract.transferOwnership(newOwnerAddress);
  const txReceipt = await tx.wait();
  console.log("transferOwnership tx:", txReceipt?.hash);
}

async function main() {
  const {
    isForOFTAdapter,
    oftAdapterContractAddress,
    oftContractAddress,
    newOwnerAddressOFTAdapter,
    newOwnerAddressOFT,
  } = process.env;

  if (!isForOFTAdapter) {
    throw new Error("Missing isForOFTAdapter");
  } else if (!oftAdapterContractAddress) {
    throw new Error("Missing oftAdapterContractAddress");
  } else if (!oftContractAddress) {
    throw new Error("Missing oftContractAddress");
  } else if (!newOwnerAddressOFTAdapter) {
    throw new Error("Missing newOwnerAddressOFTAdapter");
  } else if (!newOwnerAddressOFT) {
    throw new Error("Missing newOwnerAddressOFT");
  }

  await transferOwnership(
    isForOFTAdapter === "true" ? true : false,
    oftAdapterContractAddress,
    oftContractAddress,
    isForOFTAdapter === "true" ? newOwnerAddressOFTAdapter : newOwnerAddressOFT,
  );
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
