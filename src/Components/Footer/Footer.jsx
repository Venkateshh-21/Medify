import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import logo from "../../../public/Group 7.png";
import fb from "../../assets/Footer/facebook.png";
import tw from "../../assets/Footer/twitter.png";
import yt from "../../assets/Footer/youtube.png";
import pt from "../../assets/Footer/pintrest.png";
import arrow from "../../assets/Footer/arrow.png";
import Grid from "@mui/material/Grid";

const Footer = () => {
  const data = [
    `About Us`,
    "Orthology",
    "About Us",
    "Our Pricing",
    "Neurology",
    "Our Pricing",
    "Our Gallery",
    "Dental Care",
    "Our Gallery",
    "Appointment",
    "Opthalmology",
    "Appointment",
    "Privacy Policy",
    "Cardiology",
    "Privacy Policy",
  ];
  console.log(data.length);
  return (
    <Box sx={{backgroundColor:"primary.secondary"}}>
    <Box sx={{ backgroundColor: "primary.secondary",display:"flex",justifyContent:"center" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40%",
          width:"40%"
        }}
      >
        <Box
          component={"img"}
          src={logo}
          sx={{ height: "30px", width: "80px" }}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            component={"img"}
            src={fb}
            sx={{ height: "30px", width: "30px" }}
          />
          <Box
            component={"img"}
            src={tw}
            sx={{ height: "30px", width: "30px" }}
          />
          <Box
            component={"img"}
            src={yt}
            sx={{ height: "30px", width: "30px" }}
          />
          <Box
            component={"img"}
            src={pt}
            sx={{ height: "30px", width: "30px" }}
          />
        </Box>
       
      </Stack>
      <Box mt={4}  sx={{width:"30%"}} >
        <Grid
          container
          spacing={{ xs: 2, md: 3,lg:3}}
          columns={3}
          justifyContent="flex-start"
        >
          {data.map((a,i) => {
            return <Grid item  xs={3} sm={3} md={3} lg={3} key={i+1} gap={"10px"}>
              <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center",gap:"5px"}}>
                <Box component={"img"} src={arrow} height={1} />
                <Typography sx={{color:"white"}} >{a}</Typography>
              </Box>
            </Grid>
          })}
        </Grid>
      </Box>
    </Box>
     <Typography ml={5}pl={5} mt={2}sx={{textAlign:"left",color:"white"}}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
    </Box>
  );
};

export default Footer;
