import React from "react";
import { Box, Container } from "@mui/material";
import { Pagination,Autoplay, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";


const Offers = () => {
  const array = new Array(6).fill(1);
  console.log(array.length);
  return (
    <Box py={6} sx={{width:"100%",backgroundColor:"white"}}>
         <Container maxWidth='xl'>
      <Swiper
       className="offers-carousel-container"
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination,Autoplay]}
        loop={true}
        autoplay={{delay:2000,
          disableOnInteraction:false
        }}
        pagination={{
          clickable: true,
          type:"bullets",
          
        }}
       style={{paddingBottom:"50px"}}
        
      >
        {array.map((a, idx) => {
          if (idx % 2 == 0) {
            return (
              <SwiperSlide key={idx + 1}>
                <Box
                  component={"img"}
                  src={offer1}
                  sx={{ borderRadius: "2%", height: { xs: "80px", sm: "90px", md: "100px",lg:"200px" },width:"100%", objectFit:"cover", display:"block" }}
                />
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={idx + 1}>
                <Box
                  component={"img"}
                  src={offer2}
                  sx={{ borderRadius: "2%",  height: { xs: "80px", sm: "90px", md: "100px",lg:"200px" }, width: "100%",objectFit:"cover",display:"block" }}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
      </Container>
    </Box>
  );
};

export default Offers;
