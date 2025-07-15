import { Box, Stack, Typography, Chip, Divider } from "@mui/material";
import React from "react";

const SlotSelector = ({ slots, details, handleBooking, selectedDate }) => {
  const onClick = (timeSlot) => {
    handleBooking({
      ...details,
      bookingDate: selectedDate,
      bookingTime: timeSlot,
    });
  };
  return (
    <Stack mt={2} spacing={1}>
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Typography component={"p"} mr={2}>Morning</Typography>
        {slots.morning.map((a) => {
          return (
            <Chip
              label={a}
              
              variant="outlined"
              onClick={() => onClick(a)}
              sx={{ fontSize: { xs: 10, md: 13 },color:"primary.main",borderColor:"primary.main" }}
            />
          );
        })}
      </Box>
      <Divider />
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Typography component={"p"} mr={2}>Afternoon</Typography>
        {slots.afternoon.map((a) => {
          return (
            <Chip
              label={a}
              
              variant="outlined"
              onClick={() => onClick(a)}
              sx={{ fontSize: { xs: 10, md: 13 },color:"primary.main",borderColor:"primary.main",marginRight:"5px" }}
            />
          );
        })}
      </Box>
      <Divider />
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Typography component={"p"} mr={2}>Evening</Typography>
        {slots.evening.map((a) => {
          return (
            <Chip
              label={a}
              
              variant="outlined"
              onClick={() => onClick(a)}
              sx={{ fontSize: { xs: 10, md: 13 },color:"primary.main",borderColor:"primary.main",marginRight:"5px", }}
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default SlotSelector;
