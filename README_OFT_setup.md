# OFT setup on EVM

Pathway is from Sepolia EVM to IOTA L1 testnet.

The setup includes:
- set enforced options
- set remote peer
- set config

## Set enforced options

### For OFTAdapter (on EVM as source chain)

Needed input params:
- oftAdapterContractAddress: Solidity OFTAdapter contract on EVM
- executorLzReceiveOptionMaxGas: [200000](https://docs.layerzero.network/v2/developers/evm/gas-settings/options#lzreceive-option)
- lzEndpointIdOnDestChain: EID of IOTA L1 testnet as dest chain

Run the cmd:

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network sepolia`

Log output:

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3, oftContractAddress:, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnDestChain:40423
setEnforcedOptions tx: 0x0ee19f2402149b6e3b5f42b4a2142e13c0260126361651617a9281b4786fda80
```

### For OFT (on EVM as destination chain)

Needed input params:
- oftContractAddress: Solidity OFT contract on EVM
- executorLzReceiveOptionMaxGas: [200000](https://docs.layerzero.network/v2/developers/evm/gas-settings/options#lzreceive-option)
- lzEndpointIdOnSrcChain: EID of IOTA L1 testnet as src chain

Run cmd:

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network sepolia`

Log output:

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:, oftContractAddress:0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:40423
setEnforcedOptions tx: 0x07282486f01964548eabb5061b5d2ee6b41b2f05687df4840f758c71006fa6c9
```

## Set remote peer

The OFTAdapter or OFT needs to be set with the remote peer which includes:
- OFT Solidity contract address if on EVM or OFT Move package ID if on MoveVM
- EID of the remote chain

### For OFTAdapter (on EVM as source chain)

Needed input params:
- oftAdapterContractAddress
- oftPackageId: Move "oftPackageId" (instead of "oftObjectId") on IOTA L1
- lzEndpointIdOnDestChain: EID of IOTA L1 testnet as dest chain

Run the cmd:

`npx hardhat run scripts/set_peer_oft_adapter.ts --network sepolia`

Log output:

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3, lzEndpointIdOnDestChain:40423, oftPackageId:0xa947ff8022f37c32b06a67d674154f170422e0c95cf44e1a55f3c2a45fa355f2
MyOFTAdapter - setPeer tx: 0x4a16cbbe0e516a0ce8593f08386d34d2aa0af8f84c44fb12e199b441f2f354cb
```

### For OFT (on EVM as dest chain)

Needed input params:
- oftContractAddress
- oftPackageId: Move "oftPackageId" (instead of "oftObjectId") on IOTA L1
- lzEndpointIdOnSrcChain: EID of IOTA L1 testnet as src chain

Run the cmd:

`npx hardhat run scripts/set_peer_oft.ts --network sepolia`

Log output:

```
setPeerMyOFT - oftContractAddress:0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA, lzEndpointIdOnSrcChain:40423, oftAdapterContractAddress:0xc36df91c6eccc8a3a026ead7656abb7a36ab4210b2575a7dc27199eeec1f3de4
MyOFT - setPeer tx: 0xe1a57c06ea7a51aba28da9d742c344c6e372a81651681fc3b1b71e773dcb7171
```

## Set config

Set config on the Endpoint contract for a given OApp (e.g. OFTAdapter or OFT) on the current chain to interact with remote chain. There are 2 configs to be set:

- set config for receiveLib
- set config for sendLib

The config data is specified in the file [set_config_data.ts](/scripts/set_config_data.ts).

### For OFTAdapter (on EVM as source chain)

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

```
export PATHWAY="sepolia->iotal1testnet" && export OAppContractAddressOnCurrentChain=0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3 && npx hardhat run scripts/set_config.ts --network sepolia
```

The `OAppContractAddressOnCurrentChain` is the deployed OFTAdapter on EVM as src chain.

Log output:

```
setConfig - lzEndpointIdOnRemoteChain:40423, confirmationsOnCurrentChain:0, lzEndpointOnCurrentChain:0x6EDCE65403992e310A62460808c4b910D972f10f, OAppContractAddressOnCurrentChain:0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3, requiredDVNsOnCurrentChain:["0x8b450b0acF56E1B0e25C581bB04FBAbeeb0644b8"], sendLibAddressOnCurrentChain:0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE, receiveLibAddressOnCurrentChain:0xdAf00F5eE2158dD58E0d3857851c432E34A3A851, maxMessageSize:10000, executor:0x718b92b5cb0a5552039b593faf724d182a881eda
setConfig for receiveLib 0xdAf00F5eE2158dD58E0d3857851c432E34A3A851 - tx: 0xf6371634c06037a9171468e08bbf1eb964f4b0401411158171aec82805a80412
setConfig for sendLib 0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE - tx: 0xbe19178005af18f5b9247c6f0365bbae517bd3224f01836041fb18d78a731a72
```

### For OFT (on EVM as dest chain) --> check again!

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

```
export PATHWAY="sepolia->iotal1testnet" && export OAppContractAddressOnCurrentChain=0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA && npx hardhat run scripts/set_config.ts --network sepolia
```

The `OAppContractAddressOnCurrentChain` is the deployed OFT on Sepolia EVM as dest chain.

Log output:

```
setConfig - lzEndpointIdOnRemoteChain:40423, confirmationsOnCurrentChain:0, lzEndpointOnCurrentChain:0x6EDCE65403992e310A62460808c4b910D972f10f, OAppContractAddressOnCurrentChain:0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA, requiredDVNsOnCurrentChain:["0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193"], sendLibAddressOnCurrentChain:0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE, receiveLibAddressOnCurrentChain:0xdAf00F5eE2158dD58E0d3857851c432E34A3A851, maxMessageSize:10000, executor:0x718b92b5cb0a5552039b593faf724d182a881eda
setConfig for receiveLib 0xdAf00F5eE2158dD58E0d3857851c432E34A3A851 - tx: 0xa93701ff7e3b8b240b896d7ac7cdef8e10eec5459cb996d3f2efd95a31951109
setConfig for sendLib 0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE - tx: 0x8ce2a056ecc898cbee6b57bf9637e963fb12b8bb5f7fe1d442eff615dba56fb2
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

## Send erc20 tokens from Sepolia EVM as source chain to IOTA L1 testnet as destination chain

Needed input params:

- oftAdapterContractAddress
- lzEndpointIdOnSrcChain
- lzEndpointIdOnDestChain
- gasDropInWeiOnDestChain,
- executorLzReceiveOptionMaxGas,
- sendingAccountPrivKey
- receivingAccountAddress
- amount
- erc20TokenAddress

`npx hardhat run scripts/send_oft.ts --network sepolia`

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
