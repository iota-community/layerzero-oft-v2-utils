# Pathway IotaEVM <-- wIOTA --> Base

## Set enforced options

### On OFTAdapter (source chain of IotaEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30184
setEnforcedOptions tx: 0x782b8b0ec35d254014dafe51ab7488a85e50d780a39eb1f2d0165eb3500c7447
```

### On OFT (destination chain of Base)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network base`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0x52c7de98c60dad58e36dc5285cc1e6a0e2b457df98599703cf3ccda68d508ecd
```

## Set trusted peer

### On OFTAdapter (source chain of IotaEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, lzEndpointIdOnDestChain:30184, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2
MyOFTAdapter - setPeer tx: 0xa06cf7e9001617f653817dfef2329df0e736d1dbd3d66fdb2ea60b8a6f8afc32
```

### On OFT (destination chain of Base)

`npx hardhat run scripts/set_peer_oft.ts --network base`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4
MyOFT - setPeer tx: 0xb777b01d4b8004fdad6639dafd80234cfe388ae37f45cccc52255592cf075116
```

## Set config

### For OFTAdapter on IotaEVM -> Base

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="IOTA->BASE" && export OAppContractAddressOnCurrentChain=0xAf5b83063247603d1D042FA2a47c404322255bD4 && npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30184, OAppContractAddressOnCurrentChain:0xAf5b83063247603d1D042FA2a47c404322255bD4
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x58c85f74aa3c2bd1b1e34977e89457c5be57449ac2de352e4f4004f8aa972305
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0x81fd6d7b53fd495ebd75d45bab79eb0ce77975252fca5c1a40010aa760813cde
```

### For OFT on Base -> IotaEVM

**For input params:**

- Check the file `scripts/set_config_data.ts` to add new or leverage the existing pathways
- Edit the `PATHWAY` and `OAppContractAddressOnCurrentChain` in the below cmd

`export PATHWAY="BASE->IOTA" && export OAppContractAddressOnCurrentChain=0x009BcE26c6812c559aFf5EB5769C8758701673d2 && npx hardhat run scripts/set_config.ts --network base`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0x009BcE26c6812c559aFf5EB5769C8758701673d2
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009e059a54699a285714207b43b055483e78faac250000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2 - tx: 0xb5c038a72bb0c346a42fe40ef4f3976fbc96a0af45cea33ecb388fcff771d0f6
setConfig for 0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf - tx: 0xc0442d8e198e97512cd32cb75acce492e4a56b14650a60955e0b3dbf2534bad9
```

## Send origin tokens (wIOTA) on origin chain (IotaEVM) to remote chain (Base)

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30184, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.01, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x081acdd3735a399b46a130e1faa803f10523bcfee41e179b314f866228a34d06
sendOFT - estimated nativeFee: 0.245290881393455427
sendOFT - send tx on source chain: 0x895e8bc552f129f98917e9ba0211335085d55ea118359e65f2a7b5cada9afebd
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x5c840f752cade2b77b4a536f75b6cfc2ca995a045c4b5b10153f8d34c24657b9
```

```
sendOFT - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30184, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.02, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x9b097334d85531cbda5c39194579d2f73fcd010ee6fdea52e15aa05c3bd92291
sendOFT - estimated nativeFee: 0.247019421003859376
sendOFT - send tx on source chain: 0x7dd786c49264e0bd492efdda099e36dbcccd1ae95cf358b33423b8c8fed4cf30
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xecc04f4a4c8c7cf25765157fc3175c872a8f36b428997e4a7630cb587985deac
```

**Notice**

It took `5 minutes` long for the token sending tx from IotaEVM to Base to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0x12f7a0ac166726212f26e5b22dea8baec035f0ca379700d5e5ce26cb6ab19c1f

## Send OFT-wrapped tokens (wIOTA) on remote chain (Base) to origin chain (IotaEVM)

`npx hardhat run scripts/send_oft_back.ts --network base`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30184, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.002
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0x5b6e2eca0f18119bda98de9f02dee064f2401e4e60e9ef6a1b9bd8c249714651
Wait for cross-chain tx finalization by LayerZero ...
```

```
sendOFTBack - oftAdapterContractAddress:0xAf5b83063247603d1D042FA2a47c404322255bD4, oftContractAddress:0x009BcE26c6812c559aFf5EB5769C8758701673d2, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30184, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x99F28C7e613c925CD2dAcEF5Af27AF144aF5F419, amount:0.002
sendOFTBack - estimated nativeFee: 0.000005512100726145
sendOFTBack - send tx on source chain: 0xb7f8802c454aebb1628528b2f2bdbc75b9b4a85ffa32d17f2728fa9d30cedf10
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x7bbab0c648b339e0aea5f0fe26f3c23b4987cfc0d7a3215b775dd00007724ab0
```

**Notice**

It took `5 minutes` long (but not yet `delivered`) for the token sending tx from IotaEVM to Base to be `Delivered`.
Most time consumped on destination chain awaiting.
https://layerzeroscan.com/tx/0xe7fa9fb083c3bc0d0743fd4ee2f9ab964018e15080f32bd94412c0e048da3827
