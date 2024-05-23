# Further tests of wSMR/wIOTA on mainnet

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. ShimmerEVM)

`npx hardhat run scripts/deploy_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0x9d8bBc4E081c9bC215ee79443A78C716dFc77109
```

### Deploy OFT on destination chain (e.g. BNB)

`npx hardhat run scripts/deploy_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0xadfaa1CF2450561bBaFdCcE2E0162c940A2Eb8a1
```

## Set enforced options

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x9d8bBc4E081c9bC215ee79443A78C716dFc77109, oftContractAddress:0xadfaa1CF2450561bBaFdCcE2E0162c940A2Eb8a1, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30102
setEnforcedOptions tx: 0x32359200414d92dac44e3e7886952ce0070e94bb0416dc9ffa9e9776db355e5a
```

### On OFT (destination chain, e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0x9d8bBc4E081c9bC215ee79443A78C716dFc77109, oftContractAddress:0xadfaa1CF2450561bBaFdCcE2E0162c940A2Eb8a1, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30230
setEnforcedOptions tx: 0xfb50257412798211888151bd0842a3708bba866a50a55845ef5fd809b42a869a
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x9d8bBc4E081c9bC215ee79443A78C716dFc77109, lzEndpointIdOnDestChain:30102, oftContractAddress:0xadfaa1CF2450561bBaFdCcE2E0162c940A2Eb8a1
MyOFTAdapter - setPeer tx: 0x9cf72e967db343e89b63d0a462330447949f34ccef260cdd7232f2b83d3cd70b
```

### On OFT (destination chain, e.g. BNB)

`npx hardhat run scripts/set_peer_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0xadfaa1CF2450561bBaFdCcE2E0162c940A2Eb8a1, lzEndpointIdOnSrcChain:30230, oftAdapterContractAddress:0x9d8bBc4E081c9bC215ee79443A78C716dFc77109
MyOFT - setPeer tx: 0x74a1596a2da414f6fd27a454a1b15ff7abd01a26dee623b01ff99d4c74ed6f2f
```

## Other settings of the contracts

Detailed further settings of the OFTAdapter and OFT contracts are described on the below link:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-delegates

## Transfer contract ownership

### OFTAdapter on source chain (e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/transfer_ownership.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
transferOwnership - isForOFTAdapter:true, oftAdapterContractAddress:0x9d8bBc4E081c9bC215ee79443A78C716dFc77109, oftContractAddress:0xadfaa1CF2450561bBaFdCcE2E0162c940A2Eb8a1, newOwnerAddress:0xa3D034c1e9582dD340D78D620Ce47f589859F1BC
transferOwnership tx: 0x7023cdb4af76e8d8af710a2a0fb976818b6996515e34e946c01c39ef9c132ad4
```

### OFT on destination chain (e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
transferOwnership - isForOFTAdapter:false, oftAdapterContractAddress:0x9d8bBc4E081c9bC215ee79443A78C716dFc77109, oftContractAddress:0xadfaa1CF2450561bBaFdCcE2E0162c940A2Eb8a1, newOwnerAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028
transferOwnership tx: 0x5c4619a30ae43bfb8147660498acfa64bc4fff2f04d009a036c90c5a6489d2ee
```

## Send origin tokens from source chain to destination chain

`npx hardhat run scripts/send_oft.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```

```

## Send OFT-wrapped tokens back from destination chain to origin chain

`yarn send-oft-back-from-bnb-testnet`

Log output for standard impl:

```
$ npx hardhat run scripts/send_oft_back.ts --network bnbMainnet
sendOFTBack - oftAdapterContractAddress:0x5D7Cbc05fc6df2832c40023f1Eb2755628C51D81, oftContractAddress:0x075e512E25b45a3EaF8b432220F0Ca8D4e3c6a58, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:2
sendOFTBack - estimated nativeFee: 0.054815809525020364
sendOFTBack - send tx on source chain: 0x41bcf78b310dc1bbf9b4005f7412d995011c7815ad5af9cc26b37370e75bbfeb
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xc1031694e92512a0189885ad6419e33196a65b8ae56baa9d555be8686d6d42fe
```

Log output for custom impl (contracts-wiota):

```
$ npx hardhat run scripts/send_oft_back.ts --network bnbMainnet
sendOFTBack - oftAdapterContractAddress:0xA5bB58Edd16B6c89b227457D456dc01DeCBB77A0, oftContractAddress:0x637954d6778Ba0b589148Bb3FdcAF278AB1cb383, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:100000
sendOFTBack - estimated nativeFee: 0.012370381669251284
sendOFTBack - send tx on source chain: 0x883d005991087ff8791522da497144fc3247ab4873f7cc25b7446a36cb979f9e
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x59e42ae58a46a77ea114d16d01448db015e01e58ed61fc2d1d6953cbc572dca0
```
