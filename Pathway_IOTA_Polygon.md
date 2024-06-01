# Pathway IotaEVM <-- wIOTA --> Polygon

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30109
setEnforcedOptions tx: 0xb9cd1eb3b6de4bcfebd46d09116d6e0328885f420e05056c467f027b06e805c2
```

### On OFT (destination chain of Polygon)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network polygon`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0x7a82002cf07e230bc4e4ec5f08b867cdc8d3e232c4274b1911e64378abee810b
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30109, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0x6196b6f375776fc8db575b48ba9d36fcccc7344a8be83e1c9c56f33eeff68a56
```

### On OFT (destination chain of Polygon)

`npx hardhat run scripts/set_peer_oft.ts --network polygon`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0x13fe2bc6d4f01e179d56fc067f63efce851cebf3b595ef1dd879c38f1acc39a3
```

## Set config

### For OFTAdapter on IotaEVM -> Polygon

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->POLYGON" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30109, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x9c9e58c43c04266ea16cc69739e507063de382a06516d144dda88988b51f61a5
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0x2903450ceaa30d56849e735263ff9f3ca5d1d7bee8980e1ce9f5aa95f9121518
```

### For OFT on Polygon -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="POLYGON->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network polygon`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000023de2fe932d9043291f870324b74f820e11dc81a0000000000000000000000000000000000000000000000000000000000000000
setConfig for 0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3 - tx: 0x218c4f8e8f1834a75e47455a65c1ccd466c63feb71bbbe6a46af2f8929aac5d7
setConfig for 0x1322871e4ab09Bc7f5717189434f97bBD9546e95 - tx: 0xe99859ceee2794fe4435c070f67692f581a7d29f55efa45b15e38846119ae7d9
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (Polygon)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30109, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x586ddee4d867c198793aef2e4e4da2718b9731ca4f37e0a990fd8205f957d49b
sendOFT - estimated nativeFee: 0.287177083971401045
sendOFT - send tx on source chain: 0xe1f27c3010197c42989d061075a5a560a1b6a078d6e5b29b1d686595efa4013f
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xa4cd4248cd5857a3d73254e10732b12532b8ec6af48a1f5da14627039d0abb75
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30109, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0xe03d99d54357fb2880b089c3b5fdc62ef84a337bce0d1fd10dd7fbaa3671d877
sendOFT - estimated nativeFee: 0.288414104889799993
sendOFT - send tx on source chain: 0xc251bef821214700867478e035fb8048518feefc81293ebac09273f05ea8a298
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x0bb26164d26f1d3c11035399a3dac354ea0fb291ebe1d62be82d9b028b786ed3
```

**Notice**

It took `8 minutes` long for the token sending tx from IotaEVM to Polygon to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (Polygon) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network polygon`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30109, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.002
sendOFTBack - estimated nativeFee: 0.031067324645856674
sendOFTBack - send tx on source chain: 0x47589cb2a2966b44577dd349a4d9cced8df637292137e584d9e52cba62d15b49
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xba7444885897d432d53ecee35ed4eadb1ad19fc1c9b9d923b3790e2fc8d44872
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30109, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.002
sendOFTBack - estimated nativeFee: 0.031067324645856674
sendOFTBack - send tx on source chain: 0xe937ce6a0e573f405557c50b067a5605b91dd6f45ca1b006b73b1661dda48db8
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xbd10aeb429f1b83e7a009b252ebb3390c869057334254114be955d2282959848
```

**Notice**

It took `30 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to Polygon to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
