import React, { useState } from "react";
import { Box, Stack, Typography, Modal, Button,TextField } from "@mui/material";
import { format } from "date-fns";

const formatDate = (date) => {
  if (date) {
    return format(new Date(date), "E, d LLLL");
  }
};
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  isModalOpen,
  setIsmodalOpen,
  setOpenSnack,
  bookings,
}) => {
  let [email, setEmail] = useState("");

  const onChange=(e)=>{
    setEmail(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
   const prevBookings = localStorage.getItem("bookings") || "[]";

    let data = JSON.stringify([
      ...prevBookings,
      { ...bookings, bookingEmail: email },
    ]);
    localStorage.setItem("bookings", data);
    setOpenSnack(true);
    setIsmodalOpen(false);
    setEmail("");
  };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsmodalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={modalStyle} spacing={2} >
            <Typography>Confirm Booking</Typography>
            <Typography sx={{}}>Please enter your E-mail for booking selected on <span style={{fontWeight:"900"}}>{bookings.bookingTime+" on"+ formatDate( bookings.bookingDate)} </span></Typography>
           <Stack  component={"form"} spacing={2} onSubmit={onSubmit} >
               <TextField type={"email"} value={email} placeholder="Please Enter Email" required onChange={onChange}  />
                <Button variant="contained" type="Submit">Confirm Booking</Button>
            </Stack> 
        </Stack>
      </Modal>
    </div>
  );
};

export default BookingModal;
