import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import families from "../../assets/Families.png";

const Families = () => {
  return (
    <Box sx={{display:"flex"}}>
      <Stack  direction={"column"} sx={{padding:"20px",justifyContent:"center",alignItems:"center",gap:"20px"}}>
        <Typography color="primary.main" sx={{fontWeight:"bold",fontSize:"20px"}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
        <Typography color="primary.secondary" sx={{fontSize:"30px",fontWeight:"bold"}}>Our Families</Typography>
        <Typography variant="p" color="#77829D" sx={{fontSize:"20px",lineHeight:"2"}}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </Typography>
      </Stack>
      <Box component={"img"} src={families} />
    </Box>
  );
};

export default Families;
