import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import HomeScreen from "./pages/home/HomeScreen";
import CreateNFTs from "./pages/createNFT/CreateNFTs";
import SingleNFT from "./pages/eachNFT/SingleNFT";
import Fav from "./pages/favourites/Fav";
import ExploreNFTs from "./pages/exploreNFT/ExploreNFTs";
import Profile from "./pages/profile/Profile";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/createnft" component={CreateNFTs} />
      <Route exact path="/singlenft" component={SingleNFT} />
      <Route exact path="/favourites" component={Fav} />
      <Route exact path="/explore" component={ExploreNFTs} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
}

export default Routes;
