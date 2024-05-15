# Utilities for LayerZero OFT V2

Implemented by IOTA Foundation.

## Introduction

Utilities for LayerZero OFT V2 that facilitate cross-chain sending of erc20 tokens between some source chain (e.g. Sepolia or ShimmerEVM testnet) and some destination chain (e.g. BNB testnet or IOTA EVM testnet):

- Sample Solidity code for OFTAdater and OFT contracts in folder `contracts-standard`
- Scripts for:
  - Deploy OFTAdapter and OFT contracts
  - Set trusted peer
  - Set enforced options
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

### Set enforced options

Both of the OFTAdapter and OFT contract instances need to be set for the enforced options. There are 2 main options:

- lzReceive Option: specifies the gas limit the Executor uses when calling lzReceive on the destination chain.
- lzNativeDrop Option: specifies the amount of native gas `in wei` to be dropped to the receiver address on the destination chain

While the `lzReceive Option` can be set once and forever for any cross-chain token sending, the option `lzNativeDrop Option` can only be set for each of the token sending transaction because the receiver address is unknown in advance.

Further info::
https://docs.layerzero.network/v2/developers/evm/gas-settings/options#option-types

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

### Deploy OFTAdapter on source chain (e.g. Sepolia)

`yarn deploy-oft-adapter-sepolia`

Log output for standard impl:

```
$ npx hardhat run scripts/deploy_oft_adapter.ts --network sepolia
Deployed MyOFTAdapter contract address: 0x4daa81978576cB91a2e1919960e90e46c2a6D586
Done in 6.67s.
```

Log output for custom impl:

```
$ npx hardhat run scripts/deploy_oft_adapter.ts --network sepolia
Deployed OFTAdapter contract address: 0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0
Done in 15.02s.
```

### Deploy OFT on destination chain (e.g. BNB testnet)

`yarn deploy-oft-bnb-testnet`

Log output for standard impl:

```
$ npx hardhat run scripts/deploy_oft.ts --network bnbTestnet
Deployed MyOFT contract address: 0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1
Done in 6.68s.
```

Log output for custom impl:

```
$ npx hardhat run scripts/deploy_oft.ts --network bnbTestnet
Deployed OFT contract address: 0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383
Done in 8.40s.
```

## Set enforced options

### On OFTAdapter (source chain, e.g. Sepolia)

`yarn set-enforced-options-oft-adapter-sepolia`

Log output for standard impl:

```
$ export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network sepolia
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586, oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:40161
setEnforcedOptions tx: 0x957e039c27dab1cd3d4ff672de9f3d5a7684e1442a3cefe036ea0dd233c2f143
Done in 12.69s.
```

Log output for custom impl:

```
$ export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network sepolia
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0, oftContractAddress:0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:40161
setEnforcedOptions tx: 0x599ea605c7c944da34a90ef5ad2956c43b7ca513c06c06fbf3e9b83503c9c1c9
Done in 9.22s.
```

### On OFT (destination chain, e.g. BNB testnet)

`yarn set-enforced-options-oft-bnb-testnet`

Log output for standard impl:

```
$ export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network bnbTestnet
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586, oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:40102
setEnforcedOptions tx: 0x0d0b832bb902acc8abe804c359f109dfd1c906c7cf144db5b00ae63a0291e9e5
Done in 3.33s.
```

Log output for custom impl:

