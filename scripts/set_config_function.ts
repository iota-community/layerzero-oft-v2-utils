//docs.layerzero.network/v2/developers/evm/configuration/configure-dvns

import { ethers } from 'hardhat';
import { defaultAbiCoder } from '@ethersproject/abi';

const CONFIG_TYPE_EXECUTOR = 1;
const CONFIG_TYPE_ULN = 2;

const lzEndpointSetConfigABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_oapp',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_lib',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'eid',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'configType',
            type: 'uint32',
          },
          {
            internalType: 'bytes',
            name: 'config',
            type: 'bytes',
          },
        ],
        internalType: 'struct SetConfigParam[]',
        name: '_params',
        type: 'tuple[]',
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// setConfig on the Endpoint contract of the current chain for a given OApp (e.g. OFTAdapter or OFT)
// to interact with remote chain
async function setConfig(
  lzEndpointIdOnRemoteChain: number,
  confirmations: number,
  lzEndpoint: string,
  OAppContractAddress: string,
  requiredDVNs: string[],
  sendLibAddress: string,
  receiveLibAddress: string,
  maxMessageSize: number,
  executor: string,
) {
  console.log(
    `setConfig - lzEndpointIdOnRemoteChain:${lzEndpointIdOnRemoteChain}, confirmations:${confirmations}, lzEndpoint:${lzEndpoint}, OAppContractAddress:${OAppContractAddress}, requiredDVNs:${JSON.stringify(
      requiredDVNs,
    )}, sendLibAddress:${sendLibAddress}, receiveLibAddress:${receiveLibAddress}, maxMessageSize:${maxMessageSize}, executor:${executor}`,
  );

  await setReceiveConfig(
    lzEndpointIdOnRemoteChain,
    confirmations,
    lzEndpoint,
    OAppContractAddress,
    requiredDVNs,
    receiveLibAddress,
  );

  await setSendConfig(
    lzEndpointIdOnRemoteChain,
    confirmations,
    lzEndpoint,
    OAppContractAddress,
    requiredDVNs,
    sendLibAddress,
    maxMessageSize,
    executor,
  );
}

function ulnConfigEncoded(confirmations: number, requiredDVNs: string[]) {
  const ulnConfigStructType =
    'tuple(uint64 confirmations, uint8 requiredDVNCount, uint8 optionalDVNCount, uint8 optionalDVNThreshold, address[] requiredDVNs, address[] optionalDVNs)';

  const ulnConfigData = {
    confirmations: BigInt(confirmations), // Number of block confirmations to wait on Sepolia before message is emitted
    requiredDVNCount: requiredDVNs.length,
    optionalDVNCount: 0,
    optionalDVNThreshold: 0,
    requiredDVNs: requiredDVNs, // DVN on Sepolia
    optionalDVNs: [],
  };

  const ulnConfigEncodedResult = defaultAbiCoder.encode([ulnConfigStructType], [ulnConfigData]);
  // console.log('ulnConfigEncodedResult:', ulnConfigEncodedResult);
  return ulnConfigEncodedResult;
}

function executorConfigEncoded(maxMessageSize: number, executor: string) {
  const executorConfigStructType = 'tuple(uint32 maxMessageSize, address executor)';

  const executorConfigData = {
    maxMessageSize: 10000,
    executor: '0x718b92b5cb0a5552039b593faf724d182a881eda',
  };

  const executorConfigEncodedResult = defaultAbiCoder.encode(
    [executorConfigStructType],
    [executorConfigData],
  );
  // console.log('executorConfigEncodedResult:', executorConfigEncodedResult);
  return executorConfigEncodedResult;
}

async function setReceiveConfig(
  lzEndpointIdOnRemoteChain: number,
  confirmations: number,
  lzEndpoint: string,
  OAppContractAddress: string,
  requiredDVNs: string[],
  receiveLibAddress: string,
) {
  const setConfigTypeUlnData = {
    eid: lzEndpointIdOnRemoteChain,
    configType: CONFIG_TYPE_ULN,
    config: ulnConfigEncoded(confirmations, requiredDVNs),
  };

  const lzEndpointContract = await ethers.getContractAt(lzEndpointSetConfigABI, lzEndpoint);

  try {
    const tx = await lzEndpointContract.setConfig(OAppContractAddress, receiveLibAddress, [
      setConfigTypeUlnData,
    ]);
    const txReceipt = await tx.wait();
    console.log(`setConfig for receiveLib ${receiveLibAddress} - tx: ${txReceipt?.hash}`);
  } catch (err) {
    console.error(err);
  }
}

async function setSendConfig(
  lzEndpointIdOnRemoteChain: number,
  confirmations: number,
  lzEndpoint: string,
  OAppContractAddress: string,
  requiredDVNs: string[],
  sendLibAddress: string,
  maxMessageSize: number,
  executor: string,
) {
  const setConfigTypeUlnData = {
    eid: lzEndpointIdOnRemoteChain,
    configType: CONFIG_TYPE_ULN,
    config: ulnConfigEncoded(confirmations, requiredDVNs),
  };

  const setConfigTypeExecutorData = {
    eid: lzEndpointIdOnRemoteChain,
    configType: CONFIG_TYPE_EXECUTOR,
    config: executorConfigEncoded(maxMessageSize, executor),
  };

  const lzEndpointContract = await ethers.getContractAt(lzEndpointSetConfigABI, lzEndpoint);

  try {
    const tx = await lzEndpointContract.setConfig(OAppContractAddress, sendLibAddress, [
      setConfigTypeExecutorData,
      setConfigTypeUlnData,
    ]);
    const txReceipt = await tx.wait();
    console.log(`setConfig for sendLib ${sendLibAddress} - tx: ${txReceipt?.hash}`);
  } catch (err) {
    console.error(err);
  }
}

export default setConfig;
