//docs.layerzero.network/v2/developers/evm/configuration/configure-dvns

import { ethers } from "hardhat";
import { defaultAbiCoder } from "@ethersproject/abi";

const lzEndpointSetConfigABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oapp",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lib",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "configType",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "config",
            type: "bytes",
          },
        ],
        internalType: "struct SetConfigParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// setConfig on the Endpoint of the current chain for a given OApp (e.g. OFTAdapter or OFT)
// to interact with remote chain
async function setConfig(
  lzEndpointIdOnRemoteChain: number,
  confirmationsOnCurrentChain: number,
  lzEndpointOnCurrentChain: string,
  OAppContractAddressOnCurrentChain: string,
  requiredDVNsOnCurrentChain: string[],
  optionalDVNsOnCurrentChain: string[],
  sendLibAddressOnCurrentChain: string,
  receiveLibAddressOnCurrentChain: string,
) {
  console.log(
    `setConfig - lzEndpointOnCurrentChain:${lzEndpointOnCurrentChain}, lzEndpointIdOnRemoteChain:${lzEndpointIdOnRemoteChain}, OAppContractAddressOnCurrentChain:${OAppContractAddressOnCurrentChain}`,
  );

  /////////
  // The minimum number of verifications needed from optional DVNs
  const optionalDVNThreshold = 0;

  const requiredDVNCount = requiredDVNsOnCurrentChain.length;
  const optionalDVNCount = optionalDVNsOnCurrentChain.length;

  // Configuration type
  const configTypeUln = 2; // As defined for CONFIG_TYPE_ULN

  const ulnConfigStructType =
    "tuple(uint64 confirmationsOnCurrentChain, uint8 requiredDVNCount, uint8 optionalDVNCount, uint8 optionalDVNThreshold, address[] requiredDVNsOnCurrentChain, address[] optionalDVNsOnCurrentChain)";

  const ulnConfigData = {
    confirmationsOnCurrentChain,
    requiredDVNCount,
    optionalDVNCount,
    optionalDVNThreshold,
    requiredDVNsOnCurrentChain,
    optionalDVNsOnCurrentChain,
  };
  const ulnConfigEncoded = defaultAbiCoder.encode([ulnConfigStructType], [ulnConfigData]);
  console.log("ulnConfigEncoded:", ulnConfigEncoded);

  const setConfigParamUln = {
    eid: lzEndpointIdOnRemoteChain,
    configType: configTypeUln,
    config: ulnConfigEncoded,
  };
  ////////

  ///////////////
  const lzEndpointContract = await ethers.getContractAt(
    lzEndpointSetConfigABI,
    lzEndpointOnCurrentChain,
  );

  const messageLibAddresses = [sendLibAddressOnCurrentChain, receiveLibAddressOnCurrentChain];
  for (const libAddress of messageLibAddresses) {
    try {
      const tx = await lzEndpointContract.setConfig(OAppContractAddressOnCurrentChain, libAddress, [
        setConfigParamUln,
      ]);
      const txReceipt = await tx.wait();
      console.log(`setConfig for ${libAddress} - tx: ${txReceipt?.hash}`);
    } catch (err) {
      console.error(err);
    }
  }
  ///////////////
}

export default setConfig;
