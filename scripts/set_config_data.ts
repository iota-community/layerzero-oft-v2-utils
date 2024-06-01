const CHAIN_CONFIG: any = {
  SMR: {
    lzEndpointOnCurrentChain: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1",
    lzEndpointIdOnCurrentChain: 30230,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x9Bdf3aE7E2e3D211811E5e782a808Ca0a75BF1Fc", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0xd4a903930f2c9085586cda0b11d9681eecb20d2f",
    receiveLibAddressOnCurrentChain: "0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  BNB: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30102,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0xfD6865c841c2d64565562fCc7e05e619A30615f0", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE",
    receiveLibAddressOnCurrentChain: "0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  IOTA: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30284,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7",
    receiveLibAddressOnCurrentChain: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  POLYGON: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30109,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x23DE2FE932d9043291f870324B74F820e11dc81A", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3",
    receiveLibAddressOnCurrentChain: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  ETHEREUM: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30101,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x589dEDbD617e0CBcB916A9223F4d1300c294236b", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1",
    receiveLibAddressOnCurrentChain: "0xc02Ab410f0734EFa3F14628780e6e695156024C2",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  FANTOM: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30112,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0xE60A3959Ca23a92BF5aAf992EF837cA7F828628a", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0xC17BaBeF02a937093363220b0FB57De04A535D5E",
    receiveLibAddressOnCurrentChain: "0xe1Dd69A2D08dF4eA6a30a91cC061ac70F98aAbe3",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  OPTIMISM: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30111,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x6A02D83e8d433304bba74EF1c427913958187142", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
    receiveLibAddressOnCurrentChain: "0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  BASE: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30184,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x9e059a54699a285714207b43B055483E78FAac25", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2",
    receiveLibAddressOnCurrentChain: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  AVALANCHE: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30106,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x962F502A63F5FBeB44DC9ab932122648E8352959", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0x197D1333DEA5Fe0D6600E9b396c7f1B1cFCc558a",
    receiveLibAddressOnCurrentChain: "0xbf3521d309642FA9B1c91A08609505BA09752c61",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },

  ARBITRUM: {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    lzEndpointIdOnCurrentChain: 30110,

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x2f55C492897526677C5B68fb199ea31E2c126416", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A",
    receiveLibAddressOnCurrentChain: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",

    confirmationsOnCurrentChain: 0, // will get default confirmations
  },
};

const PATHWAY_CONFIG = (srcChain: string, destChain: string) => {
  if (!CHAIN_CONFIG[srcChain]) {
    throw new Error(`Chain config for ${srcChain} missing`);
  } else if (!CHAIN_CONFIG[destChain]) {
    throw new Error(`Chain config for ${destChain} missing`);
  }

  return {
    ...CHAIN_CONFIG[srcChain],

    lzEndpointIdOnRemoteChain: CHAIN_CONFIG[destChain].lzEndpointIdOnCurrentChain,
  };
};

export default PATHWAY_CONFIG;
