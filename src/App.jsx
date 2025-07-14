 
import { Outlet } from "react-router-dom";


import { CssBaseline } from "@mui/material";
import DownloadApp from "./Components/Downloadapp/DownloadApp"
import Footer  from "./Components/Footer/Footer";

function App() {
  

  return (
    <>
       <CssBaseline />
       <Outlet />
       <DownloadApp />
       <Footer />

    </>
  )
}

export default App
