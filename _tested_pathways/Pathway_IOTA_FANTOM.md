# Pathway IotaEVM <-- wIOTA --> Fantom

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30112
setEnforcedOptions tx: 0x3a5331bf457ad2ac266a5a50c60046b72e8b5424d5c6465966e01109f0a010b6
```

### On OFT (destination chain of Fantom)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network fantom`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0xa0890f52def0b28b04bfc7093bd5706538ac2a6ab01132334149a91712b7609e
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30112, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0xad7927b7f31940e97062da24333d7cac563f068456e0bdce8a44d847a5431325
```

### On OFT (destination chain of Fantom)

`npx hardhat run scripts/set_peer_oft.ts --network fantom`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0x7ff3391cf2c3569b58a5e416a5ff0cbf0d0b770a4165cc1a48fc962d25724fa8
```

## Set config

### For OFTAdapter on IotaEVM -> Fantom

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->FANTOM" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30112, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x69edcae1d2e59a2957043c609e4a38b68a4015fefbbf8c0dbf2b7993f1abe83a
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0xb4b395634c27dfa30fd4864e6d966d7cd1471866ae71c3d449b627338366181a
```

### For OFT on Fantom -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="FANTOM->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network fantom`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000e60a3959ca23a92bf5aaf992ef837ca7f828628a0000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xC17BaBeF02a937093363220b0FB57De04A535D5E - tx: 0x5f3fc37adddb0c278859b8f93e98f0c25aa4002458b21dca08ef4115e2cc5850
setConfig for 0xe1Dd69A2D08dF4eA6a30a91cC061ac70F98aAbe3 - tx: 0xaa4f1f4c505473301663603f28ef31b252c0619505833d72cc754ec985932819
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (Fantom)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30112, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0xe08b847d98cf2dc8164365cc6a1460036a211562fc0b73e216f4f47f3ee70b06
sendOFT - estimated nativeFee: 1.737229720020798476
sendOFT - send tx on source chain: 0x94592505ca24d258aca5fad9e929623c017ed698648a56649792b6373ddec752
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x804204b7d7ea10139e696e5fcb8a77396f45ad894dcc20212b8471d101e299a9
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30112, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x625a45c2bfb1f309c7a0b804fd4067cb0a4a5373cc4fd30a0e18deae29d60677
sendOFT - estimated nativeFee: 1.735701213950254621
sendOFT - send tx on source chain: 0xf80c3573079ea3f9465603cb448c57576a0b3289375e9d9f225f342308d663e8
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x40ce9d666936eb5dc15844a69f05c47aae94d737018302aa5bd9f4c40e3c8d45
```

**Notice**

It took `5 minutes` long for the token sending tx from IotaEVM to Fantom to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (Fantom) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network fantom`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30112, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.002
sendOFTBack - estimated nativeFee: 0.025126875309656518
sendOFTBack - send tx on source chain: 0xa0a3edd3c45a41a2b9c8e83d02e84a59b1575d970a23238514669b5d959af095
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xb5c7cad1f2c91d532b47d2723e4c735fed9d130e0e2abc3a78ab8bc66675a071
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30112, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.003
sendOFTBack - estimated nativeFee: 0.025126875309656518
sendOFTBack - send tx on source chain: 0x2fb48b5d2894d733a4ebb5a3abddcf4feb1faf3cd460053486f100a27b5bd63f
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xa81d490cfbb8b31352089d9bfdd582c756b384c95ff3a8c15008c70635e00b50
```

**Notice**

It took `5 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to Fantom to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
