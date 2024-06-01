import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

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
      url: "https://eth.llamarpc.com",
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
      url: "https://arbitrum.llamarpc.com",
      accounts: ACCOUNTS,
    },
  },
  etherscan: {
    apiKey: {
      iotaEvmMainnet: "3227102f-dd06-4329-b1e2-ab1e2f127d6e",
      shimmerEvmMainnet: "061b49d0-71fe-4581-a964-a1d962340cae",
      bnbMainnet: "ADIP65BS7UI9CUNRHYCUMYQ2F2327G6MNN",
      polygon: "1YR53MFG3TS5G4A3ZYP9J6HG1HA3MIWIVJ",
      ethereum: "Y5TY1V4KP6TYSFI2CSZJE12HU5H3YZ7TZB",
      fantom: "19CB1KRA7G7D2AFJEQ33CVK6ZCHTK4ZSDE",
      optimism: "WCFRYSKDKK661UZ9EKJKBZPQV461M227ET",
      base: "8GTWGADU386IDWFIDRGYT2U5BJWH4XUS2N",
      avalanche: "not needed",
      arbitrum: "I392RYY2UE7CETV9X25YJ6PA5BHP3D4ADD",
    },
    customChains: [
      {
        network: "iotaEvmMainnet",
        chainId: 8822,
        urls: {
          apiURL: "https://explorer.evm.iota.org/api",
          browserURL: "https://explorer.evm.iota.org",
        },
      },
      {
        network: "shimmerEvmMainnet",
        chainId: 148,
        urls: {
          apiURL: "https://explorer.evm.shimmer.network/api",
          browserURL: "https://explorer.evm.shimmer.network",
        },
      },
      {
        network: "bnbMainnet",
        chainId: 56,
        urls: {
          apiURL: "https://api.bscscan.com/api",
          browserURL: "https://bscscan.com",
        },
      },
      {
        network: "polygon",
        chainId: 137,
        urls: {
          apiURL: "https://api.polygonscan.com/api",
          browserURL: "https://polygonscan.com",
        },
      },
      {
        network: "ethereum",
        chainId: 1,
        urls: {
          apiURL: "https://api.etherscan.io/api",
          browserURL: "https://etherscan.io",
        },
      },
      {
        network: "fantom",
        chainId: 250,
        urls: {
          apiURL: "https://api.ftmscan.com/api",
          browserURL: "https://ftmscan.com",
        },
      },
      {
        network: "optimism",
        chainId: 10,
        urls: {
          apiURL: "https://api-optimistic.etherscan.io/api",
          browserURL: "https://optimistic.etherscan.io/",
        },
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
      {
        network: "avalanche",
        chainId: 43114,
        urls: {
          apiURL: "https://api.avascan.info/v2/network/mainnet/evm/43114/etherscan",
          browserURL: "https://avascan.info",
        },
      },
      {
        network: "arbitrum",
        chainId: 42161,
        urls: {
          apiURL: "https://api.arbiscan.io/api",
          browserURL: "https://arbiscan.io",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
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
