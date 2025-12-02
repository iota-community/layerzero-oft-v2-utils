# OFT setup on EVM

The setup includes:

- set enforced options
- set remote peer
- set config

## Set enforced options

Used to enforce options for a message type sent to a specific remote chain (destination EID).

2 message types:
- `1` = send
- `2` = sendAndCall

Options:
- executorLzReceiveOptionMaxGas: Gas for the lzReceive call on remote chain.
- executorNativeDropOption: native drop amount to the recipient on remote chain.

Needed input params:

- oftAdapterContractAddress: Solidity OFTAdapter contract on EVM
- executorLzReceiveOptionMaxGas: [200000](https://docs.layerzero.network/v2/developers/evm/gas-settings/options#lzreceive-option)
- executorGasDropInWeiOnDestChain: `0` (to disable gas drop)
- lzEndpointIdOnRemoteChain: EID of dest chain

### For OFTAdapter

#### on Sepolia EVM as source chain

Run the cmd:

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network sepolia`

Log output:

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3, oftContractAddress:, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:40423
setEnforcedOptions tx: 0x0ee19f2402149b6e3b5f42b4a2142e13c0260126361651617a9281b4786fda80
```

#### on Arbitrum mainnet as source chain

Run the cmd:

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network arbitrum`

Log output:

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x50721AaD21A49b1024E985Bd99d4904326d9b951, oftContractAddress:, executorLzReceiveOptionMaxGas:200000, executorGasDropInWeiOnDestChain:0, lzEndpointIdOnRemoteChain:30423
setEnforcedOptions tx: 0xb80491e8a6cf7e1ec24e881325b679631d3060ddc3413cf1834d1689936dd3c4
```

### For OFT

#### on Sepolia EVM as destination chain

Run cmd:

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network sepolia`

Log output:

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:, oftContractAddress:0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:40423
setEnforcedOptions tx: 0x07282486f01964548eabb5061b5d2ee6b41b2f05687df4840f758c71006fa6c9
```

#### on IOTA EVM as source chain

Run cmd:

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output:

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:, oftContractAddress:0x02AE4418F0FbcbE383b4eD103cf6B88B24542f4C, executorLzReceiveOptionMaxGas:200000, executorGasDropInWeiOnDestChain:0, lzEndpointIdOnRemoteChain:30423
setEnforcedOptions tx: 0x184b32e3ce89e77fb203a9dbc5baef3216b44d3151bb9e615562d26fbe0cd928
```

## Set remote peer

The OFTAdapter or OFT needs to be set with the remote peer which includes:

- OFT Solidity contract address if on EVM or OFT Move package ID if on MoveVM
  - !! need to perform [deployment and setup](https://github.com/iota-community/layerzero-move-oft-v2-utils) on the dest chain !!

- EID of the remote chain

Needed input params:

- oftAdapterContractAddress or oftContractAddress on current chain
- oftPackageId: Move "oftPackageId" (instead of "oftObjectId") on MoveVM as remote chain
- lzEndpointIdOnRemoteChain: EID of remote chain

### For OFTAdapter

#### on Sepolia EVM as source chain

Run the cmd:

`npx hardhat run scripts/set_peer_oft_adapter.ts --network sepolia`

Log output:

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3, lzEndpointIdOnRemoteChain:40423, oftPackageId:0xa947ff8022f37c32b06a67d674154f170422e0c95cf44e1a55f3c2a45fa355f2
MyOFTAdapter - setPeer tx: 0x4a16cbbe0e516a0ce8593f08386d34d2aa0af8f84c44fb12e199b441f2f354cb
```

#### on Arbitrum mainnet as source chain

Run the cmd:

`npx hardhat run scripts/set_peer_oft_adapter.ts --network arbitrum`

Log output:

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x50721AaD21A49b1024E985Bd99d4904326d9b951, lzEndpointIdOnRemoteChain:30423, oftPackageId:0xed312b3f38559d4cb042f5314cbedef8d52b96c6ddb138560a01f71a6e69b82e
MyOFTAdapter - setPeer tx: 0xf4f42147d18f7e219fd05ec075ce98b3468c69d9641d8cb90b62ed90d1b5834e
```

### For OFT

#### on Sepolia EVM as dest chain

Run the cmd:

`npx hardhat run scripts/set_peer_oft.ts --network sepolia`

Log output:

```
setPeerMyOFT - oftContractAddress:0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA, lzEndpointIdOnCurrentChain:40423, oftAdapterContractAddress:0xc36df91c6eccc8a3a026ead7656abb7a36ab4210b2575a7dc27199eeec1f3de4
MyOFT - setPeer tx: 0xe1a57c06ea7a51aba28da9d742c344c6e372a81651681fc3b1b71e773dcb7171
```

#### on IOTA EVM as source chain

Run the cmd:

`npx hardhat run scripts/set_peer_oft.ts --network iotaEvmMainnet`

Log output:

```
setPeerMyOFT - oftContractAddress:0x02AE4418F0FbcbE383b4eD103cf6B88B24542f4C, lzEndpointIdOnCurrentChain:30284, oftPackageId:0xb1f576849d9a6086982a13fedf1dd785da4b1314d430696e2f1240e5ed9d9be5
MyOFT - setPeer tx: 0x8724eeaee33bcaa76c097770b524fcf551b36f4e53ddc33639934aab1e01a5f5
```

## Set config on the current EVM chain

Set config on the Endpoint contract for a given OApp (e.g. OFTAdapter or OFT) on the `current chain` to interact with remote chain. There are 2 configs to be set:

- set config for receiveLib
- set config for sendLib

The config data is specified in the file [set_config_data.ts](/scripts/set_config_data.ts). No need to change the existing chain configs, but new chain config can be added.

### For OFTAdapter

#### On Sepolia as source chain

Run cmd:

```
export isForOFTAdapter=true && npx hardhat run scripts/set_config.ts --network sepolia
```

Log output on Sepolia EVM as source chain:

```
setConfig - lzEndpointIdOnRemoteChain:40423, confirmations:0, lzEndpoint:0x6EDCE65403992e310A62460808c4b910D972f10f, OAppContractAddress:0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3, requiredDVNs:["0x8b450b0acF56E1B0e25C581bB04FBAbeeb0644b8"], sendLibAddress:0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE, receiveLibAddress:0xdAf00F5eE2158dD58E0d3857851c432E34A3A851, maxMessageSize:10000, executor:0x718b92b5cb0a5552039b593faf724d182a881eda
setConfig for receiveLib 0xdAf00F5eE2158dD58E0d3857851c432E34A3A851 - tx: 0xf6371634c06037a9171468e08bbf1eb964f4b0401411158171aec82805a80412
setConfig for sendLib 0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE - tx: 0xbe19178005af18f5b9247c6f0365bbae517bd3224f01836041fb18d78a731a72
```

#### On Arbitrum mainnet as source chain

Run cmd:

```
export isForOFTAdapter=true && npx hardhat run scripts/set_config.ts --network arbitrum
```

Log output on Arbitrum mainnet as source chain:

```
setConfig - lzEndpointIdOnRemoteChain:30423, confirmations:0, lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, OAppContractAddress:0x50721AaD21A49b1024E985Bd99d4904326d9b951, requiredDVNs:["0x2f55c492897526677c5b68fb199ea31e2c126416","0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc"], sendLibAddress:0x975bcD720be66659e3EB3C0e4F1866a3020E493A, receiveLibAddress:0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6, maxMessageSize:10000, executor:0x31CAe3B7fB82d847621859fb1585353c5720660D
setConfig for receiveLib 0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6 - tx: 0x35b0ad76b7dbea9d45d598285b2072796bdf699f4090240a4562723ed8a64791
setConfig for sendLib 0x975bcD720be66659e3EB3C0e4F1866a3020E493A - tx: 0x9ff6e416206e595eaf900c70138311252923cfbc050e88a82e89f3b4ed3b25cf
```

### For OFT

Run cmd:

```
export isForOFTAdapter=false && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet
```

Log output on IOTA EVM as source chain:

```
setConfig - lzEndpointIdOnRemoteChain:30423, confirmations:0, lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, OAppContractAddress:0x02AE4418F0FbcbE383b4eD103cf6B88B24542f4C, requiredDVNs:["0x6788f52439aca6bff597d3eec2dc9a44b8fee842"], sendLibAddress:0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7, receiveLibAddress:0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043, maxMessageSize:10000, executor:0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f
setConfig for receiveLib 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0xe7d04d59e92b5e53fa3fea8fcac239828eaf77e6b6d94d3498689238031d43fe
setConfig for sendLib 0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7 - tx: 0x6cca18eb85e78b0576860c9ea896cee5cc71dee2027293bc4ecf431ceeadf69e
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
- lzEndpointIdOnCurrentChain
- lzEndpointIdOnRemoteChain
- executorGasDropInWeiOnDestChain,
- executorLzReceiveOptionMaxGas,
- sendingAccountPrivKey
- receivingAccountAddress
- amount
- erc20TokenAddress

`npx hardhat run scripts/send_oft.ts --network sepolia`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnCurrentChain:30230, lzEndpointIdOnRemoteChain:30284, executorGasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.1, erc20TokenAddress:0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b
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
sendOFTBack - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnCurrentChain:30230, lzEndpointIdOnRemoteChain:30284, executorGasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:0.01
sendOFTBack - estimated nativeFee: 0.112473266637699722
sendOFTBack - send tx on source chain: 0xcd2fd77065c31577db5cf8f1c62aba790d40e262dbf254e00c9c9040ba2e1cf8
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x5199f7b5de6fd9d8edb661588805a71a64238e63752bb28d8c863651c52bf13b
```
