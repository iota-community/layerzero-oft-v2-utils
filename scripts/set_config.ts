import setConfig from "./set_config_function";
import SET_CONFIG_DATA from "./set_config_data";

async function main() {
  const {
    lzEndpointIdOnRemoteChain,
    confirmationsOnRemoteChain,
    lzEndpointOnCurrentChain,
    OAppContractAddressOnCurrentChain,
    requiredDVNsOnCurrentChain,
    optionalDVNsOnCurrentChain,
    sendLibAddressOnCurrentChain,
    receiveLibAddressOnCurrentChain,
  } = SET_CONFIG_DATA["BNB-IOTA"];

  await setConfig(
    lzEndpointIdOnRemoteChain,
    confirmationsOnRemoteChain,
    lzEndpointOnCurrentChain,
    OAppContractAddressOnCurrentChain,
    requiredDVNsOnCurrentChain,
    optionalDVNsOnCurrentChain,
    sendLibAddressOnCurrentChain,
    receiveLibAddressOnCurrentChain,
  );
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
