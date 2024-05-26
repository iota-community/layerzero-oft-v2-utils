# Further tests of wSMR/wIOTA on mainnet

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. IOTA)

`npx hardhat run scripts/deploy_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0xCfdC692Ff51911837EDAec66440BB983eD82dbdB
```

### Deploy OFT on destination chain (e.g. BNB)

`npx hardhat run scripts/deploy_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0x49C81890bC4010ECC4FB2d313df67f1B7cA554d6
```

## Set enforced options

### On OFTAdapter (source chain, e.g. IOTA)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0xCfdC692Ff51911837EDAec66440BB983eD82dbdB, oftContractAddress:0x49C81890bC4010ECC4FB2d313df67f1B7cA554d6, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30102
setEnforcedOptions tx: 0xcc759cfddb8c165fb2bba05dd474ca19a5cd610230c759c15357988c9f4e5d16
```

### On OFT (destination chain, e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0xCfdC692Ff51911837EDAec66440BB983eD82dbdB, oftContractAddress:0x49C81890bC4010ECC4FB2d313df67f1B7cA554d6, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0x412ee422ad4e2dcca5c7066f302254d1fa7801bfc5c2199bd4b22bd616cbcf7a
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. IOTA)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0xCfdC692Ff51911837EDAec66440BB983eD82dbdB, lzEndpointIdOnDestChain:30102, oftContractAddress:0x49C81890bC4010ECC4FB2d313df67f1B7cA554d6
MyOFTAdapter - setPeer tx: 0xe3811f97bcbc2870f9c5b3bcb8c81bee315d9400f322f133ca00aefc11686569
```

### On OFT (destination chain, e.g. BNB)

`npx hardhat run scripts/set_peer_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x49C81890bC4010ECC4FB2d313df67f1B7cA554d6, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0xCfdC692Ff51911837EDAec66440BB983eD82dbdB
MyOFT - setPeer tx: 0xc68792c23cb19bc3519de736123da4f7efbe84cc765c3247b87c6dda5fbc6bb7
```

## Other settings of the contracts

Detailed further settings of the OFTAdapter and OFT contracts are described on the below link:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-delegates

## Transfer contract ownership

### OFTAdapter on source chain (e.g. BNB)

`export isForOFTAdapter=true && npx hardhat run scripts/transfer_ownership.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```

```

### OFT on destination chain (e.g. IOTA)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```

```

## Send origin tokens from source chain to destination chain

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xCfdC692Ff51911837EDAec66440BB983eD82dbdB, oftContractAddress:0x49C81890bC4010ECC4FB2d313df67f1B7cA554d6, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30102, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:1, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x49b60e816e9a458dc1cf46bfb3aef85f56271d53f0ae9cd10d8d27d175d14897
sendOFT - estimated nativeFee: 3.288293675227577423
sendOFT - send tx on source chain: 0x9a10b0c9e3087d72132174fde0ea168ed7596f80b1115ee6c428d4d74302cb88
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x92604b8de83a2caf91bbcc9c9b5680c776fccb62324a45e4f8f90122edb9c62e
```

## Send OFT-wrapped tokens back from destination chain to origin chain

`npx hardhat run scripts/send_oft_back.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```

```
