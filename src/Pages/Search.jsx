import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import { Box, Stack, Container, Typography } from "@mui/material";
import Searchoptions from "../Components/Searchoptions/Searchoptions";
import { useSearchParams } from "react-router-dom";
import verify from "../assets/verified.png";
import HospitalCard from "../Components/HosiptalCard/HospitalCard";
import BookingModal from "../Components/BookingModal/BookingModal";
import img from "../assets/senso.png";
import CustomSnack from "../Components/Snackbar/Snackbar";

function capFirst(a) {
   if (typeof a !== 'string' || a.length === 0) {
    return ""; // Return empty string if not a string or empty
  }
  let res = "";
  for (let i = 0; i < a.length; i++) {
    if (i == 0) {
      res += a[i].toUpperCase();
    } else {
      res += a[i].toLowerCase();
    }
  }
  return res;
}

const Search = () => {
  let [queryParam] = useSearchParams();
  let [state, setState] = useState(queryParam.get("state"));
  let [city, setCity] = useState(queryParam.get("city"));
  const [hospitals, setHospitals] = useState([]);
  const [load, setLoad] = useState(false);
  const slots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [bookings, setBookings] = useState({});
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  console.log(bookings);

  useEffect(() => {
    const updateData = () => {
      setState(queryParam.get("state"));
      setCity(queryParam.get("city"));
    };
    updateData();
  }, [queryParam]);
  useEffect(() => {
    const fetchHospitals = async () => {
      setHospitals([]);
      setLoad(true);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(response.data);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        console.log(error.message);
      }
    };
    fetchHospitals();
  }, [state, city]);

  const handleBookingModal = (data) => {
    setBookings(data);
    setIsmodalOpen(true);
  };
  return (
    <div style={{ backgroundColor: "#EAF2FF" }}>
      <Navbar />
      <Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "100px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "100px",
          }}
        >
          <Box
            sx={{
              transform: "translatey(60px)",
            }}
          >
            <Searchoptions />
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} p={4}>
        <Container
          maxWidth="xl"
          sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 }, ml: 5 }}
        >
          {hospitals.length ? (
            <Box>
              <Box>
                <Typography
                  component={"h1"}
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                  {`${hospitals.length} medical centers available `}
                  <span >{city.toLocaleLowerCase()}</span>
                </Typography>
              </Box>
              <Box
                mt={2}
                sx={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <Box component={"img"} src={verify} sx={{ height: "15px" }} />
                <Typography sx={{ whiteSpace: "no-wrap", color: "#787887" }}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Box>
            </Box>
          ) : (
            ""
          )}
          <Stack>
            {hospitals.length
              ? hospitals.map((a) => {
                  return (
                    <HospitalCard
                      key={a["Provider ID"]}
                      details={a}
                      slots={slots}
                      handleBooking={handleBookingModal}
                      fromBookings={false}
                    />
                  );
                })
              : ""}
            {load ? <Typography>Loading ...</Typography> : ""}
            {!state ? (
              <Typography
                variant="h3"
                bgcolor="#EAF2FF"
                p={3}
                borderRadius={2}
                sx={{ fontSize: "20px" }}
              >
                Please select a state and city
              </Typography>
            ) : (
              ""
            )}
          </Stack>
        </Container>
        <Box
          mt={"130px"}
          component={"img"}
          src={img}
          width={500}
          height={"300px"}
        />
      </Box>
      <BookingModal
        isModalOpen={isModalOpen}
        setIsmodalOpen={setIsmodalOpen}
        setOpenSnack={setOpenSnack}
        bookings={bookings}
      />
      <CustomSnack openSnack={openSnack} setOpenSnack={setOpenSnack} />
    </div>
  );
};

export default Search;
