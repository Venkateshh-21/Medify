import { Box, Stack, Typography, InputAdornment, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import srch from "../../assets/Search.png";
import bs from "../../assets/bsearch.png";

const Searchoptions = () => {
  const navigate = useNavigate();
  const [fData, setFData] = useState({
    state: "",
    city: "",
  });
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        let data = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchStates();
  }, []);

  const onChange = (e) => {
    setFData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${fData.state}`
        );
        setCities(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCities();
  }, [fData.state]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (fData.city) {
     return navigate(`/search?state=${fData.state}&city=${fData.city}`);
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={onSubmit}
        style={{
         marginLeft:"5%",
         marginRight:"5%",
          display: "flex",
          justifyContent: "center",
          gap: "10%",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "7px",
        }}
      >
        <Select
          required
          displayEmpty
          id="state"
          name="state"
          value={fData.state}
          sx={{ width: "20%", gap: "30px" }}
          startAdornment={
            <InputAdornment>
              <Box component={"img"} src={srch} />
            </InputAdornment>
          }
          onChange={onChange}
          IconComponent={() => null}
        >
          <MenuItem disabled value="" selected>
            State
          </MenuItem>
          {states.map((a, i) => {
            return (
              <MenuItem key={i + 1} value={a}>
                {a}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          required
          displayEmpty
          id="city"
          name="city"
          value={fData.city}
          sx={{ width: "20%", gap: "30px" }}
          startAdornment={
            <InputAdornment>
              <Box component={"img"} src={srch} />
            </InputAdornment>
          }
          IconComponent={() => null}
          onChange={onChange}
        >
          <MenuItem disabled value="" selected sx={{ color: "gray" }}>
            City
          </MenuItem>
          {cities.map((a, i) => {
            return (
              <MenuItem key={i + 1} value={a}>
                {a}
              </MenuItem>
            );
          })}
        </Select>
        <Button
        id="searchBtn"
          type="submit"
          variant="contained"
          sx={{
            gap: "5px",
            width: "10%",
            height: "50px",
            textTransform: "none",
          }}
        >
          <Box component={"img"} src={bs} height={"20px"} width={"20px"} />
          Search
        </Button>
      </form>
    </div>
  );
};

export default Searchoptions;