```
$ export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network bnbTestnet
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0, oftContractAddress:0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:40102
setEnforcedOptions tx: 0x0b623b47d11a120a6b02b229959870a36a8d10eba2de717d892465170c535782
Done in 4.97s.
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. Sepolia)

`yarn set-peer-oft-adapter-sepolia`

Log output for standard impl:

```
$ npx hardhat run scripts/set_peer_oft_adapter.ts --network sepolia
setPeerMyOFTAdapter - oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586, lzEndpointIdOnDestChain:40102, oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1
MyOFTAdapter - setPeer tx: 0xc17e7a54d96325768b6427ce893d9b6b7ed04bd920089b63a3f96c005073e9c2
Done in 14.10s.
```

Log output for custom impl:

```
$ npx hardhat run scripts/set_peer_oft_adapter.ts --network sepolia
setPeerMyOFTAdapter - oftAdapterContractAddress:0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0, lzEndpointIdOnDestChain:40102, oftContractAddress:0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383
MyOFTAdapter - setPeer tx: 0xfe902723e578514940d41b54d4953da7ae011ccb61798c77eef7c672bea71e44
Done in 6.85s.
```

### On OFT (destination chain, e.g. BNB testnet)

`yarn set-peer-oft-bnb-testnet`

Log output for standard impl:

```
$ npx hardhat run scripts/set_peer_oft.ts --network bnbTestnet
setPeerMyOFT - oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1, lzEndpointIdOnSrcChain:40161, oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586
MyOFT - setPeer tx: 0xb0012378ee14c9df5c9f86980dd9c96fc8aedb3c19d92c1d91a4259f3981ac35
Done in 4.66s.
```

Log output for custom impl:

```
$ npx hardhat run scripts/set_peer_oft.ts --network bnbTestnet
setPeerMyOFT - oftContractAddress:0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383, lzEndpointIdOnSrcChain:40161, oftAdapterContractAddress:0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0
MyOFT - setPeer tx: 0xa3b98ad35bfab9e7311b3eb829833cf37b95ccb1371d0f3437aa3c52f29b8e55
Done in 6.19s.
```

## Other settings of the contracts

Detailed further settings of the OFTAdapter and OFT contracts are described on the below link:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-delegates

## Send origin tokens from source chain to destination chain

`yarn send-oft-from-sepolia`

Log output for standard impl:

```
$ npx hardhat run scripts/send_oft.ts --network sepolia
sendOFT - oftAdapterContractAddress:0x5D7Cbc05fc6df2832c40023f1Eb2755628C51D81, oftContractAddress:0x075e512E25b45a3EaF8b432220F0Ca8D4e3c6a58, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57a4bd139fb673d364a6f12df9177a3f686625f3, amount:2
sendOFT - approve tx: 0x8fa692edb47b1ad9d21f60b0fa30993e5cd3abd78c3c56fb4f38db5f9b8ac369
sendOFT - estimated nativeFee: 0.000734209489447653
sendOFT - send tx on source chain: 0xeb3e44310a09ae2ab2f0d6d6d3fdfd7c490f8ac536bb20a5e16999b23232ef67
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xc2e5a4be8ae67718e817ff585a32765e393835880068f408fd7724667a25a46c
```

Log output for custom impl:

```
$ npx hardhat run scripts/send_oft.ts --network sepolia
sendOFT - oftAdapterContractAddress:0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0, oftContractAddress:0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:100000
sendOFT - approve tx: 0x59e77524cab462779b22dab759f53151b1edb92ddf2b488b1a463b5bac7395e0
sendOFT - estimated nativeFee: 0.000755124363583443
sendOFT - send tx on source chain: 0x9bb615ff74be7764395317d7e3662a0604c893745f4b199915cca9b98ce94701
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x02aa22f090ad5778f631500dd2fb8285dfb65c7edd574aa7894fbcd85483a574
```

## Send OFT-wrapped tokens back from destination chain to origin chain

`yarn send-oft-back-from-bnb-testnet`

Log output for standard impl:

```
$ npx hardhat run scripts/send_oft_back.ts --network bnbTestnet
sendOFTBack - oftAdapterContractAddress:0x5D7Cbc05fc6df2832c40023f1Eb2755628C51D81, oftContractAddress:0x075e512E25b45a3EaF8b432220F0Ca8D4e3c6a58, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:2
sendOFTBack - estimated nativeFee: 0.054815809525020364
sendOFTBack - send tx on source chain: 0x41bcf78b310dc1bbf9b4005f7412d995011c7815ad5af9cc26b37370e75bbfeb
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xc1031694e92512a0189885ad6419e33196a65b8ae56baa9d555be8686d6d42fe
```

Log output for custom impl:

```
$ npx hardhat run scripts/send_oft_back.ts --network bnbTestnet
sendOFTBack - oftAdapterContractAddress:0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0, oftContractAddress:0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:100000
sendOFTBack - estimated nativeFee: 0.012370381669251284
sendOFTBack - send tx on source chain: 0x883d005991087ff8791522da497144fc3247ab4873f7cc25b7446a36cb979f9e
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x59e42ae58a46a77ea114d16d01448db015e01e58ed61fc2d1d6953cbc572dca0
```
