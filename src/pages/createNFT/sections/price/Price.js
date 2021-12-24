import React from "react";

// Stylesheet
import "./Price.css";

function Price() {
  return (
    <div className="form-price">
      <label>
        <b>Set A Price</b>
        <input
          type="text"
          name=""
          id=""
          className="price-input"
          placeholder="Enter price for one piece"
        />
      </label>
      <p className="yellow">Service fee 2.5%</p>
      <p className="yellow">Influencer fee 2.5%</p>
      <div className="flex-line">
        <p>You will receive 1,378.65 ETH</p>
        <p className="yellow">($ 3511)</p>
      </div>
    </div>
  );
}

export default Price;
