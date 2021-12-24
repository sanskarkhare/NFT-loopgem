import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

// Stylesheet
import "./Header.css";

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

// Assets
import logo from "../../assets/logo.png";
import profile from "../../assets/Profile.png";
import searchHamburger from "../../assets/Search.png";

// Wallet
import WalletPopup from "./wallet/WalletPopup";

function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };


  return (
    <header className="header">
      {!isTabletOrMobile ? (
        <div className="laptop-header">
          <a href="/" onClick={() => closeMenu()}>
            <img src={logo} alt="logo" className="header-logo" />
          </a>
          <input className="search" type="search" placeholder="search" />
          <div className="nav">
            <a href="/" onClick={() => closeMenu()}>
              <h2>Home</h2>
            </a>
            <a href="/explore" onClick={() => closeMenu()}>
              <h2>Explore</h2>
            </a>
            {/* <a href="/favourites" onClick={() => closeMenu()}>
              <h2>Favourites</h2>
            </a> */}
          </div>
          <a href="/createnft" onClick={() => closeMenu()}>
            <button className="create-button">create</button>
          </a>
          <div className="nav-icons">
            <WalletPopup />
            <a href="/profile">
              <img src={profile} alt="profile" />
            </a>
          </div>
        </div>
      ) : (
        <div className="hamburger">
          <div className={`hamburger-nav ${navbarOpen ? "show-nav" : ""}`}>
            <a href="/" onClick={() => closeMenu()}>
              <h2>Home</h2>
            </a>
            <a href="/explore" onClick={() => closeMenu()}>
              <h2>Explore</h2>
            </a>
            {/* <a href="/favourites" onClick={() => closeMenu()}>
              <h2>Favourites</h2>
            </a> */}
            <a href="/createnft" onClick={() => closeMenu()}>
              <button className="create-button">create</button>
            </a>
          </div>
          <div className="hamburger-header">
            <button onClick={handleToggle} className="hamburger-button">
              {navbarOpen ? (
                <CloseIcon className="hamburger-buttons" />
              ) : (
                <MenuIcon className="hamburger-buttons" />
              )}
            </button>
            <div className="nav-icons">
              <img src={searchHamburger} alt="" />
              <WalletPopup />
              <a href="/profile">
                <img src={profile} alt="profile" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
