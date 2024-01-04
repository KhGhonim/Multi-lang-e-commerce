import {
  Container,
  Stack,
  Typography,
  useTheme,
  ToggleButtonGroup,
  ToggleButton,
  CardActionArea,
  CardActions,
  Button,
  Rating,
  Dialog,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import { useGetlodaByNameQuery } from "../../Redux/product";
import Lottie from "lottie-react";
import loading from "../../Components/loading/loading.json";
import ProductDetails from "./ProductDetails";
const AllProducts = "shops?populate=*";
const MenProduct = "shops?populate=*&filters[catagory][$eq]=men";
const WomenProduct = "shops?populate=*&filters[catagory][$eq]=women";


function Cart() {
  const theme = useTheme();
  const [Products, setProducts] = useState(AllProducts);
  const [open, setOpen] = useState(false);
  const [MiniCart, setMiniCart] = useState({});
  const { data, error, isLoading } = useGetlodaByNameQuery(Products);
  const handleChange = (event, NewValue) => {
    if (NewValue !== null) {
      setProducts(NewValue);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  if (isLoading) {
    return (
      <div style={{ alignItems: "center" }}>
        <Lottie
          animationData={loading}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "50%" }}
        />
        ;
      </div>
    );
  }
  if (error) {
    return (
      <Typography variant="h2" color="initial">
        {error.error}
      </Typography>
    );
  }

  if (data) {
    return (
      <Container sx={{ mt: 2, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            flexWrap: "wrap",
          }}
        >
          <Stack sx={{ textAlign: "center" }}>
            <Typography variant="body1" color="inherit">
              Selected Products
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.text.secondary }}
            >
              All our new arrivals in an Exclusive Brand Selection
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ToggleButtonGroup
              color="primary"
              value={Products}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{
                ".Mui-selected": {
                  backgroundColor: "inherit",
                  fontWeight: "bold",
                },
              }}
            >
              <ToggleButton
                sx={{
                  borderRadius: "6px !important",
                  textTransform: "capitalize",
                  border: "1px solid #b1afaf !important",
                  p: "8px",
                }}
                className="MuiProductsButton"
                value={AllProducts}
              >
                All Products
              </ToggleButton>
              <ToggleButton
                sx={{
                  borderRadius: "6px !important",
                  textTransform: "capitalize",
                  border: "1px solid #b1afaf !important",
                  p: "8px",
                  mx: "10px !important",
                }}
                className="MuiProductsButton"
                value={MenProduct}
              >
                Men Catagory
              </ToggleButton>
              <ToggleButton
                sx={{
                  borderRadius: "6px !important",
                  textTransform: "capitalize",
                  border: "1px solid #b1afaf !important",
                  p: "8px",
                }}
                className="MuiProductsButton"
                value={WomenProduct}
              >
                Women Catagory
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          sx={{
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "space-between",
              md: "space-between",
              lg: "space-between",
            },
          }}
        >
          {data.data.map((item) => (
            <Box key={item.attributes.title} sx={{ mt: 3, mb: 2, mr: 1 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={`${item.attributes.image.data[0].attributes.url}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {item.attributes.title}
                      </Typography>
                      <Typography variant="caption" color="inherit">
                        ${item.attributes.price}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.attributes.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ textTransform: "capitalize" }}
                    onClick={() => {
                      handleClickOpen();
                      setMiniCart(item);
                      console.log(item)
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Rating
                    name="simple-controlled"
                    value={item.attributes.rating}
                    precision={0.5}

                  />
                </CardActions>
              </Card>
            </Box>
          ))}
        </Stack>
        <Dialog
                sx={{
                  ".MuiPaper-root": {
                    maxWidth: { xs: "100%", sm: "100%", md: "960px" },
                    borderRadius: "15px",
                  },
                }}
                onClose={handleClose}
                open={open}
              >
                <IconButton
                  sx={{ position: "absolute", right: 3, top: 5, zIndex: 99 }}
                  aria-label=""
                  onClick={handleClose}
                >
                  <Close />
                </IconButton>

                <ProductDetails MiniCart={MiniCart} />
              </Dialog>
      </Container>
    );
  }
}

export default Cart;
