import {useState} from "react";
import amb from "../../assets/Menu/amb.png";
import doc from "../../assets/Menu/doc.png";
import med from "../../assets/Menu/med.png";
import lab from "../../assets/Menu/lab.png";
import hos from "../../assets/Menu/hos.png";
import { Box, Stack, Typography, Grid } from "@mui/material";

const Hospitalmenu = () => {
  const [active, setActive] = useState("Hospitals");
  const data = [
    { img: doc, title: "Doctors" },
    { img: lab, title: "Labs" },
    { img: hos, title: "Hospitals" },
    { img: med, title: "Medical Store" },
    { img: amb, title: "Ambulance" },
  ];
  function onClick(title){
    setActive(title)
  }
  return (
    <Stack mb={5} sx={{ backgroundColor: "white", padding: "50px",marginLeft:"5%",marginRight:"5%",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px" }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "20px", color: "#102851" }}
      >
        You may be looking for
      </Typography>
      <Grid container spacing={20} mt={3}>
        {data.map((a, i) => {
          return (
            <Grid size={{ sm: 6, md: 2 }} key={i+1}>
              <Stack name={a.title} onClick={()=>onClick(a.title)}
                sx={
                  a.title == active
                    ? {
                        backgroundColor: "#EEF8FF",
                        border: "2px solid #2AA7FF",
                        borderRadius: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        height: "150px",
                        width: "170px",
                      }
                    : {
                        backgroundColor: "#FAFBFE",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        height: "150px",
                        width: "180px",
                        borderRadius: "8px",
                      }
                }
              >
                <Box
                  component={"img"}
                  src={a.img}
                  sx={{ height: "50px", width: "70px" }}
                />
                <Typography>{a.title}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Hospitalmenu;
