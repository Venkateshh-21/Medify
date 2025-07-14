import { StrictMode } from 'react'
import { createTheme, ThemeProvider } from "@mui/material";
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Landing from "./Pages/Landing.jsx"
import Search from './Pages/Search.jsx';
import MyBookings from './Pages/MyBookings.jsx';
import "./index.css"

const router= createBrowserRouter([{
  path:"/",
  element:<App />,
  children:[{
    path:"/",
    element:<Landing />
  },{
    
    path:"search",
    element:<Search />
  },
{
  path:"my-bookings",
  element:<MyBookings />
}]
}])
const theme=createTheme({
  palette:{primary:{
    main:"#2472f2",
    secondary:"#143161"
  }},
    typography: {
    fontFamily: "Poppins , sans-serif",
  },
  components:{
    MuiTypography:{
     h4:{
      fontSize:"10px"
     }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#EAF2FF', 
        }
      }
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 992,
      xl: 1536,
    },
  }
}
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
