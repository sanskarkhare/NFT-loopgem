import React from "react";

// Stylesheet
import "./EditProfile.css";

// Popup
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

// Material UI Icons
import EditIcon from "@mui/icons-material/Edit";
import DragDrop from "../../../components/dragDrop/DragDrop";

function EditProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="edit-profile">
      <Button onClick={handleClickOpen}>
        <EditIcon />
        <p>Edit Profile</p>
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
          {"Edit Profile"}
        </DialogTitle>
        <DialogActions className="wallet-options">
          <form className="popup-form edit-form">
            <div className="form-half">
              <div className="profile-dragdrop">
                <DragDrop />
              </div>

              <div>
                <input type="text" name="" id="" placeholder="Display Name" />
                <input type="text" name="" id="" placeholder="Username" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Social Profile Link"
                />
              </div>
            </div>
            <div className="popup-buttons">
              <button className="button-black">Save</button>
              <button className="button-white">Cancel</button>
            </div>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditProfile;
