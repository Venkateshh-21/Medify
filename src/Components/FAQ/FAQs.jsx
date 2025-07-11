import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import img from "../../assets/FAQ/FAQimg.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import plus from "../../assets/FAQ/Acc.png";

const RotateIcon = ({ expanded }) => {
  return (
    <Box
      component={"img"}
      src={plus}
      sx={{
        height: "20px",
        width: "20px",

        transition: "transform 0.5s ",
        transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
      }}
    />
  );
};

const FAQs = () => {
  const [trackExpPannel, setTrackEspPannel] = useState(false);
  const handleAccordains = (pannel) => (e, isExpanded) =>
    [setTrackEspPannel(isExpanded ? pannel : false)];
  return (
    <Stack sx={{ backgroundColor: "white" }}>
      <Typography
        mt={2}
        color="primary.main"
        sx={{ fontSize: "15px", fontWeight: "bold", textAlign: "center" }}
      >
        Get Your Answer
      </Typography>
      <Typography
        mt={2}
        color="primary.secondary"
        sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box component={"img"} src={img} sx={{ width: "50%" }} />
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5%",
          }}
        >
          <Accordion
            expanded={trackExpPannel == "pannel1"}
            onChange={handleAccordains("pannel1")}
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                <RotateIcon expanded={trackExpPannel === "pannel1"} />
              }
            >
              <Typography
                color="primary.secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  flexGrow: "1",
                }}
              >
                Why we are different from others?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati modi amet, doloremque nesciunt iure quae rerum magni
                officia aliquid natus voluptate aspernatur sequi autem!
                Laboriosam, sint beatae! Unde, explicabo facere?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={trackExpPannel == "pannel2"}
            onChange={handleAccordains("pannel2")}
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                <RotateIcon expanded={trackExpPannel === "pannel2"} />
              }
            >
              <Typography
                color="primary.secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  flexGrow: "1",
                }}
              >
                Why choose our medical for your family?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati modi amet, doloremque nesciunt iure quae rerum magni
                officia aliquid natus voluptate aspernatur sequi autem!
                Laboriosam, sint beatae! Unde, explicabo facere?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={trackExpPannel == "pannel3"}
            onChange={handleAccordains("pannel3")}
            sx={{
              boxShadow: "none",
      
            }}
          >
            <AccordionSummary
              expandIcon={
                <RotateIcon expanded={trackExpPannel === "pannel3"} />
              }
            >
              <Typography
                color="primary.secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  flexGrow: "1",
                }}
              >
                Trusted & experience senior care & love
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati modi amet, doloremque nesciunt iure quae rerum magni
                officia aliquid natus voluptate aspernatur sequi autem!
                Laboriosam, sint beatae! Unde, explicabo facere?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={trackExpPannel == "pannel4"}
            onChange={handleAccordains("pannel4")}
            sx={{
              boxShadow: "none",
              border:"none"
            }}
          >
            <AccordionSummary
              expandIcon={
                <RotateIcon expanded={trackExpPannel === "pannel4"} />
              }
            >
              <Typography
                color="primary.secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  flexGrow: "1",
                }}
              >
                How to get appointment for emergency cases?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati modi amet, doloremque nesciunt iure quae rerum magni
                officia aliquid natus voluptate aspernatur sequi autem!
                Laboriosam, sint beatae! Unde, explicabo facere?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Stack>
  );
};

export default FAQs;
