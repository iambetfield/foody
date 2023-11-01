import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./theme/DarkTheme";
import { Route, Routes } from "react-router-dom";
import Home from "./customer/pages/Homepage/Home";
import Restaurant from "./customer/pages/Restaurant/Restaurant";
import Navbar from "./customer/components/Navbar/Navbar";
import Routers from "./routers/Routers";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    
    </ThemeProvider>
  );
}

export default App;
