import React from "react";
import { Stack, Typography, Button } from "@mui/material";

import img from "../../assets/hero.png";

const Hero = () => {
  return (
    <div style={{ display: "flex" }}>
      <Stack mt={2}ml={3} mr={3} pt={2} spacing={2} direction={"column"}>
        <Typography variant="h3" sx={{ fontSize: "40px" }} component="h2">
          Skip the travel! Find Online
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "60px", fontWeight: "bold", mr: "2px" }}
        >
          Medical
          <span>
            <Typography
              variant="h1"
              sx={{
                fontSize: "60px",
                display: "inline",
                fontWeight: "bold",
                color: "#2aa7ff",
                pl: "10px",
              }}
            >
              Centers
            </Typography>
          </span>
        </Typography>
        <Typography component={"h4"} sx={{ fontSize: "30px", color: "gray" }}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "25%", height: "10%", whiteSpace: "nowrap",fontSize:"20px" }}
        >
          Find Centers
        </Button>
      </Stack>
      <img src={img} alt="" style={{ height: "100%", width: "50%" }} />
    </div>
  );
};

export default Hero;
