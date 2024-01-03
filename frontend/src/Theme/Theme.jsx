
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          TabsAndSearchColor: {
            main: "#f6f9fc"
          },
          backGround: {
            main: "#f6f6f6"
          }
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          TabsAndSearchColor: {
            main: "#252b32"
          },
          backGround: {
            main: "#1D2021"
          }
        }),
  },
});
