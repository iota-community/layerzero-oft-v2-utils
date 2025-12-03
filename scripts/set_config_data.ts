const CHAIN_CONFIG: any = {
  sepolia: {
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    /////// for ulnConfigData used by setConfig() for receiveLib
    requiredDVNs: ['0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193'],
    /// The `requiredDVNs` set must be the same on both of the current chain and remote chain. Otherwise, the tx will get `inflight`.

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
    /// The `requiredDVNs` set must be the same on both of the current chain and remote chain. Otherwise, the tx will get `inflight`.

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
      '0x2f55c492897526677c5b68fb199ea31e2c126416', // LZ Labs
      '0xa7b5189bca84cd304d8553977c7c614329750d99', // Nethermind
    ],
    /// The `requiredDVNs` set must be the same on both of the current chain and remote chain. Otherwise, the tx will get `inflight`.

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddress: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
    receiveLibAddress: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6',

    confirmations: 0, // will get default confirmations

    /////// for executorConfigData used by setConfig() for sendLib
    executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D',
    maxMessageSize: 10000,
  },
};

export default CHAIN_CONFIG;
