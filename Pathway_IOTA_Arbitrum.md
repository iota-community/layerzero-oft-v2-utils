# Pathway IotaEVM <-- wIOTA --> Arbitrum

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30110
setEnforcedOptions tx: 0x02b07f0d9a79fd94776dd582ab35fe3eeb15931d29c793ff5fbcfa860c9df614
```

### On OFT (destination chain of Arbitrum)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network arbitrum`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0xe14ad5716c74420957d5e632dee1996af99291132c094befc48ac574711bdcd1
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30110, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0xa0b8a0595aafa1bf354b9fa3b7175e90bc9ef26019660be23702de82c8ada8ed
```

### On OFT (destination chain of Arbitrum)

`npx hardhat run scripts/set_peer_oft.ts --network arbitrum`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0xcb4b18d0e49d98768a5f9694bd44ba40dc708817f94f76bb3a50e1e1562f89a7
```

## Set config

### For OFTAdapter on IotaEVM -> Arbitrum

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->ARBITRUM" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30110, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x8e6983541c26f57da4df7eee5503dcee9220dfd4d6150343b0722d8d17f50f87
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0xa42f0f6adf692eacb5b9ec04131625fc205669698e572fac20fe4bac5595295b
```

### For OFT on Arbitrum -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="ARBITRUM->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network arbitrum`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000002f55c492897526677c5b68fb199ea31e2c1264160000000000000000000000000000000000000000000000000000000000000000
setConfig for 0x975bcD720be66659e3EB3C0e4F1866a3020E493A - tx: 0xbff605bc42a749f72de6fca4e157d478f1ba7c05abfe6be181729ccfbbd5670d
setConfig for 0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6 - tx: 0xd61de0700cb4d6dc46517db9bde93cf56f24f67027caffa0b4a7d803faee7882
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (Arbitrum)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30110, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x4ae85091e0e5aee2138d01f7be7cbba8b9696840e3e42236c083e9f12ec33b63
sendOFT - estimated nativeFee: 0.356148656974588777
sendOFT - send tx on source chain: 0x9a0f63843b8b6f9bcbd777645fcc7e7f40023a2c4d1221d57f6cd92f878b26a4
Wait for cross-chain tx finalization by LayerZero ...
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30110, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x6183e220b1159c28466b9773ae19cf656e81ca8d16e0ea0fd62731b9e48b2c66
sendOFT - estimated nativeFee: 0.406792914298425095
sendOFT - send tx on source chain: 0x6a2105db974ed241db231c105d464552eab3d95c1b8b578a377263e7a26d6613
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xfddf5c2daafd48c66d3dbf17fd35656abdb54733ec1224b1c5fb265a0fec9c5f
```

**Notice**

It took `5 minutes` long for the token sending tx from IotaEVM to Arbitrum to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (Arbitrum) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network arbitrum`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30110, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.002
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0x3d8f67d4086634a8f042ff8450666430a113d69338b5dc10bc6b14f32cc77451
Wait for cross-chain tx finalization by LayerZero ...
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30110, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.003
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0x1b1dea2a9328c35105cedee383f99348805c30c6b510bd0ba4dc693c8cb5bc5a
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xed924846aee6328a2280fb1049e1e87e0de2bcb6f54dc85e08e12470788c1ba2
```

**Notice**

It took `5 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to Arbitrum to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
