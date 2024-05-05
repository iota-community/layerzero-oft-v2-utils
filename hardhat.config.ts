import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";

const SEPOLIA_RPC_URL = process.env.rpcUrlOnSrcChain
  ? process.env.rpcUrlOnSrcChain
  : "https://eth-sepolia.public.blastapi.io";
const BNB_TESTNET_RPC_URL = process.env.rpcUrlOnDestChain
  ? process.env.rpcUrlOnDestChain
  : "https://bsc-testnet.public.blastapi.io";

const SHIMMER_EVM_TESTNET_RPC_URL = "https://json-rpc.evm.testnet.shimmer.network";
const SHIMMER_EVM_MAINNET_RPC_URL = "https://json-rpc.evm.shimmer.network";

const IOTA_EVM_TESTNET_RPC_URL = "https://json-rpc.evm.testnet.iotaledger.net";
const IOTA_EVM_MAINNET_RPC_URL = "https://json-rpc.evm.iotaledger.net";

const ACCOUNTS = process.env.DEPLOYER_ACCOUNT_PRIV_KEY
  ? [`${process.env.DEPLOYER_ACCOUNT_PRIV_KEY}`]
  : [];

module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: false,
  },
  networks: {
    hardhat: { chainId: 31337 },
    shimmerEvmTestnet: {
      chainId: 1073,
      url: SHIMMER_EVM_TESTNET_RPC_URL,
      accounts: ACCOUNTS,
    },
    shimmerEvmMainnet: {
      chainId: 148,
      url: SHIMMER_EVM_MAINNET_RPC_URL,
      accounts: ACCOUNTS,
    },
    iotaEvmTestnet: {
      chainId: 1075,
      url: IOTA_EVM_TESTNET_RPC_URL,
      accounts: ACCOUNTS,
    },
    iotaEvmMainnet: {
      chainId: 8822,
      url: IOTA_EVM_MAINNET_RPC_URL,
      accounts: ACCOUNTS,
    },
    bnbTestnet: {
      chainId: 97,
      url: BNB_TESTNET_RPC_URL,
      accounts: ACCOUNTS,
    },
    sepolia: {
      chainId: 11155111,
      url: SEPOLIA_RPC_URL,
      accounts: ACCOUNTS,
    },
  },
  solidity: {
    version: "0.8.22",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
