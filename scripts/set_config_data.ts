const SET_CONFIG_DATA = {
  // Current chain of ShimmerEVM => Remote chain of BNB
  "SMR-BNB": {
    lzEndpointOnCurrentChain: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1",
    OAppContractAddressOnCurrentChain: "0x9d8bBc4E081c9bC215ee79443A78C716dFc77109", // OFTAdapter
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x9Bdf3aE7E2e3D211811E5e782a808Ca0a75BF1Fc", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0xd4a903930f2c9085586cda0b11d9681eecb20d2f",
    receiveLibAddressOnCurrentChain: "0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004",

    // Remote chain: BNB
    lzEndpointIdOnRemoteChain: 30102,
    confirmationsOnRemoteChain: 0, // will get default confirmations
  },
  // Current chain of BNB => Remote chain of ShimmerEVM
  "BNB-SMR": {
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",
    OAppContractAddressOnCurrentChain: "0x2ACa4353e72e095C328a96c98332542a940b94A5", // OFT
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0xfD6865c841c2d64565562fCc7e05e619A30615f0", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE",
    receiveLibAddressOnCurrentChain: "0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1",

    // Remote chain: ShimmerEVM
    lzEndpointIdOnRemoteChain: 30230,
    confirmationsOnRemoteChain: 0, // will get default confirmations
  },
};

export default SET_CONFIG_DATA;
