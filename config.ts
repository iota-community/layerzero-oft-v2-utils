// Mainnet pathway for brand-new OFT from IOTA EVM to IOTA L1

export default {
  lzEndpointOnCurrentChain: '0x1a44076050125825900e736c501f859c50fE728c',
  lzEndpointIdOnCurrentChain: '30284',

  lzEndpointIdOnRemoteChain: '30423',

  // For OFTAdapter deployment on EVM as src chain
  erc20TokenAddress: '',
  oftAdapterContractAddress: '',

  // For OFT deployment on EVM as dest chain or src chain
  oftContractAddress: '0x02AE4418F0FbcbE383b4eD103cf6B88B24542f4C',
  mintedTokenName: 'USDTmd',
  mintedTokenSymbol: 'USDTmd',

  // Peer address as OFT package ID on MoveVM
  oftPackageId: '0xb1f576849d9a6086982a13fedf1dd785da4b1314d430696e2f1240e5ed9d9be5',

  executorLzReceiveOptionMaxGas: '200000',
  executorGasDropInWeiOnDestChain: '0',
};
