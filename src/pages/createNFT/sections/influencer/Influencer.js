import React from "react";
import InfluencerCard from "./influencerCard/InfluencerCard";
import MoreInfluencers from "./moreInfluencers/MoreInfluencers";
import AddedInfluencer from "./addedInfluencer/AddedInfluencer";

// Stylesheet
import "./Influencer.css";

function Influencer() {
  return (
    <div className="influencer-content">
      <div>
        <p className="influencer-heading">
          Add Influencers
          <span className="yellow">
            (Influencers helps in market your NFT , it is the best way to reach
            a greater audience)
          </span>
        </p>
        <div className="cards influencer-cards">
          <InfluencerCard />

          <MoreInfluencers />
        </div>
      </div>

      <div>
        <p className="influencer-heading">
          Added Influencers
          <span className="yellow">
            (You can remove the added influencers if you want)
          </span>
        </p>
        <div className="cards influencer-cards">
          <AddedInfluencer />
        </div>
      </div>
    </div>
  );
}

export default Influencer;
