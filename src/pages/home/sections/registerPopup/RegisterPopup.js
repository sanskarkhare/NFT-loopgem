import React from "react";

// Stylesheet
import "./RegisterPopup.css";

// Popup
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function RegisterPopup() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className="popup popup-title" id="responsive-dialog-title">
          {"Connect With LoopGem"}
        </DialogTitle>
        <DialogActions className="wallet-options">
          <form className="popup-form">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Display Name" />
            <input type="email" placeholder="Email Address" />
            <div className="terms-checkbox">
              <input type="checkbox" id="terms-conditions" />
              <label for="terms-conditions">
                I agree to the LoopGem
                <span className="yellow"> Terms And Conditions</span> and
                <span className="yellow"> Privacy Policies</span>
              </label>
            </div>
            <button className="button-black">Register</button>
            <button className="button-white">Cancel</button>
            <br />
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RegisterPopup;
