import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function SMIcons() {
  return (
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
  );
}
