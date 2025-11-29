import setConfig from './set_config_function';
import PATHWAY_CONFIG from './set_config_data';
import config from '../config';

async function main() {
  const { PATHWAY, OAppContractAddress } = process.env;
  if (!PATHWAY) {
    throw new Error('Missing PATHWAY');
  } else if (!OAppContractAddress) {
    throw new Error('Missing OAppContractAddress');
  }

  const [srcChain, destChain] = PATHWAY.split('->');

  const {
    lzEndpointIdOnRemoteChain,
    confirmations,
    lzEndpoint,
    requiredDVNs,
    sendLibAddress,
    receiveLibAddress,
    maxMessageSize,
    executor,
  } = PATHWAY_CONFIG(srcChain, destChain);

  await setConfig(
    lzEndpointIdOnRemoteChain,
    confirmations,
    lzEndpoint,
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
