import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Box,
  Button,
  Container,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useState } from "react";
import AttractionsIcon from "@mui/icons-material/Attractions";
import { Close, ExpandMore } from "@mui/icons-material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import CableIcon from "@mui/icons-material/Cable";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GamesIcon from "@mui/icons-material/Games";
import { Link } from "react-router-dom";
import TitleOfThe3NavBar from "./TitleOfThe3NavBar/TitleOfThe3NavBar";
const options = [
  { name: "Bikes", path: "/Bikes", icon: <BikeScooterIcon /> },
  { name: "Electronics", path: "Electronics", icon: <CableIcon /> },
  { name: "Books", path: "/Books", icon: <LibraryBooksIcon /> },
  { name: "Games", path: "/Games", icon: <GamesIcon /> },
];

const DrawerOptions = [
  { title: "Home", name: "Bikes", path: "Bikes", icon: <BikeScooterIcon /> },
  {
    title: "Cart",
    name: "Electronics",
    path: "Electronics",
    icon: <CableIcon />,
  },
  { title: "Shop", name: "Books", path: "Books", icon: <LibraryBooksIcon /> },
  { title: "Magazine", name: "Games", path: "Games", icon: <GamesIcon /> },
];

function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {/* The button of Catagories in the left side of the screen */}
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          // @ts-ignore
          sx={{
            width: 222,
            color: Theme.palette.text.secondary,
            // @ts-ignore
            bgcolor: Theme.palette.TabsAndSearchColor.main,
          }}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            {" "}
            <AttractionsIcon />{" "}
          </ListItemIcon>
          <Typography
            sx={{ textTransform: "capitalize", p: "0", mx: 1 }}
            variant="body1"
            color="inherit"
          >
            Dashboard
          </Typography>{" "}
          <Box sx={{ flexGrow: 1 }} />
          <ExpandMore />
        </Button>
        {/* The Catagories it self in the button of catagaories */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // @ts-ignore
          sx={{
            ".MuiPaper-root": {
              width: 225,
              // @ts-ignore
              bgcolor: Theme.palette.TabsAndSearchColor.main,
            },
          }}
        >
          {options.map((item) => (
            <MenuItem onClick={handleClose} key={item.name}>
              <ListItemIcon>
                {item.icon} {/* No need for additional braces inside JSX */}
              </ListItemIcon>
              <ListItemText>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.name}
                </Link>
              </ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* The Icon of the Drawer with Small Screens */}

      <Box>
        {useMediaQuery("(max-width:961px)") && (
          <IconButton aria-label="" onClick={toggleDrawer("right", true)}>
            <WidgetsIcon />
          </IconButton>
        )}

        {/* Drawer coming from the right side of the screen */}
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          sx={{ ".MuiPaper-root": { width: "100%" } }}
        >
          <Box
            sx={{
              width: 400,
              mx: "auto",
              mt: 6,
              position: "relative",
              height: "50%",
              pt: 10,
            }}
          >
            <IconButton
              sx={{ position: "absolute", right: 0, top: 5 }}
              aria-label=""
              onClick={toggleDrawer("right", false)}
            >
              <Close />
            </IconButton>

            {DrawerOptions.map((item) => (
              <Accordion
                key={item.name}
                elevation={3}
                sx={{ bgcolor: "initial", m: 1 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <>
                  <Box sx={{ width: "100%", maxWidth: 360 }}>
                    <nav aria-label="main mailbox folders">
                      <List sx={{ p: 0 }}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <GamesIcon />
                            </ListItemIcon>
                            <ListItemText>
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                                to={item.path}
                              >
                                {item.path}
                              </Link>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Box>
                </>
              </Accordion>
            ))}
          </Box>
        </Drawer>

        {/* The Drawer but with the bigger screen as a 4th NavBar */}
        {useMediaQuery("(min-width:960px)") && (
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <TitleOfThe3NavBar Title={"Home"} />
            <TitleOfThe3NavBar Title={"Mega Menu"} />
            <TitleOfThe3NavBar Title={"Pages"} />
            <TitleOfThe3NavBar Title={"User Account"} />
            <TitleOfThe3NavBar Title={"Vendor Accoount"} />
          </Stack>
        )}
      </Box>
    </Container>
  );
}

export default Header3;
