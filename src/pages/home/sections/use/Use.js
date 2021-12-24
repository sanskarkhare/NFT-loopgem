import React from "react";

// Stylesheet
import "./Use.css";

// Assets
import useWallet from "../../../../assets/use-wallet.png";
import useImage from "../../../../assets/use-image.png";
import useUsers from "../../../../assets/use-users.png";

function Use() {
  return (
    <section className="use-section">
      <div className="headings">
        <div className="line-heading">
          <h3 className="yellow">HOW TO USE LOOPGEM</h3>
          <div className="line"></div>
        </div>
        <h2 className="space-heading">FIND YOUR TREASURE</h2>
      </div>
      <div className="cards use-cards">
        <div className="card use-card reflection-effect .use-reflection">
          <img src={useWallet} alt="Wallet" />
          <div className="use-details">
            <h2 className="yellow">Wallet</h2>
            <p>
              Connect your crypto wallet with LoopGem by clicking on the wallet
              icon at the top.
            </p>
          </div>
        </div>
        <div className="card use-card reflection-effect">
          <img src={useImage} alt="Create" />
          <div className="use-details">
            <h2 className="yellow">Create</h2>
            <p>
              Upload your digital media, choose your blockchain and create your
              first NFT.
            </p>
          </div>
        </div>
        <div className="card use-card reflection-effect .use-reflection">
          <img src={useUsers} alt="Promote" />
          <div className="use-details">
            <h2 className="yellow">Promote</h2>
            <p>Connect with the influncers and promote your NFT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Use;
