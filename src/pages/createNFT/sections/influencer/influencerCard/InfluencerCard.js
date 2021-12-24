import React, { useState } from "react";

// Assets
import influencerImage from "../../../../../assets/influencerImage.png";
import influencerTwitter from "../../../../../assets/influencerTwitter.png";

function InfluencerCard() {
  const defaultList = [
    {
      id: 1,
      src: influencerImage,
      name: "Naman Mathur",
      followers: "20k Followers",
    },
    {
      id: 2,
      src: influencerImage,
      name: "Naman",
      followers: "20k Followers",
    },
    {
      id: 3,
      src: influencerImage,
      name: "Naman Mathur",
      followers: "20k Followers",
    },
    {
      id: 4,
      src: influencerImage,
      name: "Naman",
      followers: "20k Followers",
    },
  ];

  const list = defaultList;

  return (
    <div className="card influencer-card">
      {list.map((item) => {
        return (
          <div>
            <img src={item.src} alt="Influencer" className="influencer-image" />
            <div className="influencer-details">
              <img src={influencerTwitter} alt="Influencer Twitter" />
              <p className="yellow">{item.name}</p>
              <p className="followers">{item.followers}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InfluencerCard;
