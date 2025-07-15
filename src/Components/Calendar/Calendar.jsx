import React, { useState } from "react";
import DateCarousal from "./DateCarosuel/DateCarousal";
import SlotSelector from "./SlotSelector/SlotSelector";
import { startOfDay } from "date-fns";
import { Box } from "@mui/material";

const Calendar = ({ details, slots, handleBooking }) => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const values = Object.values(slots);
  let totalSlots = 0;
  values.forEach((a) => (totalSlots += a.length));

  return (
    <Box  sx={{
  width: { xs: '100%', md: '100%' }, 
}}>
      <DateCarousal
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <SlotSelector
        slots={slots}
        details={details}
        selectedDate={selectedDate}
        handleBooking={handleBooking}
      />
    </Box>
  );
};

export default Calendar;
