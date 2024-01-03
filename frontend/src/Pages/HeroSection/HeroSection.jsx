import { Box, Stack, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./styles.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const SliderArray = [
  {
    Photo: "https://i.insider.com/5ed95c393f7370198527eea3?width=700",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://www.founderjar.com/wp-content/uploads/2022/05/Trending-Products-to-Sell-Online.jpg",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://nypost.com/wp-content/uploads/sites/2/2022/03/hairgrowth.jpg?quality=75&strip=all",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://www.paulaschoice-eu.com/on/demandware.static/-/Library-Sites-paulachoice/default/dwaf673b07/ExpertAdvice/Toss-out_Header.jpg",
    alt: "Foruth Photo",
  },
  {
    Photo:
      "https://www.wedoact.com/static/e6b6ba53b50d74a2fac30dbd167d114d/42837/Tittle%20page_LEAVE_IN_desktop_0.jpg",
    alt: "Fifth Photo",
  },
];
function HeroSection() {
  const theme = useTheme();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
      {/* Slider */}
      <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
          style={{
            borderRadius: "15px",
            aspectRatio: "1/1",
            position: "relative",
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          }}
        >
          {SliderArray.map((item) => (
            <SwiperSlide key={item.alt}>
              <img src={item.Photo} alt={item.alt} width={"100%"} />
            </SwiperSlide>
          ))}
          <Box
            sx={{
              [theme.breakpoints.down("xl")]: {
                position: "absolute",
                bgcolor: "transparent",
                top: "40%",
                left: "20px",
                zIndex: 99,
                p: 2,
                color:
                  theme.palette.mode === "dark"
                    ? "chocolate"
                    : theme.palette.text.primary,
              },
            }}
          >
            <Typography variant="h5" color="inherit" fontWeight={"900"}>
              All You Want for your{" "}
              <span
                style={{ color: "red", fontSize: "25px", fontWeight: "bolder" }}
              >
                Lady
              </span>
            </Typography>
            <Typography variant="h6" color="inherit" fontWeight={"650"}>
              SALE UP TO{" "}
              <span
                style={{ color: "red", fontSize: "25px", fontWeight: "bolder" }}
              >
                30%
              </span>
            </Typography>

            <Typography variant="caption" color="inherit" fontWeight={"800"}>
              Get Free Shipping on orders over{" "}
              <span
                style={{ color: "red", fontSize: "15px", fontWeight: "bold" }}
              >
                $99.00
              </span>
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Button
                sx={{
                  bgcolor: "#222",
                  color: "white",
                  mt: 1,
                  width: "50%",
                  ml: 8,
                  "&:hover": { bgcolor: "#151555" },
                }}
                endIcon={<ShoppingCartIcon sx={{ color: "white" }} />}
                aria-label=""
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Swiper>
      </>

      {/* 2 Images with bigger screen sizes */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block", width: "50%" },
          mr: 1,
          width: "50%",
        }}
      >
        <Stack>
          <Box sx={{ position: "relative" }}>
            <img
              width={"100%"}
              src="https://www.dropee.com/pages/wp-content/uploads/2023/02/pexels-karolina-grabowska-4202926-1024x683.jpg"
              alt=""
              style={{ borderRadius: "15px", aspectRatio: "1/1" }}
            />
            <Box sx={{ position: "absolute", top: 0, left: "10%", mt: 3.5 }}>
              <Typography variant="h6" color="inherit" fontWeight={"700"}>
                New Arrivals for the Summer
              </Typography>
              <Link
                to={""}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Stack
                  sx={{ ":hover": { color: "Red" } }}
                  direction={"row"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Typography color="inherit">Shop now</Typography>
                  <ArrowForwardIcon fontSize="small" />
                </Stack>
              </Link>
            </Box>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img
              width={"100%"}
              src=" https://www.glossy.co/wp-content/uploads/sites/4/2019/10/pasted-image-0-2.png"
              alt=""
              style={{ borderRadius: "15px", aspectRatio: "1/1" }}
            />
            <Box sx={{ position: "absolute", bottom: "3%", left: "10%" }}>
              <Typography variant="h6" color="inherit" fontWeight={"700"}>
                New Arrivals for the Winter
              </Typography>
              <Link
                to={""}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Stack
                  sx={{ ":hover": { color: "Red" } }}
                  direction={"row"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Typography color="inherit">Shop now</Typography>
                  <ArrowForwardIcon fontSize="small" />
                </Stack>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default HeroSection;
