# LayerZero OFT V2 based implementation for wSMR/wIOTA

Implemented by IOTA Foundation.

## Introduction

To enable cross-chain sending of the existing erc20 tokens of wSMR/wIOTA (as wrapped version of the native gas token SMR/IOTA on ShimmerEVM and IOTA EVM respectively), LayerZero OFT V2 has been applied. For test purpose, Sepolia is chosen for source chain while BNB testnet is chosen for destination chain.

## Implementation of the contracts

### MyOFTAdapter

Standard implementation of the OFTAdapter (on the source chain) that is the same as [this one](https://github.com/iota-community/layerzero-oft-v2-utils/blob/main/contracts/MyOFTAdapter.sol)

### MyOFT

Custom implementation of the OFT (on the destination chain) so that the OFT-wrapped version of the wSMR/wIOTA can have the functions of ERC20Votes and ERC20Permit.

**Inheritance hierachy**

```
ERC20Votes ERC20Permit
    |_________|
        /|\
         |
  ERC20VotesPermit       OFTCore
        |__________________|
                /|\
                 |
           OFTVotesPermit
                /|\
                 |
               MyOFT
```

- ERC20VotesPermit.sol: combine ERC20, ERC20Votes, ERC20Permit in one abstract contract
- OFTVotesPermit.sol: based on the original file [OFT.sol](https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/OFT.sol), the following modification was made:
  - Replaced inheritance from ERC20 contract with ERC20VotesPermit contract
  - Applied Ownable due to version 5 of @openzeppelin/contracts
  - No further changes in the original code
- MyOFT.sol: based on [this one](https://github.com/iota-community/layerzero-oft-v2-utils/blob/main/contracts/MyOFT.sol) and instead of inheriting from OFT contract, it inherits from the custom `OFTVotesPermit`
