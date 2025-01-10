import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./Theme/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../src/Components/Footer/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import ConsistOfDB from "../src/Components/ConsistOfDB/ConsistOfDB.jsx";
import DesktopHeader from "Components/Header/Desktop/DesktopHeader";
import PhoneHeader from "Components/Header/Phone/PhoneHeader";
function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme")
      ? localStorage.getItem("currentTheme")
      : "light"
  );

  const pathname = useLocation().pathname;
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <ConsistOfDB />
      <CssBaseline />
      {pathname === "/login" || pathname === "/register" || pathname.includes("admin") ? null : (
        <DesktopHeader
          setMode={setMode}
        />
      )}
      {pathname === "/login" || pathname === "/register" || pathname.includes("admin") ? null : (
        <PhoneHeader
          setMode={setMode}
        />
      )}

      <Outlet />
      <ToastContainer />

      {pathname.includes("admin") ? null : (
        <Footer />
      )}
    </ThemeProvider>
  );
}

export default App;
