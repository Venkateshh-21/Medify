import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography, Stack } from "@mui/material";
import { format, add, isEqual, startOfDay } from "date-fns";
import left from  "../../../assets/cleft.png"
import right from "../../../assets/cright.png"


const datePicks = [];
for (let i = 0; i < 7; i++) {
  datePicks.push(add(startOfDay(new Date()), { days: i }));
}
const dayConverter = (day) => {
  const date = startOfDay(new Date());
  if (isEqual(date, day)) {
    return "Today";
  } else if (isEqual(date, add(day, { days: -1 }))) {
    return "Tomorrow";
  } else {
    return format(day, "E, d LLL");
  }
};
const DateCarousal = ({ setSelectedDate, selectedDate, totalSlots }) => {
  const onClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box width={"100%"} mt={3}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={3}
        breakpoints={{
          767: {
            spaceBetween: 1,
            slidesPerView: 3,
          },
        }}
      >
        {datePicks.map((a, i) => {
          return (
            <SwiperSlide key={i+1}>
              <Stack onClick={()=>onClick(a)} sx={{width:{sm:"20", md:"100px"},whiteSpace:"nowrap",cursor:"pointer"}}>
                <Typography
                  sx={
                    isEqual(a, selectedDate)
                      ? { fontWeight: "600" }
                      : { fontWeight: "300" }
                  }
                >
                  {dayConverter(a)}
                </Typography>
                <Typography sx={{width:"60px",fontSize:"15px"}}>{totalSlots + " Slots Avaliable"}</Typography>
                <Box
                  height={{ xs: "4px", md: "5px" }}
                  width={{ xs: 1, md: "calc(100% - 50px)" }}
                  position="relative"
                  bottom="0"
                  bgcolor={
                    isEqual(a, selectedDate) ? "primary.main" : "rgba(0,0,0,0)"
                  }
                  left={0}
                  zIndex={999}
                  mt="5px"
                  mx="auto"
                ></Box>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default DateCarousal;
