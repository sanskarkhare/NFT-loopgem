import React from "react";
import InfluencerCard from "../influencerCard/InfluencerCard";

// Stylesheet
import "./MoreInfluencers.css";

// Popup
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

// Assets
import influencers from "../../../../../assets/influencers.png";

// Material UI Tabs
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function MoreInfluencers() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="more-influencers">
      <Button className="extra-card" onClick={handleClickOpen}>
        <img src={influencers} alt="extra" />
        <p>
          See More <br /> Influencers
        </p>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          className="popup popup-title edit-profile-popup"
          id="responsive-dialog-title"
        >
          {"Find More Influencers"}
        </DialogTitle>
        <DialogActions className="wallet-options">
          <form>
            <input
              className="influencers-search"
              type="search"
              placeholder="Search"
            />
          </form>

          <Box sx={{ width: "100%", bgcolor: "none" }} className="box">
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              className="tabs"
            >
              <Tab label="Item One" className="tab" />
              <Tab label="Item Two" className="tab" />
              <Tab label="&nbsp; Item Three &nbsp;" className="tab" />
            </Tabs>
          </Box>

          <div className="cards more-influencers-cards">
            <InfluencerCard />
            <InfluencerCard />
            <InfluencerCard />
            <InfluencerCard />
            <InfluencerCard />
            <InfluencerCard />
            <InfluencerCard />
            <InfluencerCard />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MoreInfluencers;
