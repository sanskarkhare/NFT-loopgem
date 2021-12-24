import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
require('dotenv').config()

const POLLING_INTERVAL = 12000
const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/7322a7e8535546a6ab8f9827f9816d87',
  4: 'https://rinkeby.infura.io/v3/7322a7e8535546a6ab8f9827f9816d87' 
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 4, 0x7a69,31337] })

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
    qrcode: true
  })