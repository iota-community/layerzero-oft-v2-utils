# Pathway IotaEVM <-- wIOTA --> Optimism

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30111
setEnforcedOptions tx: 0x815d9e9904a8fb57686712982dbfa0fdcf8570cc4e0b2943dd64da5dc2f6a66c
```

### On OFT (destination chain of Optimism)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network optimism`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0xb7cc6f97b5d66ea10fc24fcbdbd9daa89f2ecb1eb194c9061781710accab759d
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30111, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0x94e83aa7b770d669e9e6b59668ff5f60e4a4ab63801f86684b047d6141b8032a
```

### On OFT (destination chain of Optimism)

`npx hardhat run scripts/set_peer_oft.ts --network optimism`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0x7440adb554604fe234daa58ff4ce71ef1b9607d08b8106a4d22b4e8b716cad8e
```

## Set config

### For OFTAdapter on IotaEVM -> Optimism

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->OPTIMISM" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30111, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0xbf8e2bea8690e00345ed3ae9ec556e4d4bb646cae26bdb490a9ad82085747e85
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0x58fd9c1e57ce8346a442c9bc7a5d5ea5038c24fb0226ed5ad24f0cf72b513e78
```

### For OFT on Optimism -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="OPTIMISM->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network optimism`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006a02d83e8d433304bba74ef1c4279139581871420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0x1322871e4ab09Bc7f5717189434f97bBD9546e95 - tx: 0xf3d4aa39e042b4d13cc84e1cfdc1a6d0148ca64438cf45bb37c660ae0ea3084f
setConfig for 0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063 - tx: 0x45ac826f28bfa6bc82441b7c923f7b9f9fb8ad4211e5883dff2c8957e55bd30c
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (Optimism)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30111, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x88c6ac6c0b47ef652aff7d503e309bca10a89ecd7f4834df3ff29d9a256f6126
sendOFT - estimated nativeFee: 0.25236114605873155
sendOFT - send tx on source chain: 0x49432420a150ccdde43462f1706c0240da88ad964be95678bcfaac2c20eb8d8c
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x4ed497a206d3770b317fdd4dc0ebae52e9a3a4d8928b4a08ed9b5b91c773646a
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30111, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x0f9c97822704ecc0479c63f4d711bff980c7540d5bc4f12dfa9086e3ec4c317e
sendOFT - estimated nativeFee: 0.264451849022186834
sendOFT - send tx on source chain: 0x792b7f7910f0b0a97637c59fdb34c735f73524e253a6c33e401f38e465e77f63
Wait for cross-chain tx finalization by LayerZero ...
```

**Notice**

It took `5 minutes` long for the token sending tx from IotaEVM to Optimism to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (Optimism) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network optimism`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30111, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.002
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0x52db82a390b175f16dfd2591fd6ed7b957f129d82cf5328b587e5e2db51b4b58
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xefec2801dc753695db0022de6d1ff5559c8d17f8ebe90fc31762e2324ad851ed
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30111, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.003
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0x3376524e8f43fa7cc82edb354bc52592fd9f904de13deb782e990832d9465d4b
Wait for cross-chain tx finalization by LayerZero ...
```

**Notice**

It took `5 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to Optimism to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
