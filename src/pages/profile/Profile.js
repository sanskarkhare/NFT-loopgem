import React from "react";
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
// Stylesheet
import "./Profile.css";

import { nftaddress, nftmarketaddress } from "../../config";
import NFT from "../../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../../artifacts/contracts/NFTMarket.sol/NFTMarket.json";


// Assets
import profilePage from "../../assets/profilePage.png";

// Material UI Icons
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Pages and Elements
import NFTCards from "../../components/nftCards/NFTCards";
import EditProfile from "./editProfile/EditProfile";
import Copy from "../../components/copyToClipboard/Copy";

function Profile() {

  const [nfts, setNfts] = useState([])
  const [sold, setSold] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNfts()
  }, [])

async function loadNfts() {
 try{ const web3modal = new Web3Modal();
  const connection = await web3modal.connect();

  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner();

  const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
  const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
  const data = await marketContract.fetchItemsCreated();

  const items = await Promise.all(data.map(async i => {
    const tokenUri = await tokenContract.tokenURI(i.tokenId)
    const meta = await axios.get(tokenUri);
    let price = ethers.utils.formatUnits(i.price.toString(), 'ether');

    let item = {
      price,
      tokenId: i.tokenId.toNumber(),
      seller: i.seller,
      owner: i.owner,
      sold: i.sold,
      image: meta.data.image,
      desc: meta.data.description,
      name: meta.data.name
    }
    return item;
  }))

  const soldItems = items.filter(i => i.sold)
    setSold(soldItems)
    setNfts(items)
    setLoadingState('loaded')
} catch(err){
  console.log(err);
}
}


  return (
    <>
    {
      (loadingState === 'loaded' && !nfts.length) ? 
      (
        <>
          <h1 className="py-10 px-20 text-3xl">No assets created</h1>
        </>
      )
      : 
      (<>
      <section>
              <h1 className="space-heading margin-heading">NFTs CREATED</h1>
              <br />
              <br />
        <div className="nft-cards">
          {
            nfts.map((nft,idx) => (
              
                <NFTCards nft={nft} key={idx}/>
            
            ))
          } 
        </div>
      </section>
        </>
        
      )
    }
     
    </>
  );
}

export default Profile;
