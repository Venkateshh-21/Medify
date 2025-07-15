import React, { useState, useEffect, useMemo } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import HospitalCard from "../Components/HosiptalCard/HospitalCard";
import img from "../assets/bsearch.png";
import senso from "../assets/senso.png"

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const retrive = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(retrive));
  }, []);
  useEffect(() => {
    setFiltered(bookings);
  }, [bookings]);

  const filteredList = useMemo(() => {
    if (!inputText.trim()) return bookings;
    return bookings.filter(
      (item) =>
        item["Hospital Name"] &&
        typeof item["Hospital Name"] === "string" &&
        item["Hospital Name"].toLowerCase().includes(inputText.toLowerCase())
    );
  }, [inputText, bookings]);
  const onClick = () => {
    setFiltered(filteredList);
  };
  return (
    <Box>
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
          <Typography
            variant="h1"
            component={"h1"}
            sx={{
              transform: "translateY(40px) translateX(30px)",
              fontSize: "30px",
              fontWeight: "800",
              color: "white",
            }}
          >
            My Bookings
          </Typography>
          <Box
            sx={{
              transform: "translatey(20px) translatex(20%)",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                height: "100px",
                width: "60%",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <TextField
                placeholder="search by Hospital"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                onClick={onClick}
              >
                <Box component={"img"} src={img} sx={{ height: "20px" }} />
                <Typography>Search</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{display:"flex",gap:"60px",justifyContent:"center",flex:"wrap"}}>
      <Stack sx={{alignItems:"center"}}>
        {filtered.length ? (
          filtered.map((a,i) => {
            return <HospitalCard key={i+1} details={a} fromBookings={true} />;
          })
        ) : (
          <Typography>No bookings</Typography>
        )}
      </Stack>
      <Box component={"img"} src={senso} width={"400px"} height={"300px"} mt={4} />
      </Box>
    </Box>
  );
};

export default MyBookings;
