// Mainnet pathway for OFTAdapter from Arbitrum to IOTA L1

export default {
  lzEndpointOnCurrentChain: '0x1a44076050125825900e736c501f859c50fE728c',
  lzEndpointIdOnCurrentChain: '30110',

  lzEndpointIdOnRemoteChain: '30423',

  // For OFTAdapter deployment on EVM as src chain
  erc20TokenAddress: '0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA',
  oftAdapterContractAddress: '0x50721AaD21A49b1024E985Bd99d4904326d9b951',

  // For OFT deployment on EVM as dest chain or src chain
  oftContractAddress: '',
  mintedTokenName: '',
  mintedTokenSymbol: '',

  // Peer address as OFT package ID on MoveVM
  oftPackageId: '0xed312b3f38559d4cb042f5314cbedef8d52b96c6ddb138560a01f71a6e69b82e',

  executorLzReceiveOptionMaxGas: '200000',
  executorGasDropInWeiOnDestChain: '0',
};
