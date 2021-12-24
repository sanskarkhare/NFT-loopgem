import React from "react";

// Stylesheet
import "./SingleNFT.css";

// Assets
import welcome from "../../assets/welcome.png";
import ethereum from "../../assets/ethereum.png";

// Components
import NFTCards from "../../components/nftCards/NFTCards";

// Material UI Icons
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

function SingleNFT() {
  return (
    <section>
      <div className="singlenft">
        <img className="singlenft-img" src={welcome} alt="single nft" />
        <div className="nft-details">
          <div className="singlenft-ratings">
            <div className="ratings">
              <RemoveRedEyeOutlinedIcon />
              <p>9801</p>
            </div>
            <div className="ratings">
              <FavoriteBorderIcon />
              <p>321</p>
            </div>
          </div>
          <div className="singlenft-details">
            <h2>Mahapatih Paramitta &amp; Metta</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod magna ali Ut enim tempor incididunt ut labore et dolore
            </p>
            <div className="tags">
              <p className="tag">Cryptocurrency</p>
              <p className="tag">Cryptocurrency</p>
              <p className="tag">Cryptocurrency</p>
              <p className="tag">Cryptocurrency</p>
            </div>
            <div className="singlenft-price">
              <img src={ethereum} alt="ethereum" />
              <h3>0.245</h3>
              <p>($76.38)</p>
            </div>
            <div className="singlenft-buttons">
              <button className="button-white">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="side-icons">
          <FavoriteBorderIcon className="side-icon" />
          <SendRoundedIcon className="side-icon" />
          <PersonOutlineOutlinedIcon className="side-icon" />
          <ReportProblemOutlinedIcon className="side-icon" />
        </div>
      </div>

      <h2 className="space-heading">CREATED BY CREATOR</h2>

      <NFTCards />
    </section>
  );
}

export default SingleNFT;
