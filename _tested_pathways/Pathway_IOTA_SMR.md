# Pathway IotaEVM <-- wIOTA --> ShimmerEVM

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30230
setEnforcedOptions tx: 0x86110615cac2ffc4faeef3ae852c9b218da200daaf199d191dc0f6df0ebb1035
```

### On OFT (destination chain of ShimmerEVM)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0xf8f8306a4662d03a7efcbcdb71f74e7baf642336fd21762f28f875f4d0265acb
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30230, oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFTAdapter - setPeer tx: 0x8eab513bdfb0b5502af86e4403bf87851343ed837f4b7e30ed5ed156757bc133
```

### On OFT (destination chain of ShimmerEVM)

`npx hardhat run scripts/set_peer_oft.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0xf49590ceb9fb2c4290e40d2b65f61f916892835bdc3cf4a8baad2dcd1494e65d
```

## Set config

### For OFTAdapter on IotaEVM -> ShimmerEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->SMR" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30230, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0xf2903ad44aac2727ba6e2f80913f9203f0cfc8bd1ae2b87d2351b56bcfc7e811
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0x2ce44e34448db77b918fb1185f29c83bea1b34bffb462a0d1a91048659dddc31
```

### For OFT on ShimmerEVM -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="SMR->IOTA" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x148f693af10ddfaE81cDdb36F4c93B31A90076e1, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009bdf3ae7e2e3d211811e5e782a808ca0a75bf1fc0000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xd4a903930f2c9085586cda0b11d9681eecb20d2f - tx: 0x9b13396ec509216a3739031f4d96c8bf2c46765b5cbf20fe7f42ab777155873a
setConfig for 0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004 - tx: 0xfb1a08d5b193de053d5e682b304568f804b91085ab20a09fc754fd167bd70f40
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (ShimmerEVM)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30230, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x9bb007a98cabd7e003f7f06d086ef0b0eec8e12afed4245384ebce1406ba2688
sendOFT - estimated nativeFee: 0.112473266637699722
sendOFT - send tx on source chain: 0xf3850f0dd5a48b3d5f9a0a0e69852f75f6caaa1e80b1948967c3efda83c37470
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xb86d645289a7dcb5a92c3f55ea457536110faabcac57fdf02573cb6c8dfc1cd4
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30230, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x16503a3ae758977131f5c55f987d37f8134937a7f96f1052b9bb16d18614cac7
sendOFT - estimated nativeFee: 0.112473266637699722
sendOFT - send tx on source chain: 0x7e362eefa6937735f0b1bd7c6b07a2dbaa52a9a5f62cc37a2a5bdf07c78025fe
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x25ed76c93f31bb002b515ab00e5e4d944aa10f282a987ef1de541d2577038af6
```

**Notice**

It took `5 minutes` long for the token sending tx from IotaEVM to ShimmerEVM to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (ShimmerEVM) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30230, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.002
sendOFTBack - estimated nativeFee: 2.608622989813813602
sendOFTBack - send tx on source chain: 0x6ec67eb2807f1ccba0375ff88151a526b06ce672e14928543cb187e2f5bacd2d
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xa4a964e46d4164349ceabea6200570634d42f65eb40b16b367470248e5c52d74
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30230, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.003
sendOFTBack - estimated nativeFee: 2.608622989813813602
sendOFTBack - send tx on source chain: 0x7479d2939d15a6c0f57d5857a14c878119d483e0ebe02e7dad322f3ede454968
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x1e333a558e5fe2e46d9201f99372d37e6a780d90ce1748b84014509ec7f8bdce
```

**Notice**

It took `5 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to ShimmerEVM to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
