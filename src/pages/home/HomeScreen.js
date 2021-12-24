import React from "react";

// Stylesheet
import "./HomeScreen.css";

// Sections
import Welcome from "./sections/welcome/Welcome";
import Use from "./sections/use/Use";
import LatestNFTs from "./sections/latestNFTs/LatestNFTs";
import RegisterPopup from "./sections/registerPopup/RegisterPopup";

function HomeScreen() {
  return (
    <div>
      {/* <RegisterPopup /> */}
      <Welcome />
      <Use />
      <LatestNFTs />
    </div>
  );
}

export default HomeScreen;
