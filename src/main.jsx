import { StrictMode } from 'react'
import { createTheme, ThemeProvider } from "@mui/material";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import "./index.css"

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
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
