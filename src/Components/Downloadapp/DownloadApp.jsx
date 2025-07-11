import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import mobile from "../../assets/mobile.jpg";
import arrow from "../../assets/arrow.png";
import gg from "../../assets/google.png"
import app from "../../assets/apple.png"
const DownloadApp = () => {
  return (
    <Box sx={{ display: "flex",gap:"20%" }}>
      <Box mt={3} src={mobile} component={"img"} height={"90%"} width={"40%"} />
      <Stack position={"relative"} >
        <Box>
          <Box component={"img"} src={arrow} 
          sx={{
            position:"absolute",
            width: { xs: "80px", md: "60px" },
            height: "auto",
            top: { xs: "120px", md: "50px" },
            left: { xs: "50%", md: "-80px" },
             transform: {
                xs: "translateX(-50%) rotate(0deg)", 
                md: "rotate(0deg)" 
            },
            zIndex:"0"
          }}
          />
          <Typography
          mt={2}
            color="primary.secondary"
            sx={{ fontSize: "50px", fontWeight: "bold" }}
          >
            Download the <br />
            <span>
              <Typography
              
                color="primary.main"
                sx={{ display: "inline", fontWeight: "bold", fontSize: "50px" }}
                component={"p"}
              >
                Medify
              </Typography>
            </span>{" "}
            App
          </Typography>
          <Typography mt={2}variant="p" component={"p"} fontSize={"20px"}>Get the link to download the app</Typography>
          <form action="" style={{marginTop:"20px"}}>
            <TextField
              sx={{
                backgroundColor: "white",
              }}
              placeholder="Enter phone number"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              required
            />
            <Button type="submit" variant="contained" sx={{height:"50px",marginLeft:"20px"}}>Send Sms</Button>
          </form>
          <Box mt={2}>
            <Button
                
                  
                 
                  
                >
                  <Box component={"img"} src={gg} sx={{height:"100%",width:"100%"}}/>
                </Button>
                <Button
                 
                >
                  <Box src={app} component={"img"} sx={{height:"100%", width:"100%"}} />
                </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default DownloadApp;
