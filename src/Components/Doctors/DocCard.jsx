import React from "react";
import { Box, Typography } from "@mui/material";

const DocCard = ({ img, name, spec }) => {
  return (
    <Box textAlign="center">
      <Box
        sx={{
          padding: "20px",
          paddingBottom: "0px",
          height: "300px",
          width: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          background: "#6fc2de",
          background:"linear-gradient(90deg, rgba(111, 194, 222, 1) 0%, rgba(93, 236, 255, 1) 35%, rgba(61, 190, 255, 1) 59%)",
          boxShadow: "0 15px 55px -10px rgba(0, 0, 0, 0.09)",
          borderRadius: "250px 240px 4px 4px",
        }}
      >
        <Box
          component="img"
          src={img}
          width={1}
          sx={{ height: "90%", width: "95%" }}
        />
      </Box>
      <Typography
        pl={2}
        mt={1}
        sx={{ fontSize: "20px", textAlign: "center", whiteSpace: "nowrap" }}
        color="#1B3C74"
      >
        {name}
      </Typography>
      <Typography
        pl={2}
        mt={1}
        sx={{
          fontSize: "15px",
        }}
        color="primary.main"
      >
        {spec}
      </Typography>
    </Box>
  );
};

export default DocCard;
