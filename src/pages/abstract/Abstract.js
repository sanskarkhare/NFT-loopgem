import React from "react";
import NFTCards from "../../components/nftCards/NFTCards";

// Stylesheet
import "./ExploreNFTs.css";

// Material UI
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

function Abstract() {
  const [age, setAge] = React.useState("");

  const handleDropdown = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(0);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="explore-page">
      <h1 className="space-heading margin-heading">EXPLORE</h1>
      <p className="yellow">
        Check out the amazing collection of NFTs and find their creators
      </p>
      {/* <form>
        <input className="explore-search" type="search" placeholder="Search" />
      </form> */}

      <div className="filter-tabs">
        <FormControl
          className="explore-dropdown"
          sx={{
            m: 1,
            minWidth: 120,
            bgcolor: "white",
          }}
        >
          <Select
            value={age}
            onChange={handleDropdown}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Creators</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ bgcolor: "none" }} className="box">
          <Tabs value={value} onChange={handleTabs} centered className="tabs">
            <Tab label="Item One" className="tab" />
            <Tab label="Item Two" className="tab" />
            <Tab label="Item Three" className="tab" />
          </Tabs>
        </Box>

        <button className="filters">
          <FilterAltOutlinedIcon />
          <p>Filters</p>
        </button>
      </div>

      <NFTCards />
    </div>
  );
}

export default Abstract;
