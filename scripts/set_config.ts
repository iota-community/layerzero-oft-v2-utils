import setConfig from "./set_config_function";
import PATHWAY_CONFIG from "./set_config_data";

async function main() {
  const { PATHWAY, OAppContractAddressOnCurrentChain } = process.env;
  if (!PATHWAY) {
    throw new Error("Missing PATHWAY");
  } else if (!OAppContractAddressOnCurrentChain) {
    throw new Error("Missing OAppContractAddressOnCurrentChain");
  }

  if (!Object.keys(PATHWAY_CONFIG).includes(PATHWAY)) {
    throw new Error("Undefined PATHWAY");
  }

  const {
    lzEndpointIdOnRemoteChain,
    confirmationsOnRemoteChain,
    lzEndpointOnCurrentChain,
    requiredDVNsOnCurrentChain,
    optionalDVNsOnCurrentChain,
    sendLibAddressOnCurrentChain,
    receiveLibAddressOnCurrentChain,
  } = PATHWAY_CONFIG[PATHWAY];

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
