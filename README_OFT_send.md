# Send OFT

## OFTAdapter lock/unlock existing erc20Token

### Send from EVM to MoveVM of IOTA L1

Needed input params:

- oftAdapterContractAddress
- lzEndpointIdOnCurrentChain
- lzEndpointIdOnRemoteChain
- executorGasDropInWeiOnDestChain,
- executorLzReceiveOptionMaxGas,
- sendingAccountPrivKey
- receivingAccountAddress
- amount
- erc20TokenAddress

`export isForOFTAdapter=true && npx hardhat run scripts/send_oft.ts --network sepolia`

Log output on Sepolia EVM to IOTA L1:

```
sendOFT - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnCurrentChain:30230, lzEndpointIdOnRemoteChain:30284, executorGasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.1, erc20TokenAddress:0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b
sendOFT - approve tx: 0x2270fe3db02ddfba2c0a5e16343fc44596c10a64c97f4e002cc9dbeef2f15b5d
sendOFT - estimated nativeFee: 2.608622989813813602
sendOFT - send tx on source chain: 0x09c4429d2e1bd855ec24d0e14d2e1a3ca697518344a3047f174beed8c9581332
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xe597568c78144431fb251f3f313f1a3cfa71c537c673e59c3dc6ef714ab228f6
```

### Send OFT-wrapped tokens back from destination chain to origin chain --> check again

`export isForOFTAdapter=true && npx hardhat run scripts/send_oft_back.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
???
```

## OFT for brand-new erc20 tokens

### Send from EVM to MoveVM of IOTA L1

Needed input params:

- oftContractAddress
- lzEndpointIdOnRemoteChain
- executorGasDropInWeiOnDestChain: can set to zero,
- executorLzReceiveOptionMaxGas: can set to 200000,
- sendingAccountPrivKey
- receivingAccountAddress
- amount: EVM token amount without decimals

`export isForOFTAdapter=false && npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output on IOTA EVM to IOTA L1:

```
sendOFT - oftAdapterContractAddress:, oftContractAddress:0x02AE4418F0FbcbE383b4eD103cf6B88B24542f4C,  lzEndpointIdOnCurrentChain:30284, lzEndpointIdOnRemoteChain:30423, executorGasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0xd3906909a7bfc50ea9f4c0772a75bc99cd0da938c90ec05a556de1b5407bd639, sender: 0x6B4253377AfEe889d5a396B9Ed18F4C93251e26b, amount:5, erc20TokenAddress:
sendOFT - estimated nativeFee: 1.613365541632283385
sendOFT - send tx on source chain: 0x4d456538ec81679d3a1eedd2b404e6f847511d7b75b14398052e3287b9b1dce5
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 8LDDk9xa6W4eGNrB7dSzWxH7hgFNwsWoDyzgPuF7vveg
```