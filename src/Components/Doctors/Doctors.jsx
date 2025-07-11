import React from "react";
import { Box,Stack,Typography } from "@mui/material";
import { Pagination,Autoplay, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import ahmed from "../../assets/Doc/Ahamed.png";
import ankur from "../../assets/Doc/Ankur.png";
import heena from "../../assets/Doc/Heena.png";
import leasy from "../../assets/Doc/Leasy.png/";
import steven from "../../assets/Doc/Stevens.png";
import DocCard from "./DocCard";
const Doctors = () => {
  const data = [
    { img: leasy, name: "Dr. Lesley Hull", spec: "Medicine" },
    { img: ahmed, name: "Dr. Ahmad Khan", spec: "Neurologist" },
    { img: heena, name: "Dr. Heena Sachdeva", spec: "Orthopadics" },
    { img: ankur, name: "Dr. Ankur Sharma", spec: "Medicine" },
    { img: steven, name: "Dr. Ahmad Stevens", spec: "Cardiologist" },
     { img: leasy, name: "Dr. Lesley Hull", spec: "Medicine" },
    { img: ahmed, name: "Dr. Ahmad Khan", spec: "Neurologist" },
    { img: heena, name: "Dr. Heena Sachdeva", spec: "Orthopadics" },
    { img: ankur, name: "Dr. Ankur Sharma", spec: "Medicine" },
    { img: steven, name: "Dr. Ahmad Stevens", spec: "Cardiologist" },
  ];
  return <Box mt={2} pt={2} sx={{width:"100%",backgroundColor:"white",}}><Swiper
         className="offers-carousel-container"
          slidesPerView={5}
          spaceBetween={50}
          modules={[Pagination,Autoplay]}
          loop={true}
          autoplay={{delay:2000,
            disableOnInteraction:false
          }}
          pagination={{
            clickable: true,
            
            
          }}
         style={{paddingBottom:"50px"}}
          
        >
            {data.map((a,i)=>{
                return <SwiperSlide key={i+1}>
                    <DocCard img={a.img} name={a.name} spec={a.spec} />
                </SwiperSlide>
            })}
        </Swiper></Box>;
};

export default Doctors;
