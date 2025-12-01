import hre from 'hardhat';

import config from '../config';
import setConfig from './set_config_function';
import CHAIN_CONFIG from './set_config_data';

const currentChainSetConfigData = (currentChain: string) => {
  if (!CHAIN_CONFIG[currentChain]) {
    throw new Error(`Chain config for ${currentChain} missing`);
  }

  const { lzEndpointOnCurrentChain, lzEndpointIdOnRemoteChain } = config;

  return {
    ...CHAIN_CONFIG[currentChain],
    lzEndpointOnCurrentChain,
    lzEndpointIdOnRemoteChain,
  };
};

async function main() {
  const currentChain = hre.network.name;

  const OAppContractAddress =
    process.env.isForOFTAdapter === 'true'
      ? config.oftAdapterContractAddress
      : config.oftContractAddress;

  const {
    lzEndpointIdOnRemoteChain,
    confirmations,
    lzEndpointOnCurrentChain,
    requiredDVNs,
    sendLibAddress,
    receiveLibAddress,
    maxMessageSize,
    executor,
  } = currentChainSetConfigData(currentChain);

  await setConfig(
    lzEndpointIdOnRemoteChain,
    confirmations,
    lzEndpointOnCurrentChain,
    OAppContractAddress,
    requiredDVNs,
    sendLibAddress,
    receiveLibAddress,
    maxMessageSize,
    executor,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
