# Pathway IotaEVM <-- wIOTA --> Ethereum

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30101
setEnforcedOptions tx: 0x965528c190e547ff6958422cd06f463a287b80c795394daba6741fe3d2022538
```

### On OFT (destination chain of Ethereum)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network ethereum`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0xbae76c4ef6d2269c5d6136a2fbde94036a4ea24df9d2161272b7cd05dd2660e7
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30101, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0xcb9873341e5440b1687c649c0caabb907a936f7f59224601aee01d8886c3c7ed
```

### On OFT (destination chain of Ethereum)

`npx hardhat run scripts/set_peer_oft.ts --network ethereum`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0x88f596a22e374515157a26748a9c6445f857119568b50d84a0a955d6e2483d0f
```

## Set config

### For OFTAdapter on IotaEVM -> Ethereum

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->ETHEREUM" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30101, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x84d4473f58b3f6b73aebfafde4b99781e0b7f6eb0ff517529af96bae915b572a
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0xc5039dd4106082c5bf114c1977460a5611138233b9618c00691dbb20a9a927c6
```

### For OFT on Ethereum -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="ETHEREUM->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network ethereum`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000589dedbd617e0cbcb916a9223f4d1300c294236b0000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1 - tx: 0x6a69f84f839b85be7b563bac589c47584cacf4dc137e29ffd3435cdb6cf970c6
setConfig for 0xc02Ab410f0734EFa3F14628780e6e695156024C2 - tx: 0xa6a8344d49528a06440504184659139ee1f2d79dbbba7b97e868ec63f41c1152
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (Ethereum)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30101, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x803b95ac35b79f4da30ffe1cbc94f4cbd0c7208a8545417aa70ccadd44d64057
sendOFT - estimated nativeFee: 108.24937200817715078
sendOFT - send tx on source chain: 0x7aef319051fae7b9d5cd6970ab877cf5e83e8eefdcf0121f4680c7ce6eb1cc5a
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x3de44b7e0c184a6c573c631caba1cff6fc22a1a4d6f143ed6db4e4f787f84b85
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30101, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x7df1a941e426d12cc4d7cc9e76838300834cf2836aaa867dda1816c72b7ce81e
sendOFT - estimated nativeFee: 108.361147889858883708
sendOFT - send tx on source chain: 0xc98bb1a2c80c3f40ff3c1647171754c74de7cfa01bc7386c0480b65c989d27fa
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xd595ba82edf51b08d6ff2beb59f972b6acf03b2f96cc26f504a6943267733cfa
```

**Notice**

It took `5 minutes` long for the token sending tx from IotaEVM to Ethereum to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (Ethereum) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network ethereum`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30101, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.002
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0x6293730dc762315a0b5141ba502b7dc9b5935033dd60b1c373dd92f9b0818d21
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x0770d94084486a7a3d1d9c65defe77063e32bb906ec55739783a82900e487e88
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30101, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.02
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0xf76a3f5d6ff5ee9c16a31f4ee0a8bb1cb13831c672c9ce0377d7a277219303bc
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x70a0c19977004aad75056e792d7f3e582044ae636e11ef7abccd2609b1cbdd0b
```

**Notice**

It took `5 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to Ethereum to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
