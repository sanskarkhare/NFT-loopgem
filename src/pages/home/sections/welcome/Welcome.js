import React from "react";

// Stylesheet
import "./Welcome.css";

// Assets
import arrow from "../../../../assets/createNFT.png";
import welcome from "../../../../assets/welcome.png";
import avatar from "../../../../assets/avatar.png";

function Welcome() {
  return (
    <section className="half-sections">
      <div className="left">
        <div className="line-heading">
          <div className="line"></div>
          <h3 className="yellow">WELCOME TO LOOPGEM</h3>
        </div>
        <h1 className="main-heading">
          Discover, Create and <span className="yellow">Promote</span> NFTs
        </h1>
        <p className="desc">
          LoopGem is the world's first NFT marketplace that allows to you
          create, collect, sell and even promote NFTs.
        </p>
        <a href="/createnft" className="create-nft">
          <h3 className="yellow">Create</h3>
          <img src={arrow} alt="Create NFT" />
        </a>
      </div>

      <div className="right">
        <div className="reflection-effect">
          <img className="welcome-image" src={welcome} alt="Welcome Section" />
          <div className="author-info">
            <img src={avatar} alt="Avatar" />
            <div className="info">
              <h5>Mahapatih Paramitta &amp; Metta</h5>
              <p className="yellow">@Johnashan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
