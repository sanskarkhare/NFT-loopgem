import React from "react";

// Stylesheet
import "./Footer.css";

// Assets
import footerLogo from "../../assets/footerLogo.png";

// Material UI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Logo" />
      <p className="desc">
        Loop Gem is a shared liquidity NFT market smart contract which is used
        by multiple websites to provide the users the best possible experience.
      </p>
      <div className="nav footer-nav">
        <h2>Profile</h2>
        <h2>Marketplace</h2>
        <h2>Create</h2>
        <h2>Whishlist</h2>
        <a href="mailto:support@loopgem.com">
          <h2>Contact Us</h2>
        </a>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/loopgem/">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/LoopGem">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/loop_gem/">
          <InstagramIcon />
        </a>
      </div>
      <p className="copyright">© Copyright | LoopGem | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
