# OFT Configuration on EVM

## Preset configs for different pathways

- [Pathway from IOTA L1 testnet to Sepolia EVM](./.env.IOTAL1_Sepolia)
- [Pathway from Sepolia EVM to IOTA L1 testnet](./.env.Sepolia_IOTAL1)

## Config params

The config info is referenced from [here](https://docs.layerzero.network/v2/deployments/deployed-contracts)

2 types of config files:

- `.ts`
- `.env`

Copy one of the `config_xyz.ts` to `config.ts` and edit accordingly as follows:

- `lzEndpointOnSrcChain`: LZ endpoint contract address on EVM as src chain.
- `lzEndpointIdOnSrcChain`: LZ endpoint ID on EVM as src chain.
- `lzEndpointOnDestChain`: LZ endpoint contract address on as dest chain.
- `lzEndpointIdOnDestChain`: LZ endpoint ID on as dest chain.
- `mintedTokenName`: define the erc20 token name in case of OFT deployment on EVM src chain.
- `mintedTokenSymbol`: define the erc20 token symbol in case of OFT deployment on EVM src chain.
- `oftPackageId`: OFT Move package ID as of OFT deployment on MoveVM as src chain.
- `oftContractAddress`: OFT Solidity contract address as of OFT deployment on EVM as dest chain.
- `erc20TokenAddress`: the existing ERC20 token contract address on EVM as src chain
- `executorLzReceiveOptionMaxGas`: set to `200000`
- `gasDropInWeiOnDestChain`: set to zero

Copy the `.env.example` to `.env` and edit accordingly the params. Example:

```
DEPLOYER_ACCOUNT_PRIV_KEY='put here your own private key'

# Only needed for sending token cross-chain
SENDER_ACCOUNT_PRIV_KEY=

```
