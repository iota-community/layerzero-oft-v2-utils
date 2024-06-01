# Pathway IotaEVM <-- wIOTA --> Avalanche

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30106
setEnforcedOptions tx: 0x066436b0095b880718651b99ea062864bb4f891a19cfd01772881eb373c993be
```

### On OFT (destination chain of Avalanche)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network avalanche`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0x144a94b0ae3d475f2ed09e644119fd9da9592420b68932da04771e8a80f0aabf
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30106, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0x7364070456723d93a34047045b690f473ed00ae8456f17d3045eaaa91aca27a9
```

### On OFT (destination chain of Avalanche)

`npx hardhat run scripts/set_peer_oft.ts --network avalanche`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0x01d36898279de4ca2a8397824b8807726b7541dae042fe0618ffdef17b6e94d6
```

## Set config

### For OFTAdapter on IotaEVM -> Avalanche

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->AVALANCHE" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30106, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x238e77c13e2f4891b26d2f7cfe7116d299d4515514191da48c55c2ebd3e53680
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0x9da249bedd7e578cf5129fa2127a0eb0f7c9c857966081390288fb326ec52364
```

### For OFT on Avalanche -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="AVALANCHE->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network avalanche`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000962f502a63f5fbeb44dc9ab932122648e83529590000000000000000000000000000000000000000000000000000000000000000
setConfig for 0x197D1333DEA5Fe0D6600E9b396c7f1B1cFCc558a - tx: 0x09c3b897ba7c7d567d557e5d33f28ef7fa8f5e1100e2e5710d6d445748d57dac
setConfig for 0xbf3521d309642FA9B1c91A08609505BA09752c61 - tx: 0x194604d675d809f210b915beb784cc9e5ed1ea21d1f9858366f05947cdacd221
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (Avalanche)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30106, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0xe4444d75da6bb989fcdc5b98cd7d4937f25c7e3bd994b4c6717424c9379b6bd9
sendOFT - estimated nativeFee: 2.912377302694983853
sendOFT - send tx on source chain: 0xca8eebd01249f7df584292d19fc95a185cd3adf85c2b8d7a475141b9ff19b228
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x16bde0e3e9fcf5e84224a7adf21606de8c28d6dc3a525a3d56839df2270081db
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30106, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x0d96b23626c745270f3bed4d2e8de4860d336f1990d4f835887f620f6f4f0cf1
sendOFT - estimated nativeFee: 2.912377302694983853
sendOFT - send tx on source chain: 0x7dc468e578417aec7c8b1b20408d32adf71cdec4fafdfc393fe54c5eeac7d627
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x98acc29eaa5d9f3c422ab5defe1601bb0556227e517ede2fdec6d1fa4327bb43
```

**Notice**

It took `5 minutes` long for the token sending tx from IotaEVM to Avalanche to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (Avalanche) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network avalanche`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30106, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.002
sendOFTBack - estimated nativeFee: 0.000574162176625852
sendOFTBack - send tx on source chain: 0x86448f6c75f1a41b9069aeb0cee7146f15aaae8b30cb64598adf8016b4f3fe4a
Wait for cross-chain tx finalization by LayerZero ...
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30106, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.003
sendOFTBack - estimated nativeFee: 0.000574162176625852
sendOFTBack - send tx on source chain: 0x315907781d48906867b162ac54f1ddc59d24f97a19df35fc38ad8bc7325f565b
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xaf3d29ea40e38c6184624020c7e6d2486f96e130404c1f62035af19759d7c812
```

**Notice**

It took `5 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to Avalanche to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
