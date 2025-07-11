import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Herosection/hero";
import Searchoptions from "./Components/Searchoptions/Searchoptions";
import Offers from "./Components/Offers/Offers";
import Specialisation from "./Components/Findspecialisation/specialisation";
import Doctors from "./Components/Doctors/Doctors";
import Patientcare from "./Components/PatientCare/Patientcare";
import Blogs from "./Components/Blogs/Blogs";
import Families from "./Components/Families/Families";
import FAQs from "./Components/FAQ/FAQs"
import DownloadApp from "./Components/Downloadapp/DownloadApp";
import Footer  from "./Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
     
      <Offers />
      <Specialisation />
       <Doctors />
       <Patientcare />
       <Blogs />
       <Families />
       <FAQs />
       <DownloadApp />
       <Footer />
    </div>
  );
};

export default Home;
