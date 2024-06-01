# Utilities for LayerZero OFT V2

Implemented by IOTA Foundation.

## Introduction

Utilities for LayerZero OFT V2 that facilitate cross-chain sending of erc20 tokens (e.g. `wSMR`) between some source chain (e.g. ShimmerEVM mainnet) and some destination chain (e.g. IOTA EVM mainnet):

- Sample Solidity code for OFTAdater and OFT contracts in folder `contracts-standard` and `contracts-wiota`
- Scripts for:
  - Deploy OFTAdapter and OFT contracts
  - Set trusted peer
  - Set enforced options
  - Set config
  - Send tokens from source chain to destination chain and vice versa

## OFTAdapter and OFT contracts

**Use-case 1**

To enable the existing erc20 tokens for cross-chain sending, both OFTAdater and OFT contracts are needed:
https://docs.layerzero.network/v2/developers/evm/oft/adapter

**Use-case 2**

For new erc20 tokens to be launched, OFT standard can be leveraged to enable cross-chain sending without the need of OFTAdapter:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart

## Scripts

### Deploy OFTAdapter and OFT contracts

Standard implementation for `ERC20` in the folder `contracts-standard`:

- MyOFT.sol
- MyOFTAdapter.sol

Custom implementation for `wSMR/wIOTA` in the folder `contracts-wiota`:

- ERC20VotesPermit.sol
- MyOFT.sol
- MyOFTAdapter.sol
- OFTVotesPermit.sol

Further info regarding the custom implementation for `wSMR/wIOTA` is described in [README_wiota.md](./README_wiota.md)

### Set trusted peer

For existing erc20 tokens, both of the OFTAdapter and OFT contract instances need to be paired with each other.

For the upcoming erc20 tokens that wanna leverage OFT standard, the OFT contract instance on the source chain needs to be paired with another OFT contract instance on the destination chain.

Further info:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-trusted-peers

**Notice:**

For an OApp on a given chain, `setPeer` is per eid (remote endpointID):

