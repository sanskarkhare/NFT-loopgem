import create from 'zustand';
import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

import { nftaddress, nftmarketaddress } from '../config';
import { BigNumber, Contract, utils, Event, ethers } from 'ethers'

import { create as ipfsHttpClient } from 'ipfs-http-client'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


const useAppState = create((set,get) => ({
    counter: 0,
    contract: undefined,
    library: undefined,
    incount: () => set( state=> ({ counter: state.counter+1 }) ),

    setContract: async (library, chainId) => {
        try {
          if (!library) throw new Error('No Web3 Found')
    
          const networkid = (id) => {
            switch (id) {
              case 0x7a69:
                return 31337
              default:
                return id
            }
          }

        
         
    
          const contract = new Contract(nftmarketaddress, Market.abi, library.getSigner())

    
          set({
            library,
            contract,
            
          })
        } catch (e) {
          console.log(e)
        }
      },
      
      
    
}) )

export { useAppState };