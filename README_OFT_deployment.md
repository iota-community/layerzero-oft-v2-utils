# OFT deployment on EVM

**Use-case 1**

To enable the `existing` fungible tokens for cross-chain sending, both OFTAdapter and OFT contracts are needed. Particularly:

- OFTAdapter contract: used to lock/unlock the existing fungible tokens on source chain
- OFT contract: used to mint/burn the equivalent fungible tokens on destination chain

**Use-case 2**

For `brand-new` fungible tokens to be launched, OFT standard can be leveraged to enable cross-chain sending without the need of OFTAdapter. Particularly:

- OFT contract: used to define the brand-new fungible tokens on source chain with mint/burn
- OFT contract: used to represent the equivalent fungible tokens on destination chain with burn/mint

**Notice**

The `MyOFT` contract must be adapted to the expected token distribution. The current code will mint 50M tokens to the deployer account inside the `constructor`.

[Reference](https://docs.layerzero.network/v2/concepts/applications/oft-standard#omnichain-token-standards)

## Deploy OFTAdapter and OFT contracts on EVM

Standard implementation for `ERC20` in the folder `contracts-standard`:

- MyOFT.sol
- MyOFTAdapter.sol

Custom implementation for `wSMR/wIOTA` in the folder `contracts-wiota`:

- ERC20VotesPermit.sol
- MyOFT.sol
- MyOFTAdapter.sol
- OFTVotesPermit.sol

Further info regarding the custom implementation for `wSMR/wIOTA` is described in [README_wiota.md](./README_wiota.md).

Before deploying the contract, rename one of the `contracts-xyz` above to `contracts`that will be taken into account by the deployment.

To compile/build the OFT Solidity contracts, run the cmd `yarn clean` and `yarn compile`.

## Deploy the `OFTAdapter` (for example, on Sepolia EVM as src chain)

Set the following config params in the file `.env`:

- `erc20TokenAddress`: the existing ERC20 token contract address on Sepolia EVM as src chain
- `lzEndpointOnCurrentChain`: LZ endpoint address on the current chain.

Run the cmd:

```bash
npx hardhat run scripts/deploy_oft_adapter.ts --network sepolia
```

Log example:

```
Deployed OFTAdapter contract address: 0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3
```

**Notice**

If some mock ERC20 token is needed, rename the folder `contracts-mock` to `contracts` and run the cmd:

```bash
npx hardhat run scripts/deploy_mock_erc20.ts --network sepolia
```

Log example:

```
Deployed MockUSDT contract address: 0x514b0C11Bd143778367f1d1273ba1b2236Fb383c
```

50M tokens will auto be minted to the deployer.

## Deploy the `OFT`

Set the following config params in the file `.env`:

- `lzEndpointOnCurrentChain`: LZ endpoint address on the current chain.
- `mintedTokenName`: define the erc20 token name in case of OFT deployment on EVM src chain.
- `mintedTokenSymbol`: define the erc20 token symbol in case of OFT deployment on EVM src chain.

The deployed OFT contract address will be set for the param `oftContractAddress` in `config.json`.

Run the cmd:

### For example on Sepolia EVM as dest chain

```bash
npx hardhat run scripts/deploy_oft.ts --network sepolia
```

### For example on IOTA EVM as src chain

```bash
npx hardhat run scripts/deploy_oft.ts --network iotaEvmMainnet
```

Log example:

```
Deployed OFT contract address: 0x02AE4418F0FbcbE383b4eD103cf6B88B24542f4C
```

## Verify Solidity contracts

Must use `"@nomicfoundation/hardhat-verify": "2.0.14"`

The following cmd can be used to verify the deployed contract

`npx hardhat verify --network networkNameSpecifiedInHardhatConfig deployedContractAddess "CTOR arg 1" "CTOR arg 2" "CTOR arg 3"`

E.g.

```
npx hardhat verify --network sepolia 0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3 "0x514b0C11Bd143778367f1d1273ba1b2236Fb383c" "0x6EDCE65403992e310A62460808c4b910D972f10f" "0x6B4253377AfEe889d5a396B9Ed18F4C93251e26b"
```

## Deploy OFTAdapter or OFT contracts on MoveVM

See [instruction](https://github.com/iota-community/layerzero-move-oft-v2-utils)
