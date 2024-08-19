import {
  Badge,
  CircularProgress,
  Container,
  IconButton,
  InputBase,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Logout, SavedSearch } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../Redux/userSlice";

const Search = styled("div")(({ theme }) => ({
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
      width: "90ch",
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
  const [Isloading, setIsloading] = useState(false);
  const [SearchBox, setSearchBox] = useState(true);
  const [SearchValue, setSearchValue] = useState("");
  const [FetchedSearchData, setFetchedSearchData] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme().palette.mode;

  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (SearchValue.length >= 3) {
      setSearchBox(true);
      setIsloading(true);

      const res = async () => {
        const res = await fetch(
          `http://localhost:5000/api/search/toolbar?q=${SearchValue}`
        );
        const data = await res.json();

        setFetchedSearchData(data.SearchData);
        setIsloading(false);
      };

      res();
    } else {
      setSearchBox(false);
    }
  }, [SearchValue]);

  console.log(FetchedSearchData);

  return (
    <Container sx={{ py: 3 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div className="logo">
          <Link className="flex flex-col justify-center items-center" to={"/"}>
            <ShoppingCartIcon />
            Khaled's E-Commerce
          </Link>
        </div>

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
            value={SearchValue}
            onChange={(eo) => {
              setSearchValue(eo.target.value);
            }}
          />
          <div
            className={`${SearchBox ? "block" : "hidden"} absolute top-10 ${
              theme === "light"
                ? "bg-white border-4 border-orange-600"
                : "bg-gradient-to-tr from-gray-900 to-gray-800 border-4 border-gray-600"
            } rounded-2xl w-full h-72  z-50 transition-all duration-300 ease-in-out overflow-y-scroll`}
          >
            {Isloading ? (
              <div className="w-full h-full flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="w-full h-full ">
                <div className="w-full h-10 p-3">
                  <h1>Related Products</h1>
                </div>

                {FetchedSearchData.length > 0 ? (
                  <ul className="w-full flex flex-col gap-3">
                    {FetchedSearchData.map((product) => (
                      <li key={product.id}>
                        <Link
                          to={`/RelatedSearch?q=${SearchValue}`}
                          target="_blank"
                          className={`w-full flex items-center gap-5 p-4 ${
                            theme === "light"
                              ? "bg-gray-100 hover:bg-gray-200 text-black"
                              : "bg-gray-700 hover:bg-gray-600 text-white"
                          }  transition-all duration-200`}
                        >
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <p className="text-[10px] md:text-xs font-bold">
                            {product.name}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="w-full h-full flex justify-center items-center">
                    <p>No Products Found!</p>
                  </div>
                )}
              </div>
            )}
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
            {user.currentUser !== null ? (
              <IconButton aria-label="cart" sx={{ color: "inherit" }}>
                <StyledBadge
                  badgeContent={user.cartItems.length}
                  color="primary"
                >
                  <Link
                    style={{ marginRight: 2, color: "inherit" }}
                    to={"/cart"}
                  >
                    {" "}
                    <ShoppingBagIcon />
                  </Link>
                </StyledBadge>
              </IconButton>
            ) : null}

            <IconButton sx={{ color: "inherit" }}>
              <Link to={"/search"}>
                <SavedSearch />
              </Link>
            </IconButton>

            {user.currentUser !== null ? (
              <Link to={"/Profile"}>
                <IconButton sx={{ color: "inherit" }}>
                  <PersonIcon />
                </IconButton>
              </Link>
            ) : (
              <Link to={"/login"}>
                <IconButton sx={{ color: "inherit" }}>
                  <PersonIcon />
                </IconButton>
              </Link>
            )}

            {user.currentUser !== null ? (
              <div
                onClick={() => {
                  dispatch(signOut());
                  navigate("/login");
                }}
              >
                <IconButton sx={{ color: "inherit" }}>
                  <Logout />
                </IconButton>
              </div>
            ) : null}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Header2;
