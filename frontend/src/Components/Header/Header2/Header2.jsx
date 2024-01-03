import {
  Badge,

  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useEffect, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 1,
  position: "relative",
  margin: "12px",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #555",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minwidth: "100px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header2() {
  const Theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["All Categories", "Car", "Clothes", "Electronic Devices"];

  // Load the selected index from localStorage on component mount
  useEffect(() => {
    const storedIndex = localStorage.getItem("selectedTabIndex");
    if (storedIndex !== null) {
      setSelectedIndex(parseInt(storedIndex, 10)); // Convert the stored value to a number
    }
  }, []);

  // Save the selected index to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedTabIndex", selectedIndex.toString()); // Convert the value to a string
  }, [selectedIndex]);

  return (
    <Container sx={{ py: 3 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <ShoppingCartIcon />
          <Typography variant="body1" color="inherit">
            {" "}
            Khaled's E-Commerce
          </Typography>
        </Stack>

        {/* Search */}
        <Search
          sx={{
            borderRadius: "22px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              // @ts-ignore
              sx={{
                // @ts-ignore
                bgcolor: Theme.palette.TabsAndSearchColor.main,
                borderRadius: "22px",
                width: "auto",
                padding: 0,
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ cursor: "pointer", width: 165, textAlign: "center" }}
              >
                <ListItemText secondary={options[selectedIndex]} />
                <ExpandMore sx={{ fontSize: "14px" }} />
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
                  sx={{ fontSize: "13px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
        <Stack
          direction={"row"}
          sx={{ alignItems: "center", width: { xs: "100%", md: 0 } }}
        >
          <Stack
            sx={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton aria-label="cart" sx={{ color: "inherit" }}>
              <StyledBadge badgeContent={4} color="primary">
                <Link style={{ color: "inherit" }} to={"/Cart"}>
                  {" "}
                  <ShoppingBagIcon />
                </Link>
              </StyledBadge>
            </IconButton>

            <IconButton sx={{ ml: 1, color: "inherit" }}>
              <PersonIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Header2;
