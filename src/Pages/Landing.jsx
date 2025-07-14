import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Herosection/Hero";
import Searchoptions from "../Components/Searchoptions/Searchoptions";
import Offers from "../Components/Offers/Offers";
import Specialisation from "../Components/Findspecialisation/specialisation";
import Doctors from "../Components/Doctors/Doctors";
import Patientcare from "../Components/PatientCare/Patientcare";
import Blogs from "../Components/Blogs/Blogs";
import Families from "../Components/Families/Families";
import FAQs from "../Components/FAQ/FAQs";
import Hospitalmenu from "../Components/HospitalMenu/Hospitalmenu";
import { Stack} from "@mui/material";

const Home = () => {
  return (
    <div>
      <Navbar />
     <Stack position={"relative"}> <Hero /> </Stack>
      
            <Searchoptions />
            <Hospitalmenu />
         
      <Offers />
      <Specialisation />
      <Doctors />
      <Patientcare />
      <Blogs />
      <Families />
      <FAQs />
    </div>
  );
};

export default Home;
