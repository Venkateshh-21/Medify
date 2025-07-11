import React from "react";
import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import dentistry from "../../assets/Speaclisation/Group.png";
import primaryCare from "../../assets/Speaclisation/c.png";
import cardiology from "../../assets/Speaclisation/Heart Rate.png";
import mri from "../../assets/Speaclisation/Group (1).png";
import blood from "../../assets/Speaclisation/Blood Sample.png";
import piscologist from "../../assets/Speaclisation/c.png";
import pharma from "../../assets/Speaclisation/Drugstore.png";
import xRay from "../../assets/Speaclisation/X-Ray.png";

const Specialisation = () => {
  const data = [
    {
      name: "Dentistry",
      img: dentistry,
    },
    {
      name: "Primary Care",
      img: primaryCare,
    },
    {
      name: "Cardiology",
      img: cardiology,
    },
    {
      name: "MRI Resonance",
      img: mri,
    },
    {
      name: "Blood Test",
      img: blood,
    },
    {
      name: "Piscologist",
      img: piscologist,
    },
    {
      name: "Laboratory",
      img: pharma,
    },
    {
      name: "X-Ray",
      img: xRay,
    },
  ];
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Typography  component="h3" color="primary.secondary" mt={2} sx={{fontSize:"40px",fontWeight:"bold"}}>
        Find By Specialisation
      </Typography>
      <Grid container spacing={3} pl={5} mt={2} pb={1}>
        {data.map((a, i) => {
          return (
            <Grid
              key={i + 1}
              item
              size={{ xs: 12, md: 4, lg: 3 }}
              sx={{
                backgroundColor: "white",
                height: "200px",
                width: "100px",
                borderRadius: "10%",
              }}
            >
              <Box
                spacing={5}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <img
                  src={a.img}
                  alt=""
                  style={{ height: "70px", width: "70px" }}
                />
                <Typography
                  variant="p"
                  color="gray"
                  sx={{ fontSize: "20px", fontFamily: "" }}
                >
                  {a.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        
        sx={{
            marginTop:"10px",
          width: "10%",
          height: "40px",
          textTransform: "none",
          whiteSpace: "nowrap",
          fontSize: "15px",
          fontFamily: "poppins,sans-serif",
        }}
      >
        View All
      </Button>
    </Stack>
  );
};

export default Specialisation;
