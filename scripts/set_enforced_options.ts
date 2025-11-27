import { ethers } from "hardhat";

// https://docs.layerzero.network/v2/developers/evm/gas-settings/options#options-sdk
import { Options } from "@layerzerolabs/lz-v2-utilities";

const OFTAdapter_CONTRACT_NAME = process.env.OFTAdapter_CONTRACT_NAME || "MyOFTAdapter";
const OFT_CONTRACT_NAME = process.env.OFT_CONTRACT_NAME || "MyOFT";

async function setEnforcedOptions(
  isForOFTAdapter: boolean,
  oftAdapterContractAddress: string,
  oftContractAddress: string,
  executorLzReceiveOptionMaxGas: number,
  lzEndpointIdOnDestChain: string,
) {
  console.log(
    `setEnforcedOptions - isForOFTAdapter:${isForOFTAdapter}, oftAdapterContractAddress:${oftAdapterContractAddress}, oftContractAddress:${oftContractAddress}, executorLzReceiveOptionMaxGas:${executorLzReceiveOptionMaxGas}, lzEndpointIdOnDestChain:${lzEndpointIdOnDestChain}`,
  );

  const myContract = isForOFTAdapter
    ? await ethers.getContractAt(OFTAdapter_CONTRACT_NAME, oftAdapterContractAddress)
    : await ethers.getContractAt(OFT_CONTRACT_NAME, oftContractAddress);

  // https://docs.layerzero.network/v2/developers/evm/gas-settings/options#lzreceive-option
  const options = Options.newOptions().addExecutorLzReceiveOption(executorLzReceiveOptionMaxGas, 0);

  // https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-enforced-options
  let enforcedOptions = [
    {
      eid: lzEndpointIdOnDestChain, // destination Endpoint ID
      msgType: 1,
      options: options.toBytes(),
    },
  ];

  const tx = await myContract.setEnforcedOptions(enforcedOptions);
  const txReceipt = await tx.wait();
  console.log("setEnforcedOptions tx:", txReceipt?.hash);
}

async function main() {
  const {
    isForOFTAdapter,
    oftAdapterContractAddress,
    oftContractAddress,
    executorLzReceiveOptionMaxGas,
    lzEndpointIdOnSrcChain,
    lzEndpointIdOnDestChain,
  } = process.env;

  if (!isForOFTAdapter) {
    throw new Error("Missing isForOFTAdapter");
  } else if (isForOFTAdapter === "true" && !oftAdapterContractAddress) {
    throw new Error("Missing oftAdapterContractAddress");
  } else if (isForOFTAdapter === "false" && !oftContractAddress) {
    throw new Error("Missing oftContractAddress");
  } else if (!executorLzReceiveOptionMaxGas) {
    throw new Error("Missing executorLzReceiveOptionMaxGas");
  } else if (!lzEndpointIdOnSrcChain) {
    throw new Error("Missing lzEndpointIdOnSrcChain");
  } else if (!lzEndpointIdOnDestChain) {
    throw new Error("Missing lzEndpointIdOnDestChain");
  }

  await setEnforcedOptions(
    isForOFTAdapter === "true" ? true : false,
    oftAdapterContractAddress as string,
    oftContractAddress as string,
    Number(executorLzReceiveOptionMaxGas),
    isForOFTAdapter === "true" ? lzEndpointIdOnDestChain : lzEndpointIdOnSrcChain,
  );
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
