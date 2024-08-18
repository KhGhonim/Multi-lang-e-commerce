import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useTheme } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

function ProductDetails({ MiniCart }) {
  const theme = useTheme();
  const [selectedImg, setselectedImg] = useState(0);
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box sx={{ mr: 3, ml: 2, my: 1 }}>
        <img
          src={MiniCart.attributes.image.data[selectedImg].attributes.url}
          alt=""
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            // @ts-ignore
            background: theme.palette.backGround.main,
          }}
        />
      </Box>
      <Stack
        sx={{
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
          },
        }}
      >
        <Typography variant="h4" color="inherit" sx={{ my: 1 }}>
          {MiniCart.attributes.title}
        </Typography>
        <Typography variant="subtitle1" color="red">
          ${MiniCart.attributes.price}
        </Typography>
        <Typography margin={1} color="inherit" fontSize={"15px"}>
          {MiniCart.attributes.description}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          sx={{ mb: "3px" }}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              my: 2,
              ".Mui-selected": {
                backgroundColor: "initial",
                opacity: 1,
              },
            }}
          >
            {MiniCart.attributes.image.data.map((item, index) => (
              <ToggleButton
                key={item.id}
                value={index}
                sx={{
                  width: "110px",
                  height: "100px",
                  p: 0,
                  mx: 3,
                  opacity: "0.5",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={item.attributes.url}
                  alt=""
                  value={index}
                  onClick={() => {
                    setselectedImg(index);
                  }}
                />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            m: 1,
            width: "120px",
            mb: 2,
          }}
          color="primary"
          startIcon={<ShoppingCartCheckoutIcon />}
        >
          Buy Now
        </Button>
      </Stack>
    </Box>
  );
}

export default ProductDetails;
