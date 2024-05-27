# Further tests of wSMR/wIOTA on mainnet

## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. ShimmerEVM)

`npx hardhat run scripts/deploy_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFTAdapter contract address: 0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d
```

### Deploy OFT on destination chain (e.g. BNB)

`npx hardhat run scripts/deploy_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
Deployed OFT contract address: 0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe
```

## Set enforced options

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/set_enforced_options.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:true, oftAdapterContractAddress:0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d, oftContractAddress:0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30102
setEnforcedOptions tx: 0xa9b8bca1a67be0e3083adad1e0d26b441b2fa74436b417dfaecde3a3376a6ef5
```

### On OFT (destination chain, e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/set_enforced_options.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setEnforcedOptions - isForOFTAdapter:false, oftAdapterContractAddress:0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d, oftContractAddress:0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe, executorLzReceiveOptionMaxGas:200000, lzEndpointIdOnRemoteChain:30230
setEnforcedOptions tx: 0xc786c1646fef2b597bfe7546e0ead339fbfe9342d11216fad4702bae82dfe32a
```

## Set trusted peer

### On OFTAdapter (source chain, e.g. ShimmerEVM)

`npx hardhat run scripts/set_peer_oft_adapter.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFTAdapter - oftAdapterContractAddress:0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d, lzEndpointIdOnDestChain:30102, oftContractAddress:0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe
MyOFTAdapter - setPeer tx: 0x0b4efdb27324b331458ae0a4817d68d8f15c28f54083ba66f8ab5279057922ed
```

### On OFT (destination chain, e.g. BNB)

`npx hardhat run scripts/set_peer_oft.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setPeerMyOFT - oftContractAddress:0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe, lzEndpointIdOnSrcChain:30230, oftAdapterContractAddress:0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d
MyOFT - setPeer tx: 0x4de43311d952d2861d487ac94ee7173b166af43535099acb7b5ae6f731aeaa58
```

## Set config

!!! Without `setConfig` for each of the OApp for a given pathway, cross-chain sending will get reverted !!!

### For OFTAdapter on ShimmerEVM as current chain to interact with BNB as remote chain

**For input params:**

- Check the file `scripts/set_config_data.ts`
- Ensure the `OAppContractAddressOnCurrentChain` points to the correct address of OFTAdapter or OFT (set in `.env`)

`export ROUTE="SMR-BNB" && npx hardhat run scripts/set_config.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x148f693af10ddfaE81cDdb36F4c93B31A90076e1, lzEndpointIdOnRemoteChain:30102, OAppContractAddressOnCurrentChain:0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009bdf3ae7e2e3d211811e5e782a808ca0a75bf1fc0000000000000000000000000000000000000000000000000000000000000000
setConfig for 0xd4a903930f2c9085586cda0b11d9681eecb20d2f - tx: 0x1234fc5db876230755890b0ad3b340b33d2cdb62ac5768fc37acc1e6ad33b57c
setConfig for 0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004 - tx: 0x3cd068663c2036f09090f2e38923a746e621b230d2f95c20c609f1125905195d
```

### For OFT on BNB as current chain to interact with ShimmerEVM as remote chain

**For input params:**

- Check the file `scripts/set_config_data.ts`
- Ensure the `OAppContractAddressOnCurrentChain` points to the correct address of OFTAdapter or OFT (set in `.env`)

`export ROUTE="BNB-SMR" && npx hardhat run scripts/set_config.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
setConfig - lzEndpointOnCurrentChain:0x1a44076050125825900e736c501f859c50fE728c, lzEndpointIdOnRemoteChain:30230, OAppContractAddressOnCurrentChain:0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe
ulnConfigEncoded: 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000fd6865c841c2d64565562fcc7e05e619a30615f00000000000000000000000000000000000000000000000000000000000000000
setConfig for 0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE - tx: 0x9ae626c73ec2d491b3e1da6bd3d4d214578835eeff58afe336029f742d778a1e
setConfig for 0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1 - tx: 0x0cfd89a88113519ee1b378c3021a41518a255d9cc5872738a898b598f4c8cf46
```

## Other settings of the contracts

Detailed further settings of the OFTAdapter and OFT contracts are described on the below link:
https://docs.layerzero.network/v2/developers/evm/oft/quickstart#setting-delegates

## Transfer contract ownership

### OFTAdapter on source chain (e.g. ShimmerEVM)

`export isForOFTAdapter=true && npx hardhat run scripts/transfer_ownership.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```

```

### OFT on destination chain (e.g. BNB)

`export isForOFTAdapter=false && npx hardhat run scripts/transfer_ownership.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```

```

## Send origin tokens from source chain to destination chain

`npx hardhat run scripts/send_oft.ts --network shimmerEvmMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFT - oftAdapterContractAddress:0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d, oftContractAddress:0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30102, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, amount:0.1, erc20TokenAddress:0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b
sendOFT - approve tx: 0xd2d3158968f43adb6c5b4e427951d58701b569d56eb7e7b43a6c08335f8bcb14
sendOFT - estimated nativeFee: 87.942102721709005069
sendOFT - send tx on source chain: 0x852e9b56f9ed6bf035696d88131091867f4ca1f441c7a295c52b7a74b9f9477e
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xebbddf991d18ef399d9ef82a4e14ac34500432fe2cf32b5ff2c61b1fa10c4e01
```

## Send OFT-wrapped tokens back from destination chain to origin chain

`npx hardhat run scripts/send_oft_back.ts --network bnbMainnet`

Log output for custom impl (contracts-wiota):

```
sendOFTBack - oftAdapterContractAddress:0x717b4e7ee6b50167E85d13Af18EAb170DC5CD83d, oftContractAddress:0x7F2A080a64f303469b6DbecB05Bf10F909aEBCbe, lzEndpointIdOnSrcChain:30230, lzEndpointIdOnDestChain:30102, gasDropInWeiOnDestChain:0, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:0.01
sendOFTBack - estimated nativeFee: 0.000041518878388319
sendOFTBack - send tx on source chain: 0xbb45feffbcb886f6da1cc76b7d919fec7a6d06dbe21419b4d2e47a23444610a8
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0x70af975eb8ac52594251bb75e49a9df8de926eb193e862a196e9188fe306b88d
```
