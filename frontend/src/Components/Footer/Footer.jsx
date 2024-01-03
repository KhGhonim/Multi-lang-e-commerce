import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        bgcolor: "#283445",
        textAlign: "center",
        p: 1,
      }}
    >
      <Typography fontSize={"16px"} color="white">
        This E-commerce Web App desgined by
        <a
          style={{
            textDecoration: "none",
            textTransform: "capitalize",
            color: theme.palette.warning.main,
            margin: "3px",
            fontWeight: "bold",
          }}
          href="https://khaled-ghonim-trans-portfolio.web.app/"
        >
          Khaled Ghonim
        </a>
        @2023
      </Typography>
    </Box>
  );
}

export default Footer;
