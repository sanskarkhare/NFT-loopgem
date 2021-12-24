import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import eth from "../../../../assets/eth.png";
import polygon from "../../../../assets/polygon.png";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "20px",
    fontWeight: "600",
  },
  ChooseCryptoContent: {},

  text: {
    fontSize: "18px",
  },
}));

function ChooseCrypto() {
  const classes = useStyles();
  return (
    <div
      className="choose-crypto"
      style={{
        marginTop: "50px",
      }}
    >
      <div className="content">
        <Typography class={classes.heading}>Choose Blockchain</Typography>
        <div
          class="chooseCryptoContent"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={eth}
              style={{
                margin: "10px 20px 0px 20px",
              }}
              alt="eth"
              classs={classes.imageCrypto}
              width="100px"
            ></img>
            <Typography class={classes.text} variant="h5">
              Ethereum
            </Typography>
          </div>
          <div
            class="chooseCryptoContent"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0.5,
              }}
            >
              <img
                src={polygon}
                style={{
                  margin: "10px 20px 0px 20px",
                }}
                alt="eth"
                classs={classes.imageCrypto}
                width="100px"
              ></img>
              <Typography class={classes.text} variant="h5">
                Polygon
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseCrypto;
