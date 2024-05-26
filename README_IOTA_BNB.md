# Further tests of wSMR/wIOTA on mainnet

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. IOTA EVM)

`npx hardhat run scripts/deploy_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f
```

### Deploy OFT on destination chain (e.g. BNB)

`npx hardhat run scripts/deploy_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9
```

## Set enforced options

### On OFTAdapter (source chain, e.g. IOTA EVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f, oftContractAddress:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30102
setEnforcedOptions tx: 0xfd9e685d346adf63cb4be66ab42dfb67d918e49c8925c4ceb516a3263b15cc69
```

### On OFT (destination chain, e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f, oftContractAddress:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30284
setEnforcedOptions tx: 0xe76cb13cc09b438a9d87e5ea6ea6a0caad779b92283d375445d1bfaedd877387
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. IOTA EVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f, lzEndpointIdOnDestChain:30102, oftContractAddress:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9
MyOFTAdapter - setPeer tx: 0xc5fe45ca38b999d6ba4945bfa5fd4d0e1092d244d8283d3f0f0f8f703f4c18fc
```

### On OFT (destination chain, e.g. BNB)

`npx hardhat run scripts/set_peer_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9, lzEndpointIdOnSrcChain:30284, oftAdapterContractAddress:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f
MyOFT - setPeer tx: 0xa9a1d61617971e7bdf0fcb6d0ff2d472df91c2e95b8ae0972192a6bc34215e5b
```

## Set config

!!! Without `setConfig` for each of the OApp for a given pathway, cross-chain sending tx will get reverted !!!

### For OFTAdapter on IOTA EVM as current chain to interact with BNB as remote chain

**For input params:**

- Check the file `scripts/set_config_data.ts`
- Change `SET_CONFIG_DATA["???"]` in file `scripts\set_config.ts`

`npx hardhat run scripts/set_config.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30102, OAppContractAddressOnCurrentChain:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006788f52439aca6bff597d3eec2dc9a44b8fee8420000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7 - tx: 0x21ab4e85934408429195459e2647614213eaa8c26ce95e37db5a204f2013b540
setConfig for 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 - tx: 0x31a855411c81c722d715b73a9b2a479180a2de4aef7fc62eef667ba22bd1ca63
```

### For OFT on BNB as current chain to interact with IOTA EVM as remote chain

**For input params:**

- Check the file `scripts/set_config_data.ts`
- Change `SET_CONFIG_DATA["???"]` in file `scripts\set_config.ts`

`npx hardhat run scripts/set_config.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30284, OAppContractAddressOnCurrentChain:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000fd6865c841c2d64565562fcc7e05e619a30615f00000000000000000000000000000000000000000000000000000000000000000
setConfig for 0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE - tx: 0x36007e508ff7ab5bd11a3a7ec96729e0c365667a00b819f53c7e8d086a36feba
setConfig for 0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1 - tx: 0x6f7aad9cbf9e6de81bed44bdbdf6ecf3148356b6c76ad37428edfb4b7bfba561
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

### OFT on destination chain (e.g. IOTA EVM)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```

```

## Send origin tokens from source chain to destination chain

**IOTA EVM => BNB**

`npx hardhat run scripts/send_oft.ts --network iotaEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f, oftContractAddress:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30102, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.1, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x6a44f0fd7012eff624820f9729c374f39f8cda43795ede8ff49e71ebd22b38d2
sendOFT - estimated nativeFee: 3.277149220949160509
sendOFT - send tx on source chain: 0x46f51b364e0389130d7ad69fda1dfaefcc445d3b729c7922aa4ec2129215d5bd
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xdbb4d7753be494eaf1a3d543efbaaec4120ae3cbe85493f722b6cd843995bd5c
```

```
sendOFT - oftAdapterContractAddress:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f, oftContractAddress:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30102, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.2, erc20TokenAddress:0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c
sendOFT - approve tx: 0x2f44c399c750051aa52cdc1cc9a227cdd078f473ca0920e1e68d63a8b1a2ad09
sendOFT - estimated nativeFee: 3.277149220949160509
sendOFT - send tx on source chain: 0x55134a66517590546bf4b943f8bd599866a59a1ede1011710bfa0e63c52020ee
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0x831090988a9f76cdf2b5d44a6a1d00481dc31e5e995a26cfb0ba394a38d7a826
```

## Send OFT-wrapped tokens back from destination chain to origin chain

**BNB => IOTA EVM**

`npx hardhat run scripts/send_oft_back.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0x11f5EA7dea9E8B9e6311002C67BA5B7952244f7f, oftContractAddress:0xb17E5B3342Fb628C12164e2B2EF01dF6E331F5A9, lzEndpointIdOnSrcChain:30284, lzEndpointIdOnDestChain:30102, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:0.1
sendOFTBack - estimated nativeFee: 0.000035496013537226
sendOFTBack - send tx on source chain: 0xa2f95b948252165817e6a19c602a8961ca6aded0b57b614401adfa9d8b97a499
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x8acd9da91b3c9afe0df92360fb72ca7e3f5d49e568e604e1ca641a324428d9cb
```
