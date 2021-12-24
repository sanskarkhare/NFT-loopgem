import React from "react";
import {
  useHistory} from "react-router-dom";
// Stylesheet
import "./MetaData.css";
import NFT from "../../../../artifacts/contracts/NFT.sol/NFT.json"
import Market from "../../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json"

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close";
import DragDrop from "../../../../components/dragDrop/DragDrop";

import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import Web3Modal from 'web3modal'
import {
  nftaddress, nftmarketaddress
} from '../../../../config'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { useAppState } from "../../../../states/states";

const useStyles = makeStyles((theme) => ({}));

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


function MetaData() {
  let history=useHistory();

  const { library} = useAppState()

  const classes = useStyles();

  const [fileUr, setFileUr] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  // const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUr(url)
      // console.log(url)
      // console.log(fileUr)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  
  async function createMarket() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUr) return
    /* first, upload to IPFS */
    console.log(fileUr)
    const data = JSON.stringify({
      name, description, image: fileUr
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function createSale(url) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    
    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    console.log(contract)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait();
    console.log(tx)
    let event = tx.events[0]
    console.log(event)
    let value = event.args[2]
    let tokenId = value.toNumber()

    const price = ethers.utils.parseUnits(formInput.price, 'ether')
  
    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    await transaction.wait()
    history.push('/profile')
  }

  return (
    <div className="metadata">
      <div className="form-half">
        {/* <DragDrop className="form-left" /> */}
        <input
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
        />
        {
          fileUr && (
            <img className="rounded mt-4" width="250" height='300' src={fileUr} />
          )
        }
        </div>
        <br />
        <div className="form-right">
              
               <input
              type="text"
              name="price"
              className="price-input"
              placeholder="Enter price for one piece"
              onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
            />
            <input type="text" name="title" id="" placeholder="Add Title"
                        onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
              />
              <textarea
                name="description"
                rows="7"
                placeholder="Add Description"
                className="description"
                onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
              ></textarea>
            
            <label>
            {/* <b>Set A Price</b> */}
           
          </label>
      
      </div>
      <br />
      <div
      className="bottom-buttons"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      <Button
        variant="contained"
        style={{
          marginright: "20px",
          marginleft: "20px",
          width: "400px",
          padding: "20px",
        }}
        onClick={createMarket}
      >
        <Typography style={{ fontSize: "16px" }} variant="h5" >
          Create
        </Typography>
      </Button>
      <Button
        variant="outlined"
        style={{
          marginright: "20px",
          marginleft: "20px",
          width: "400px",
          padding: "20px",
          color: "white",
          border: "2px dashed gray",
        }}
      >
        <Typography style={{ fontSize: "16px" }} variant="h5">
          Cancel
        </Typography>
      </Button>
    </div>
      <br />

      {/* <label>
        Add External Link
        <span className="yellow">
          (You can add your external links like twitter/opensea/website etc...)
        </span>
        <input type="url" name="" id="" placeholder="Add URL" />
      </label>
      <br /> */}

      {/* <label>
        Add Tags
        <span className="yellow">(Max : 5)</span>
        <br />
        <input
          type="text"
          className="input-tags"
          name=""
          id=""
          placeholder="Add Tags"
        />
      </label> */}
      {/* <div className="tags">
        <p className="tag">
          Tag <CloseIcon className="tag-icon" />
        </p>
        <p className="tag">
          Tag <CloseIcon className="tag-icon" />
        </p>
        <p className="tag">
          Tag <CloseIcon className="tag-icon" />
        </p>
        <p className="tag">
          Tag <CloseIcon className="tag-icon" />
        </p>
      </div> */}
    </div>
  );
}

export default MetaData;
