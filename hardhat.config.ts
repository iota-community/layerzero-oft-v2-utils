import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";

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
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: ACCOUNTS,
    },
    bnbMainnet: {
      chainId: 56,
      url: "https://bsc.nodereal.io", // "https://binance.llamarpc.com", // "https://binance.llamarpc.com", // "https://bsc.drpc.org", // "https://bsc-pokt.nodies.app", // "https://binance.llamarpc.com",
      accounts: ACCOUNTS,
    },
    polygon: {
      chainId: 137,
      url: "https://polygon-mainnet.public.blastapi.io", // "https://polygon-pokt.nodies.app",
      accounts: ACCOUNTS,
    },
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.public.blastapi.io",
      accounts: ACCOUNTS,
    },
    ethereum: {
      chainId: 1,
      url: "https://eth.drpc.org",
      accounts: ACCOUNTS,
    },
    fantom: {
      chainId: 250,
      url: "https://rpcapi.fantom.network",
      accounts: ACCOUNTS,
    },
    optimism: {
      chainId: 10,
      url: "https://op-pokt.nodies.app",
      accounts: ACCOUNTS,
    },
    base: {
      chainId: 8453,
      url: "https://base.drpc.org",
      accounts: ACCOUNTS,
    },
    avalanche: {
      chainId: 43114,
      url: "https://avalanche.drpc.org",
      accounts: ACCOUNTS,
    },
    arbitrum: {
      chainId: 42161,
      url: "https://arbitrum.drpc.org",
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
