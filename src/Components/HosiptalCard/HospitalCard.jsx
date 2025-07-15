import React, { useState } from 'react'
import hos from "../../assets/hospital.png"
import thum from "../../assets/thumb.png"
import { Box,Stack,Typography,Chip,Divider,Button } from '@mui/material'
import Calendar from "../Calendar/Calendar"


const HospitalCard = ({details,slots,handleBooking,fromBookings}) => {
  const [displayCalendar,setDisplayCalendar]=useState(false)

  const onClick=()=>{
    setDisplayCalendar(!displayCalendar)
  }

  return (
    <Box mt={4} sx={{ borderRadius: 2, backgroundColor:"white", p: { xs: 2, md: 2 },width:"700px", }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"nowrap"}
      >
        <Box
          component="img"
          src={hos}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1}>
          <Typography
            component="h3"
          
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 15 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
            whiteSpace={"nowrap"}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={13}
            fontWeight={700}
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="#01A400"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
            
          </Stack>
          
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="#01A400"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={thum}
              width={{ xs: 16, md: 15 }}
              height={{ xs: 16, md: 15 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 15 }}
              color="white"
              sx={{ opacity: 0.5 }}
            >
              {details["Hospital overall rating"] == "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        <Stack
          justifyContent={fromBookings ? "flex-start" : "flex-end"}
          
          
        >
          {!fromBookings && (
            <>
              <Typography
                textAlign="center"
                color="#01A400"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={onClick}
                sx={{fontSize:"12px",whiteSpace:"nowrap",textTransform:"none"}}
                
              >
                {!displayCalendar
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
            </>
          )}
          

          {fromBookings && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
        {displayCalendar &&   <Calendar details={details} slots={slots} handleBooking={handleBooking} />}
    </Box>
  )
}

export default HospitalCard