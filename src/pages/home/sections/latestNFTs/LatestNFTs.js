import React from "react";

// Stylesheet
import "./LatestNFTs.css";

// Assets
import seeMoreArrow from "../../../../assets/seeMoreArrow.png";
import NFTCards from "../../../../components/nftCards/NFTCards";

function LatestNFTs() {
  return (
    <section>
      <h2 className="space-heading">LATEST NFTs</h2>
      <div className="right-align line-heading">
        <div className="line"></div>
        <a href="/explore" className="yellow">
          SEE MORE <img src={seeMoreArrow} alt="See More" />
        </a>
      </div>

      {/* <NFTCards /> */}
    </section>
  );
}

export default LatestNFTs;
