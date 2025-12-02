const CHAIN_CONFIG: any = {
  sepolia: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    /////// for ulnConfigData used by setConfig() for receiveLib
    requiredDVNs: ['0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE',
    receiveLibAddress: '0xdAf00F5eE2158dD58E0d3857851c432E34A3A851',

    confirmations: 0, // will get default confirmations

    /////// for executorConfigData used by setConfig() for sendLib
    executor: '0x718b92b5cb0a5552039b593faf724d182a881eda',
    maxMessageSize: 10000,
  },
  iotaEvmMainnet: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    /////// for ulnConfigData used by setConfig() for receiveLib
    requiredDVNs: [
      '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
      '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
    ],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7',
    receiveLibAddress: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043',

    confirmations: 15, // will get default confirmations

    /////// for executorConfigData used by setConfig() for sendLib
    executor: '0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f',
    maxMessageSize: 10000,
  },
  arbitrum: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: [
      '0x2f55c492897526677c5b68fb199ea31e2c126416',
      '0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc',
    ],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
    receiveLibAddress: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6',

    confirmations: 0, // will get default confirmations

    /////// for executorConfigData used by setConfig() for sendLib
    executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D',
    maxMessageSize: 10000,
  },
  BNB: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0xfD6865c841c2d64565562fCc7e05e619A30615f0'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
    receiveLibAddress: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1',

    confirmations: 0, // will get default confirmations
  },

  IOTA: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7',
    receiveLibAddress: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043',

    confirmations: 0, // will get default confirmations
  },

  POLYGON: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0x23DE2FE932d9043291f870324B74F820e11dc81A'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3',
    receiveLibAddress: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',

    confirmations: 0, // will get default confirmations
  },

  ETHEREUM: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0x589dEDbD617e0CBcB916A9223F4d1300c294236b'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
    receiveLibAddress: '0xc02Ab410f0734EFa3F14628780e6e695156024C2',

    confirmations: 0, // will get default confirmations
  },

  FANTOM: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0xE60A3959Ca23a92BF5aAf992EF837cA7F828628a'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0xC17BaBeF02a937093363220b0FB57De04A535D5E',
    receiveLibAddress: '0xe1Dd69A2D08dF4eA6a30a91cC061ac70F98aAbe3',

    confirmations: 0, // will get default confirmations
  },

  OPTIMISM: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0x6A02D83e8d433304bba74EF1c427913958187142'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
    receiveLibAddress: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063',

    confirmations: 0, // will get default confirmations
  },

  BASE: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0x9e059a54699a285714207b43B055483E78FAac25'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
    receiveLibAddress: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf',

    confirmations: 0, // will get default confirmations
  },

  AVALANCHE: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNs: ['0x962F502A63F5FBeB44DC9ab932122648E8352959'],

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0x197D1333DEA5Fe0D6600E9b396c7f1B1cFCc558a',
    receiveLibAddress: '0xbf3521d309642FA9B1c91A08609505BA09752c61',

    confirmations: 0, // will get default confirmations
  },
};

export default CHAIN_CONFIG;
