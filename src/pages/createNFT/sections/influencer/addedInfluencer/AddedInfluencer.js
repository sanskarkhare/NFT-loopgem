import React, { useState } from "react";

// Assets
import influencerImage from "../../../../../assets/influencerImage.png";
import influencerTwitter from "../../../../../assets/influencerTwitter.png";
import CloseIcon from "@mui/icons-material/Close";

function AddedInfluencer() {
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

  const [list, updateList] = useState(defaultList);

  const deleteItem = (id) => {
    updateList(list.splice(id, 1));
    console.log("deleteItem");
  };

  return (
    <div>
      <div className="card influencer-card">
        {list.map((item) => {
          return (
            <div className="added-influencer">
              <div>
                <img
                  src={item.src}
                  alt="Influencer"
                  className="influencer-image"
                />
                <div className="influencer-details">
                  <img src={influencerTwitter} alt="Influencer Twitter" />
                  <p className="yellow">{item.name}</p>
                  <p className="followers">{item.followers}</p>
                </div>
              </div>
              <button
                id="button-id"
                value={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("closeIcon");
                  console.log(document.getElementById("button-id").value);
                }}
              >
                <CloseIcon className="cancel-influencer" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddedInfluencer;
