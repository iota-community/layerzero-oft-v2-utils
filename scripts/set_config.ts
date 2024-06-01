import setConfig from "./set_config_function";
import PATHWAY_CONFIG from "./set_config_data";

async function main() {
  const { PATHWAY, OAppContractAddressOnCurrentChain } = process.env;
  if (!PATHWAY) {
    throw new Error("Missing PATHWAY");
  } else if (!OAppContractAddressOnCurrentChain) {
    throw new Error("Missing OAppContractAddressOnCurrentChain");
  }

  const [srcChain, destChain] = PATHWAY.split("->");

  const {
    lzEndpointIdOnRemoteChain,
    confirmationsOnCurrentChain,
    lzEndpointOnCurrentChain,
    requiredDVNsOnCurrentChain,
    optionalDVNsOnCurrentChain,
    sendLibAddressOnCurrentChain,
    receiveLibAddressOnCurrentChain,
  } = PATHWAY_CONFIG(srcChain, destChain);

  await setConfig(
    lzEndpointIdOnRemoteChain,
    confirmationsOnCurrentChain,
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
