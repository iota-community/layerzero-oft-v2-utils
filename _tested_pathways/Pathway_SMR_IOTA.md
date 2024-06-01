# Pathway ShimmerEVM <-- wSMR --> IotaEVM

## Set enforced options

### On OFTAdapter (source chain of ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0x1ce411c88de14ebfa154aa07915a1fac70ad8b5bd6b3dab864af55b5202ce7e4
```

### On OFT (destination chain of IotaEVM)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30230
setEnforcedOptions tx: 0x78ccc8473c9c2b5eae8cc5ae44e20b340dc02b044ae43d71e8a5d9201bacd3c7
```

## Set trusted peer

### On OFTAdapter (source chain of ShimmerEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnDestChain:30284, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0x792ccacf686dbc526349e1eda1043d587c3df61745e747088d35b13e1bae6003
```

### On OFT (destination chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30230, oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFT - setPeer tx: 0x9b8f8a235398f86050f0adbd17c9bc5ee277af8aebec542c804a334fcbc7f06d
```

## Set config

### For OFTAdapter on ShimmerEVM -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="SMR->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x148f693af10ddfaE81cDdb36F4c93B31A90076e1, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009bdf3ae7e2e3d211811e5e782a808ca0a75bf1fc0000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xd4a903930f2c9085586cda0b11d9681eecb20d2f - tx: 0xbe5bce553c07b25e40e4f7f69ee8cb2809ef6a9266ffedea7c634e6567ee6c98
setConfig for 0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004 - tx: 0x50b9c6dcd1a37d96d50c59f7e3b00e060e83bbb3136a63d19041c62245a928d8
```

### For OFT on IotaEVM -> ShimmerEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->SMR" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30230, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x366994257dc01bd4f82fbd6000e46563afffe000b7c899cda2849cda2a11474a
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0x7057cb656e8364d5bc23ab37aba311ee15545d40718ddab9eb788e770fa85dd6
```

## Send origin tokens (wSMR) on origin chain (ShimmerEVM) to remote chain (IotaEVM)

`npx hardhat run scripts/send_oft.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b
sendOFT - approve tx: 0x006f0f81439e112da6124fc04423832c10c5b27a86d9bf75ba11e0d66e1010ba
sendOFT - estimated nativeFee: 2.608622989813813602
sendOFT - send tx on source chain: 0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x0319325937ed38efc420d903affc21e70e0d66b977e9e0fe1302ef8a0c29b905
```

```
sendOFT - oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b
sendOFT - approve tx: 0x61924f1fe7bcccdc2ed95a5f70acd9b47bc7b66eee1127adb3bcfe8bbbfea32a
sendOFT - estimated nativeFee: 2.608622989813813602
sendOFT - send tx on source chain: 0xb31b1b9ab281286213d1edcbe86bdc1ee6c2b09c956a9993bd4375628c2808ff
Wait for cross-chain tx finalization by LayerZero ...
```

**Notice**

It took `10 minutes` long for the token sending tx from ShimmerEVM to IotaEVM to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wSMR) on remote chain (IotaEVM) to origin chain (ShimmerEVM)

`npx hardhat run scripts/send_oft_back.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.002
sendOFTBack - estimated nativeFee: 0.112473266637699722
sendOFTBack - send tx on source chain: 0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x394f2d568f0056d568bfc1d25fbcf637c217c24cba81e7a7ec95c8ea87356f43
```

```
sendOFTBack - oftAdapterContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.003
sendOFTBack - estimated nativeFee: 0.112473266637699722
sendOFTBack - send tx on source chain: 0xc44de9b3f16295f8aa0675d8e5c4b588945103b07748a4c6012a2f1e34ea204e
Wait for cross-chain tx finalization by LayerZero ...
```

**Notice**

It took `10 minutes` long for the token sending tx from ShimmerEVM to IotaEVM to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
