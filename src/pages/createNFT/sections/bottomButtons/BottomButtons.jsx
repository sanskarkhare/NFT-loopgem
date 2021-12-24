import React from "react";
import "./BottomButtons.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function BottomButtons() {
  const classes = useStyles();
  return (
    <div
      className="bottom-buttons"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      <Button
        variant="contained"
        style={{
          marginright: "20px",
          marginleft: "20px",
          width: "400px",
          padding: "20px",
        }}
      >
        <Typography style={{ fontSize: "16px" }} variant="h5">
          Create
        </Typography>
      </Button>
      <Button
        variant="outlined"
        style={{
          marginright: "20px",
          marginleft: "20px",
          width: "400px",
          padding: "20px",
          color: "white",
          border: "2px dashed gray",
        }}
      >
        <Typography style={{ fontSize: "16px" }} variant="h5">
          Cancel
        </Typography>
      </Button>
    </div>
  );
}

export default BottomButtons;
