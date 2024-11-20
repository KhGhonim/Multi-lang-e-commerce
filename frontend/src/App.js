import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header1 from "../src/Components/Header/Header1/Header1.jsx";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./Theme/Theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from "../src/Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import ConsistOfDB from "../src/Components/ConsistOfDB/ConsistOfDB.jsx";
function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme")
      ? localStorage.getItem("currentTheme")
      : "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ConsistOfDB/>
      <CssBaseline />
      <Header1 setMode={setMode} />
      <Outlet />
      <ToastContainer />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
