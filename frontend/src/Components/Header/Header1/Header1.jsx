import { Box, IconButton, Stack, useTheme, Typography } from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const options = ["English", "Arabic", "Türkçe"];

const Header1 = ({ setMode }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    const index = options.indexOf(savedLang);
    setSelectedIndex(index !== -1 ? index : 0);
    i18n.changeLanguage(savedLang);
  }, []);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    const selectedLang = options[index];
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        bgcolor: "#283445",
        p: "0.3rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
      }}
    >
      {/* The Logo and LogoName */}
      <Box>
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginLeft: "16px",
          }}
          to={"/"}
        >
          <Typography
            sx={{
              bgcolor: "red",
              p: "4px 10px",
              borderRadius: "14px",
              fontWeight: "bolder",
            }}
            variant="body2"
            color={"#fff"}
            onClick={() => {}}
          >
            {t("Hot")}
          </Typography>
          <p className="text-white font-bold text-xs md:text-base">
            {" "}
            {t("Free Express Shipping")}
          </p>
        </Link>
      </Box>

      {/* The Dark and Light mode */}
      <Stack direction={"row"} sx={{ alignItems: "center", mr: "16px" }}>
        {theme.palette.mode === "light" ? (
          // light mode
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentTheme",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            }}
            color="warning"
            sx={{ mr: "5px" }}
          >
            <LightModeOutlined />
          </IconButton>
        ) : (
          <IconButton
            // Dark mode

            onClick={() => {
              localStorage.setItem(
                "currentTheme",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            }}
            color="inherit"
            sx={{ mr: "5px" }}
          >
            <DarkModeOutlined />
          </IconButton>
        )}
        {/* Header 1 Social Medya Icons and MultiLanguge button */}
        <List component="nav" aria-label="Device settings" sx={{ p: 0, m: 0 }}>
          <ListItem
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{ "&:hover": { cursor: "pointer" }, p: 0, m: 0 }}
          >
            <ListItemText
              secondary={options[selectedIndex]}
              sx={{
                mt: 0,
                mb: 0,
                ".MuiTypography-root": {
                  borderRadius: "15px",
                  color: "white",
                },
              }}
            />
            <ExpandMore sx={{ fontSize: "15px", color: "#fff" }} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {t(option)}
            </MenuItem>
          ))}
        </Menu>

        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            ml: "1rem",
            gap: "10px",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          <Link style={{ color: "inherit" }} to={""}>
            <FacebookRoundedIcon />
          </Link>
          <Link style={{ color: "inherit" }} to={""}>
            <InstagramIcon />
          </Link>
          <Link style={{ color: "inherit" }} to={""}>
            <TwitterIcon />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header1;
