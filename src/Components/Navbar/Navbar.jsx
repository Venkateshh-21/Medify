import React from "react";
import { Typography, Button } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbarwrap">
      <div className="bluebar">
        <Typography
          variant="caption"
          align="inherit"
          className="captionn"
          sx={{ fontSize: "15px" }}
        >
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </div>
      <div className="navbar">
        <Link to={"/"}><div className="logowrap">
          <img src={img} alt="Logo" className="logo" />
        </div></Link>
        <div className="nav-content">
          <Typography component="h4" sx={{ fontSize: "20px" }}>
            Find Doctors
          </Typography>
          <Link
            to="/search"
            style={{ textDecoration: "none", color: "rgb(16, 40, 81)" }}
          >
            {" "}
            <Typography component="h4" sx={{ fontSize: "20px" }}>
              Hospitals
            </Typography>{" "}
          </Link>
          <Typography component="h4" sx={{ fontSize: "20px" }}>
            Medicines
          </Typography>
          <Typography component="h4" sx={{ fontSize: "20px" }}>
            Surgeries
          </Typography>
          <Typography component="h4" sx={{ fontSize: "20px" }}>
            Software for Provider
          </Typography>
          <Typography component="h4" sx={{ fontSize: "20px" }}>
            Facilities
          </Typography>
          <Link to="/my-bookings">
            <Button
              variant="contained"
              sx={{ height: "40px",width:"120px" }}
              disableElevation
            >
              <Typography sx={{ fontSize: "15px" ,whiteSpace:"nowrap"}}>My Bookings</Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
