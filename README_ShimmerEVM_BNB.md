# Further tests of wSMR/wIOTA on mainnet

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. ShimmerEVM)

`npx hardhat run scripts/deploy_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0xf7Bf4fa4a3a4F0bc4C5c521b76c50eD995b766C2
```

### Deploy OFT on destination chain (e.g. BNB)

`npx hardhat run scripts/deploy_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0x2ACa4353e72e095C328a96c98332542a940b94A5
```

## Set enforced options

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xf7Bf4fa4a3a4F0bc4C5c521b76c50eD995b766C2, oftContractAddress:0x2ACa4353e72e095C328a96c98332542a940b94A5, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30102
setEnforcedOptions tx: 0x81f9d921f50e1d535d7fa80da3ee6b0d885145cf129bad65d5eedd8a37c80b8a
```

### On OFT (destination chain, e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xf7Bf4fa4a3a4F0bc4C5c521b76c50eD995b766C2, oftContractAddress:0x2ACa4353e72e095C328a96c98332542a940b94A5, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30230
setEnforcedOptions tx: 0x7afdaefd4bf29fdd2894834620bab2ab97cec728d1067c6688ff655fddf837bd
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xf7Bf4fa4a3a4F0bc4C5c521b76c50eD995b766C2, lzEndpointIdOnDestChain:30102, oftContractAddress:0x2ACa4353e72e095C328a96c98332542a940b94A5
MyOFTAdapter - setPeer tx: 0x8bb04b0f42304732b58629ef289413462ea26db8a494de3b48856dbfb2b31d90
```

### On OFT (destination chain, e.g. BNB)

`npx hardhat run scripts/set_peer_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x2ACa4353e72e095C328a96c98332542a940b94A5, lzEndpointIdOnSrcChain:30230, oftAdapterContractAddress:0xf7Bf4fa4a3a4F0bc4C5c521b76c50eD995b766C2
MyOFT - setPeer tx: 0x7ec39b06dfb4cd36c97961d7df4f72caf29a19c6708021be86b4f2712f30ebb3
```

## Set config

!!! Without `setConfig` for each of the OApp for a given pathway, cross-chain sending will get reverted !!!

### For OFTAdapter on ShimmerEVM as current chain to interact with BNB as remote chain

`npx hardhat run scripts/set_config.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x148f693af10ddfaE81cDdb36F4c93B31A90076e1, lzEndpointIdOnRemoteChain:30102, OAppContractAddressOnCurrentChain:0x9d8bBc4E081c9bC215ee79443A78C716dFc77109
setConfig for 0xd4a903930f2c9085586cda0b11d9681eecb20d2f - tx: 0xaa50abfb59113a91c19b2967ca328d6c5243a141c64c523f9c78ec632689cac7
setConfig for 0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004 - tx: 0x3b87d82aefc7ac130f1bbcdb771f99386c4e3cda303f8eb7c3e80a99f791b3ae
```

### For OFT on BNB as current chain to interact with ShimmerEVM as remote chain

`npx hardhat run scripts/set_config.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30230, OAppContractAddressOnCurrentChain:0x2ACa4353e72e095C328a96c98332542a940b94A5
setConfig for 0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE - tx: 0xea612b0ffefe553a8fa5e51406ea2a2e24276896890005201030510e7e853759
setConfig for 0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1 - tx: 0x18d0ed2b7107470ed5955cd6022b9c6168d4d4358e01f5b7c9dabd101cb0df69
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

### OFT on destination chain (e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```

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
