# Utilities for LayerZero EVM OFT V2

Implemented by IOTA Foundation.

## Introduction

Utility scripts for LayerZero EVM OFT V2 that facilitate cross-chain sending of fungible tokens between EVM and IOTA L1 MoveVM.

This document (whose previous version on the `main` branch concentrated on the interaction between EVM and EVM) now focuses on the interaction between EVM and MoveVM of IOTA L1.

For installation, run the cmd `yarn`.

For procedure of sending tokens cross-chain, it includes the following steps:

- configuration
- deployment
- setup
- send

## OFT configuration

See [here](./README_OFT_configuration.md)

## OFT deployment

See [here](./README_OFT_deployment.md)

## OFT setup

See [here](./README_OFT_setup.md)

## OFT send

See [here](./README_OFT_send.md)

## Appendix

### Procedure to send ERC20 tokens on EVM

For the existing erc20 tokens that involve with both OFTAdapter contract (on EVM source chain) and OFT contract (on MoveVM destination chain), the token sending procedure is as follows:

1. The sender approves his erc20 tokens for the OFTAdapter contract
2. The sender calls the func `quoteSend()` of the OFTAdapter contract to estimate cross-chain fee to be paid in native on the source chain
3. The sender calls the func `send()` of the OFTAdapter contract to transfer tokens on source chain to destination chain
4. Optional: wait for the tx finalization on destination chain by using the lib [@layerzerolabs/scan-client](https://www.npmjs.com/package/@layerzerolabs/scan-client#example-usage)

To send back the OFT-based tokens on destination chain to source chain, the procedure is similar except that approve step is not needed:

1. The sender calls the func `quoteSend()` of the OFT contract to estimate cross-chain fee to be paid in native on the sender chain
2. The sender calls the func `send()` of the OFT contract to transfer tokens on source chain to destination chain
3. Optional: wait for the tx finalization on destination chain by using the lib `@layerzerolabs/scan-client`

**Reference**

- [function quoteSend()](https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L127C60-L127C73)
- [struct SendParam](https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L10)
- [function send()](https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L144)
- [@layerzerolabs/scan-client](https://www.npmjs.com/package/@layerzerolabs/scan-client#example-usage)
- [LayerZero Endpoint V2](https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts)
- [LayerZero explorer](https://testnet.layerzeroscan.com/)
