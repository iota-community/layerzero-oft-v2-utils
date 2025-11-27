# Send OFT

## Send from EVM to MoveVM of IOTA L1

Needed input params:

- oftAdapterContractAddress
- lzEndpointIdOnSrcChain
- lzEndpointIdOnDestChain
- gasDropInWeiOnDestChain,
- executorLzReceiveOptionMaxGas,
- sendingAccountPrivKey
- receivingAccountAddress
- amount
- erc20TokenAddress

`npx hardhat run scripts/send_oft.ts --network sepolia`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.1, erc20TokenAddress:0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b
sendOFT - approve tx: 0x2270fe3db02ddfba2c0a5e16343fc44596c10a64c97f4e002cc9dbeef2f15b5d
sendOFT - estimated nativeFee: 2.608622989813813602
sendOFT - send tx on source chain: 0x09c4429d2e1bd855ec24d0e14d2e1a3ca697518344a3047f174beed8c9581332
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xe597568c78144431fb251f3f313f1a3cfa71c537c673e59c3dc6ef714ab228f6
```

## Send OFT-wrapped tokens back from destination chain to origin chain --> check again

`npx hardhat run scripts/send_oft_back.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0xa9CdE55a02E359918350122C0ccc1a2BaF917C4d, oftContractAddress:0xd478e7AbbA8f76F0473e882B97F4268B266bC9F3, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30284, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:0.01
sendOFTBack - estimated nativeFee: 0.112473266637699722
sendOFTBack - send tx on source chain: 0xcd2fd77065c31577db5cf8f1c62aba790d40e262dbf254e00c9c9040ba2e1cf8
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x5199f7b5de6fd9d8edb661588805a71a64238e63752bb28d8c863651c52bf13b
```
