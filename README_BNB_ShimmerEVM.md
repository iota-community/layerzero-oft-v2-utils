# Further tests of wSMR/wIOTA on mainnet

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. BNB)

`npx hardhat run scripts/deploy_oft_adapter.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0x403FA855F384B9428b872E2b54Bf458C92Ae1777
```

### Deploy OFT on destination chain (e.g. ShimmerEVM)

`npx hardhat run scripts/deploy_oft.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0x69762248c3D25b27188490B44FAc13E8a766c44B
```

## Set enforced options

### On OFTAdapter (source chain, e.g. BNB)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x403FA855F384B9428b872E2b54Bf458C92Ae1777, oftContractAddress:0x69762248c3D25b27188490B44FAc13E8a766c44B, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30230
setEnforcedOptions tx: 0xfa8f1670adddc3554c2060f84abbd8fdafea5d44b9b2f9364697d8876b7f7428
```

### On OFT (destination chain, e.g. ShimmerEVM)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0x403FA855F384B9428b872E2b54Bf458C92Ae1777, oftContractAddress:0x69762248c3D25b27188490B44FAc13E8a766c44B, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30102
setEnforcedOptions tx: 0xc11fdf586a453379c5aedbfa58071fe015a435fa7a4dfd7e1b95da3cfb908ba5
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. BNB)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x403FA855F384B9428b872E2b54Bf458C92Ae1777, lzEndpointIdOnDestChain:30230, oftContractAddress:0x69762248c3D25b27188490B44FAc13E8a766c44B
MyOFTAdapter - setPeer tx: 0xd003fb1029f7b23f3ba16ba577ad102b159ca9dec3d812b7b2ea77e565154842
```

### On OFT (destination chain, e.g. ShimmerEVM)

`npx hardhat run scripts/set_peer_oft.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x69762248c3D25b27188490B44FAc13E8a766c44B, lzEndpointIdOnSrcChain:30102, oftAdapterContractAddress:0x403FA855F384B9428b872E2b54Bf458C92Ae1777
MyOFT - setPeer tx: 0x4973babd1064b4dff42b418c5ec2a63f8679747c329195ba588d67b7504ffddf
```

## Other settings of the contracts

Detailed further settings of the OFTAdapter and OFT contracts are described on the below link:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-delegates

## Transfer contract ownership

### OFTAdapter on source chain (e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/transfer_ownership.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```

```

### OFT on destination chain (e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```

```

## Send origin tokens from source chain to destination chain

`npx hardhat run scripts/send_oft.ts --network bnbMainnet`

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
