import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header1 from "../src/Components/Header/Header1/Header1.jsx";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./Theme/Theme";
import Header2 from "../src/Components/Header/Header2/Header2.jsx";
import Header3 from "../src/Components/Header/Header3/Header3.jsx";
import "./index.css";
import ScrollUp from "../src/Components/ScrollFixedButton/ScrollUp";
import HeroSection from "../src/Pages/HeroSection/HeroSection.jsx";
import IconsSeaction from "../src/Pages/Icons/IconsSeaction.jsx";
import Cart from "../src/Pages/Cart/Cart.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";
function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme")
      ? localStorage.getItem("currentTheme")
      : "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // @ts-ignore

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header1 setMode={setMode} />
      <Header2 />
      <Header3 />
      <Box
        sx={{
          bgcolor:
            // @ts-ignore
            theme.palette.backGround.main,
        }}
      >
        <HeroSection />
        <IconsSeaction />
        <Cart />
        <Footer />
        <ScrollUp />
      </Box>
    </ThemeProvider>
  );
}

export default App;
