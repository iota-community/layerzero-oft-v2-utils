// Ensure the `OAppContractAddressOnCurrentChain` points to the correct address of OFTAdapter or OFT on the current chain
const OAppContractAddressOnCurrentChain = "???";

const SET_CONFIG_DATA = {
  // Current chain of ShimmerEVM => Remote chain of BNB
  "SMR-BNB": {
    // Ensure this is the right address !!
    // 0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d
    OAppContractAddressOnCurrentChain, // OFTAdapter
    lzEndpointOnCurrentChain: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1",

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
    // Ensure this is the right address !!
    // 0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe
    OAppContractAddressOnCurrentChain, // OFT
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",

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
  // Current chain of IOTA EVM => Remote chain of BNB
  "IOTA-BNB": {
    // Ensure this is the right address !!
    // 0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f
    OAppContractAddressOnCurrentChain, // OFTAdapter
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7",
    receiveLibAddressOnCurrentChain: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043",

    // Remote chain: BNB
    lzEndpointIdOnRemoteChain: 30102,
    confirmationsOnRemoteChain: 0, // will get default confirmations
  },
  // Current chain of BNB => Remote chain of IOTA EVM
  "BNB-IOTA": {
    // Ensure this is the right address !!
    // 0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9
    OAppContractAddressOnCurrentChain, // OFT
    lzEndpointOnCurrentChain: "0x1a44076050125825900e736c501f859c50fE728c",

    // https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs
    requiredDVNsOnCurrentChain: [
      "0xfD6865c841c2d64565562fCc7e05e619A30615f0", // LayerZero Labs
    ],
    optionalDVNsOnCurrentChain: [], // if specifying optional DVN, the setConfig tx will get reverted, why?

    // From the deployed endpoint, take the SendLib302 and ReceiveLib302
    // https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
    sendLibAddressOnCurrentChain: "0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE",
    receiveLibAddressOnCurrentChain: "0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1",

    // Remote chain: IOTA EVM
    lzEndpointIdOnRemoteChain: 30284,
    confirmationsOnRemoteChain: 0, // will get default confirmations
  },
};

export default SET_CONFIG_DATA;