[mapping(uint32 eid => bytes32 peer) public peers;](https://github.com/LayerZero-Labs/LayerZero-v2/blob/37c598b3e6e218c5e00c8b0dcd42f984e5b13147/packages/layerzero-v2/evm/oapp/contracts/oapp/OAppCore.sol#L17)

So, the next `setPeer` will **not** overwrite the currently-set peer info.

### Set enforced options

Both of the OFTAdapter and OFT contract instances need to be set for the enforced options. There are 2 main options:

- lzReceive Option: specifies the gas limit the Executor uses when calling lzReceive on the destination chain.
- lzNativeDrop Option: specifies the amount of native gas `in wei` to be dropped to the receiver address on the destination chain. The max amount varies per source chain. If source chain does not support gas drop on destination, the `send` tx will get reverted !!

While the `lzReceive Option` can be set once and forever for any cross-chain token sending, the option `lzNativeDrop Option` can only be set for each of the token sending transaction because the receiver address is unknown in advance.

Further info:

- [struct EnforcedOptionParam](https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-enforced-options)
- [Option types](https://docs.layerzero.network/v2/developers/evm/gas-settings/options#option-types)

**Notice:**

For an OApp on a given chain, `setEnforcedOptions` is per eid (remote endpointID):

[mapping(uint32 eid => mapping(uint16 msgType => bytes enforcedOption)) public enforcedOptions;](https://github.com/LayerZero-Labs/LayerZero-v2/blob/37c598b3e6e218c5e00c8b0dcd42f984e5b13147/packages/layerzero-v2/evm/oapp/contracts/oapp/libs/OAppOptionsType3.sol#L16)

So, the next `setEnforcedOptions` will **not** overwrite the currently-set option info.

### Set config

The file `scripts\set_config_data.ts` implements `setConfig` data that can be modified per demand.
For example:

- `SMR_CONFIG` specifies config data on ShimmerEVM chain
- `PATHWAY_CONFIG` specifies config data for various pathways like `SMR->IOTA`

#### Notice

- If ShimmerEVM or IOTA EVM is involved on the pathway, the `setConfig` must be performed correctly on **2 chain sides** for **bi-directional** sending. Otherwise, the `send` tx will always get reverted.

- On some other pathways like between BNB and Polygon or between Sepolia and BNB testnet, the `setConfig` is not mandatory.

For an OApp on a given chain, `setConfig` (which is applied on the deployed EndpointV2 in the given chain) is per eid (remote endpointID):

[mapping(address oapp => mapping(uint32 eid => UlnConfig)) internal ulnConfigs;](https://github.com/LayerZero-Labs/LayerZero-v2/blob/37c598b3e6e218c5e00c8b0dcd42f984e5b13147/packages/layerzero-v2/evm/messagelib/contracts/uln/UlnBase.sol#L34)

So, the next `setConfig` will **not** overwrite the currently-set config info of the pair of OApp and remote endpointID.

#### Input params to the `setConfig` for the pathway from chain A to chain B

- On current chain (i.e. chain A):

  - lzEndpointOnCurrentChain: LayerZero [Endpoint](https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts) address on chain A
  - lzEndpointIdOnCurrentChain: LayerZero Endpoint ID on chain A
  - requiredDVNsOnCurrentChain: required [DVNs](https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses) on chain A. The currently-set value is from [LayerZero Labs](https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses#layerzero-labs)
  - optionalDVNsOnCurrentChain: optional [DVNs](https://docs.layerzero.network/v2/developers/evm/technical-reference/dvn-addresses) on chain A. Currently, ignored with empty array
  - sendLibAddressOnCurrentChain: [SendLib302 address](https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts) associated with the deployed Endpoint address chain A
  - receiveLibAddressOnCurrentChain: [ReceiveLib302 address](https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts) associated with the deployed Endpoint address chain A

- On destination chain (i.e. chain B):
  - lzEndpointIdOnRemoteChain: LayerZero Endpoint ID on chain B
  - confirmationsOnRemoteChain: needed [confirmations](https://docs.layerzero.network/v2/developers/evm/configuration/configure-dvns#define-parameters) on chain B. Currently set to zero to take the default confirmations.

Further reference: https://docs.layerzero.network/v2/developers/evm/configuration/configure-dvns

### Procedure to send tokens from source chain to destination chain and vice versa

For the existing erc20 tokens that involve with both OFTAdapter contract (on source chain) and OFT contract (on destination chain), the token sending procedure is as follows:

1. The sender approves his erc20 tokens for the OFTAdapter contract
2. The sender calls the func `quoteSend()` of the OFTAdapter contract to estimate cross-chain fee to be paid in native on the source chain
3. The sender calls the func `send()` of the OFTAdapter contract to transfer tokens on source chain to destination chain
4. Optional: wait for the tx finalization on destination chain by using the lib [@layerzerolabs/scan-client](https://www.npmjs.com/package/@layerzerolabs/scan-client#example-usage)

To send back the OFT-wrapped tokens on destination chain to source chain, the procedure is similar except that approve step is not needed:

1. The sender calls the func `quoteSend()` of the OFT contract to estimate cross-chain fee to be paid in native on the sender chain
2. The sender calls the func `send()` of the OFT contract to transfer tokens on source chain to destination chain
3. Optional: wait for the tx finalization on destination chain by using the lib `@layerzerolabs/scan-client`

**Appendix:**

- [function quoteSend()](https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L127C60-L127C73)
- [struct SendParam](https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L10)
- [function send()](https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L144)
- [@layerzerolabs/scan-client](https://www.npmjs.com/package/@layerzerolabs/scan-client#example-usage)
- [LayerZero Endpoint V2](https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts)
- [LayerZero explorer](https://testnet.layerzeroscan.com/)

## Installation

`yarn`

## Compile contracts

- Standard implementation for `ERC20`:

  - Copy the folder `contracts-standard` to `contracts`
  - Run the cmd: `yarn compile`

- Custom implementation for `wSMR/wIOTA`:
  - Copy the folder `contracts-wiota` to `contracts`
  - Run the cmd: `yarn compile`

## Configuration

The config is specified in the template file `.env.example` that needs to be copied to another file `.env`.

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. ShimmerEVM)

`npx hardhat run scripts/deploy_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d
```

### Deploy OFT on destination chain (e.g. IotaEVM)

`npx hardhat run scripts/deploy_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3
```

## Verify contracts

The following cmd can be used to verify the deployed contract

`npx hardhat verify --network networkNameSpecifiedInHardhatConfig deployedContractAddess "CTOR arg 1" "CTOR arg 2" "CTOR arg 3"`

E.g.
`npx hardhat verify --network iotaEvmMainnet 0xAf5b83063247603d1D042FA2a47c404322255bD4 "0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c" "0x1a44076050125825900e736c501f859c50fE728c" "0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419"`

## Set enforced options

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0x0a3ac0cf2eccfee9c22041e74daed804c6570eccde9d72afb3069d5b17bd3a6f
```

### On OFT (destination chain, e.g. IotaEVM)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30230
setEnforcedOptions tx: 0x3ac2e349fa834e0bf38ec8bf5fbc0916e2e5e410623516659d15cf28af5df3ba
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, lzEndpointIdOnDestChain:30284, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3
MyOFTAdapter - setPeer tx: 0x3da7505ead27f296c55d8d982c9be9a7243d7d04e5a15a024fcc6b548a0bb6e2
```

### On OFT (destination chain, e.g. IotaEVM)

`npx hardhat run scripts/set_peer_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnSrcChain:30230, oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d
MyOFT - setPeer tx: 0x26c71a52296f4903f0de5e44e5014c66b6e5381c8442fe98c15a9b513284faad
```

## Set config

!!! Without `setConfig` for each of the OApp for a given pathway, cross-chain sending will get reverted !!!

### For OFTAdapter on ShimmerEVM as current chain to interact with IotaEVM as remote chain

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="SMR->IOTA" && export OAppContractAddressOnCurrentChain=0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d && npx hardhat run scripts/set_config.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x148f693af10ddfaE81cDdb36F4c93B31A90076e1, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009bdf3ae7e2e3d211811e5e782a808ca0a75bf1fc0000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xd4a903930f2c9085586cda0b11d9681eecb20d2f - tx: 0x77d784b567550f18c38e0ffe7866223ce1f241d7339b9aefb2fdd5f1e1676484
setConfig for 0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004 - tx: 0x3222da93d2009cb094bb0de09c33e7a43eb15fc9a2f9b047d1ebbf2ca2ea791f
```

### For OFT on IotaEVM as current chain to interact with ShimmerEVM as remote chain

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->SMR" && export OAppContractAddressOnCurrentChain=0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30230, OAppContractAddressOnCurrentChain:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0xebf19d455b32a126155bf5be6827abd831152598fa77e25c447e52936eaf69b5
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0xecff6ae37fe3cd17e4278f5f17199562f4b4e5b26667d7eb2c6e4677dc1d06f4
```

## Other settings of the contracts

Detailed further settings of the OFTAdapter and OFT contracts are described on the below link:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-delegates

## Transfer contract ownership

### OFTAdapter on source chain (e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/transfer_ownership.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```

```

### OFT on destination chain (e.g. IotaEVM)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```

```

## Send origin tokens from source chain to destination chain

`npx hardhat run scripts/send_oft.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.1, erc20TokenAddress:0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b
sendOFT - approve tx: 0x2270fe3db02ddfba2c0a5e16343fc44596c10a64c97f4e002cc9dbeef2f15b5d
sendOFT - estimated nativeFee: 2.608622989813813602
sendOFT - send tx on source chain: 0x09c4429d2e1bd855ec24d0e14d2e1a3ca697518344a3047f174beed8c9581332
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xe597568c78144431fb251f3f313f1a3cfa71c537c673e59c3dc6ef714ab228f6
```

## Send OFT-wrapped tokens back from destination chain to origin chain

`npx hardhat run scripts/send_oft_back.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:0.01
sendOFTBack - estimated nativeFee: 0.112473266637699722
sendOFTBack - send tx on source chain: 0xcd2fd77065c31577db5cf8f1c62aba790d40e262dbf254e00c9c9040ba2e1cf8
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x5199f7b5de6fd9d8edb661588805a71a64238e63752bb28d8c863651c52bf13b
```
