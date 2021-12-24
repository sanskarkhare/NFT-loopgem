import React from "react";

// Stylesheet
import "./CreateNFTs.css";

// Sections
import MetaData from "./sections/metaData/MetaData";
import Influencer from "./sections/influencer/Influencer";
import Price from "./sections/price/Price";
import ChooseCrypto from "./sections/chooseCrypto/ChooseCrypto";
import BottomButtons from "./sections/bottomButtons/BottomButtons";

function CreateNFTs() {
  return (
    <div>
      <h1 className="space-heading margin-heading">CREATE NFT</h1>
      <form className="createnft-form">
        <MetaData />
        {/* <ChooseCrypto /> */}
        {/* <Influencer /> */}
        {/* <Price /> */}
        {/* <BottomButtons /> */}
      </form>
    </div>
  );
}

export default CreateNFTs;
