import React from "react";

// Stylesheet
import "./NFTCards.css";

// Assets
import cardImage from "../../assets/cardImage.png";
import avatar from "../../assets/avatar.png";
import priceLeft from "../../assets/priceLeft.png";

// Material UI Icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function NFTCards({nft}) {
  // const listItems = nfts.map((number) =>
  //   <li>{number.price}</li>
  // );
  // console.log(nft)
  return (
    <>

    {/* <div className="cards nft-cards" > */}
    
          
          <a href="/singlenft">
          <div className="card nft-card">
            <img src={nft.image} alt="Card" className="img-cl"/>
            <div className="author-details">
              <div className="top-details">
                <img src={avatar} alt="Avatar" />
                <div className="info">
                  <h5>{nft.name}</h5>
                  <p className="yellow">@Sanskar Khare</p>
                </div>
              </div>
              <div className="bottom-details">
                <div className="price-left">
                  <img src={priceLeft} alt="price" />
                  <p>{nft.price}</p>
                </div>
                <FavoriteBorderIcon />
              </div>
            </div>
          </div>
        </a>
        
      
    
      {/* <a href="/singlenft">
        <div className="card nft-card">
          <img src={cardImage} alt="Card" />
          <div className="author-details">
            <div className="top-details">
              <img src={avatar} alt="Avatar" />
              <div className="info">
                <h5>Mahapatih Paramitta</h5>
                <p className="yellow">@Johnashan</p>
              </div>
            </div>
            <div className="bottom-details">
              <div className="price-left">
                <img src={priceLeft} alt="price" />
                <p>13.80</p>
              </div>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </a>
      <a href="/singlenft">
        <div className="card nft-card">
          <img src={cardImage} alt="Card" />
          <div className="author-details">
            <div className="top-details">
              <img src={avatar} alt="Avatar" />
              <div className="info">
                <h5>Mahapatih Paramitta</h5>
                <p className="yellow">@Johnashan</p>
              </div>
            </div>
            <div className="bottom-details">
              <div className="price-left">
                <img src={priceLeft} alt="price" />
                <p>13.80</p>
              </div>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </a>
      <a href="/singlenft">
        <div className="card nft-card">
          <img src={cardImage} alt="Card" />
          <div className="author-details">
            <div className="top-details">
              <img src={avatar} alt="Avatar" />
              <div className="info">
                <h5>Mahapatih Paramitta</h5>
                <p className="yellow">@Johnashan</p>
              </div>
            </div>
            <div className="bottom-details">
              <div className="price-left">
                <img src={priceLeft} alt="price" />
                <p>13.80</p>
              </div>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </a>
      <a href="/singlenft">
        <div className="card nft-card">
          <img src={cardImage} alt="Card" />
          <div className="author-details">
            <div className="top-details">
              <img src={avatar} alt="Avatar" />
              <div className="info">
                <h5>Mahapatih Paramitta</h5>
                <p className="yellow">@Johnashan</p>
              </div>
            </div>
            <div className="bottom-details">
              <div className="price-left">
                <img src={priceLeft} alt="price" />
                <p>13.80</p>
              </div>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </a>
      <a href="/singlenft">
        <div className="card nft-card">
          <img src={cardImage} alt="Card" />
          <div className="author-details">
            <div className="top-details">
              <img src={avatar} alt="Avatar" />
              <div className="info">
                <h5>Mahapatih Paramitta</h5>
                <p className="yellow">@Johnashan</p>
              </div>
            </div>
            <div className="bottom-details">
              <div className="price-left">
                <img src={priceLeft} alt="price" />
                <p>13.80</p>
              </div>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </a>
      <a href="/singlenft">
        <div className="card nft-card">
          <img src={cardImage} alt="Card" />
          <div className="author-details">
            <div className="top-details">
              <img src={avatar} alt="Avatar" />
              <div className="info">
                <h5>Mahapatih Paramitta</h5>
                <p className="yellow">@Johnashan</p>
              </div>
            </div>
            <div className="bottom-details">
              <div className="price-left">
                <img src={priceLeft} alt="price" />
                <p>13.80</p>
              </div>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </a>
      <a href="/singlenft">
        <div className="card nft-card">
          <img src={cardImage} alt="Card" />
          <div className="author-details">
            <div className="top-details">
              <img src={avatar} alt="Avatar" />
              <div className="info">
                <h5>Mahapatih Paramitta</h5>
                <p className="yellow">@Johnashan</p>
              </div>
            </div>
            <div className="bottom-details">
              <div className="price-left">
                <img src={priceLeft} alt="price" />
                <p>13.80</p>
              </div>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </a> */}
    {/* </div> */}
  

</>
  );

}

export default NFTCards;
