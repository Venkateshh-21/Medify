import React from "react";
import { Snackbar, Alert } from "@mui/material";

const CustomSnack = ({ openSnack, setOpenSnack }) => {
  const vertical = "bottom";
  const horizontal = "center";
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };
  return (
    <div>
      {" "}
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Booking Sucessful!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnack;
