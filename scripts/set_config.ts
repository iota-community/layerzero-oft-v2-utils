import setConfig from "./set_config_function";
import SET_CONFIG_DATA from "./set_config_data";

async function main() {
  const { ROUTE } = process.env;
  if (!ROUTE) {
    throw new Error("Missing ROUTE");
  }

  if (!Object.keys(SET_CONFIG_DATA).includes(ROUTE)) {
    throw new Error("Undefined ROUTE");
  }

  const {
    lzEndpointIdOnRemoteChain,
    confirmationsOnRemoteChain,
    lzEndpointOnCurrentChain,
    OAppContractAddressOnCurrentChain,
    requiredDVNsOnCurrentChain,
    optionalDVNsOnCurrentChain,
    sendLibAddressOnCurrentChain,
    receiveLibAddressOnCurrentChain,
  } = SET_CONFIG_DATA[ROUTE];

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
