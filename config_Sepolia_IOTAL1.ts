// Pathway from Sepolia EVM to IOTA L1

export default {
  lzEndpointOnCurrentChain: '0x6EDCE65403992e310A62460808c4b910D972f10f',
  lzEndpointIdOnCurrentChain: '40161',

  lzEndpointIdOnRemoteChain: '40423',

  erc20TokenAddress: '0x514b0C11Bd143778367f1d1273ba1b2236Fb383c',
  oftAdapterContractAddress: '0x0003d9Ce49871F984268f7eCaFb8026aa7be4Ee3',

  // For OFT deployment on EVM as dest chain
  oftContractAddress: '0xE03934D55A6d0f2Dc20759A1317c9Dd8f9D683cA',
  mintedTokenName: 'USDC',
  mintedTokenSymbol: 'USDC',

  oftPackageId: '0xa947ff8022f37c32b06a67d674154f170422e0c95cf44e1a55f3c2a45fa355f2',

  executorLzReceiveOptionMaxGas: '200000',
  executorGasDropInWeiOnDestChain: '0',
};
