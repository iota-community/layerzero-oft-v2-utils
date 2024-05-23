# Further tests of wSMR/wIOTA on mainnet

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. BNB)

`npx hardhat run scripts/deploy_oft_adapter.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0x35d07EB92431Bc91c51fB59BB13D362d64FF61fE
```

### Deploy OFT on destination chain (e.g. Polygon)

`npx hardhat run scripts/deploy_oft.ts --network polygon`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0xFe3E420B5d17378be8D814107b619045263cCF80
```

## Set enforced options

### On OFTAdapter (source chain, e.g. BNB)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x35d07EB92431Bc91c51fB59BB13D362d64FF61fE, oftContractAddress:0xFe3E420B5d17378be8D814107b619045263cCF80, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30109
setEnforcedOptions tx: 0x3a0a78471f24955f9ac08b8d53e3c81de96be4f84389684cfe3201fd978c2ce3
```

### On OFT (destination chain, e.g. Polygon)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network polygon`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0x35d07EB92431Bc91c51fB59BB13D362d64FF61fE, oftContractAddress:0xFe3E420B5d17378be8D814107b619045263cCF80, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30102
setEnforcedOptions tx: 0x92f0d681b7e5c9228eec49546ef826884833a5d64cf368eee726731f8c127acf
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. BNB)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x35d07EB92431Bc91c51fB59BB13D362d64FF61fE, lzEndpointIdOnDestChain:30109, oftContractAddress:0xFe3E420B5d17378be8D814107b619045263cCF80
MyOFTAdapter - setPeer tx: 0x5e9d15b561f7120277545ab7423967af70185e65b0ab842c067786435442a7e6
```

### On OFT (destination chain, e.g. Polygon)

`npx hardhat run scripts/set_peer_oft.ts --network polygon`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0xFe3E420B5d17378be8D814107b619045263cCF80, lzEndpointIdOnSrcChain:30102, oftAdapterContractAddress:0x35d07EB92431Bc91c51fB59BB13D362d64FF61fE
MyOFT - setPeer tx: 0x4ebbba140fbb8deb09bd28f9e9799e1e4e7b6954cccb07cd5eb2c9b95c5a877c
```

## Other settings of the contracts

Detailed further settings of the OFTAdapter and OFT contracts are described on the below link:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-delegates

## Transfer contract ownership

### OFTAdapter on source chain (e.g. Polygon)

`export isForOFTAdapter=true && npx hardhat run scripts/transfer_ownership.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```

```

### OFT on destination chain (e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network polygon`

Log output for custom impl (contracts-wiota):

```

```

## Send origin tokens from source chain to destination chain

`npx hardhat run scripts/send_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0x35d07EB92431Bc91c51fB59BB13D362d64FF61fE, oftContractAddress:0xFe3E420B5d17378be8D814107b619045263cCF80, lzEndpointIdOnSrcChain:30102, lzEndpointIdOnDestChain:30109, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:1
sendOFT - approve tx: 0x3e69af15bd2a869f4ff94565024d25d79e25d1ac4b7c62885efcc961d5f0bacb
sendOFT - estimated nativeFee: 0.000641033947617059
sendOFT - send tx on source chain: 0xb984206ac597cc4051918161a02b7abffe543289962265d9877133b43128bba3
Wait for cross-chain tx finalization by LayerZero ...

sendOFT - received tx on destination chain: 0x8be43b9cdfc3ea0d994be58dfc01a054ae24835351ce897d95075db8f1753c20
```

## Send OFT-wrapped tokens back from destination chain to origin chain

`npx hardhat run scripts/send_oft_back.ts --network polygon`

Log output for custom impl (contracts-wiota):

```

```
