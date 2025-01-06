import { Box, useTheme } from "@mui/material";
import ScrollUp from "../../Components/ScrollFixedButton/ScrollUp";
import SelectYourProduct from "../../Components/Selection/SelectYourProduct";
import HeroSection from "../../Components/HeroSection/HeroSection";
import IconsSeaction from "../../Components/Icons/IconsSeaction";
import ProductsBanners from "../../Components/ProductsBanners/ProductsBanners";
import Slider from "../../Components/Sliders/Slider";
import BigBanner from "Components/BigBanner/BigBanner";
import CallToAction from "../../Components/CallToAction/CallToAction";
import TotalCustomers from "../../Components/TotalCustomers/TotalCustomers";
import { useEffect, useState } from "react";
import {
  fifthBanner,
  firstBanner,
  fourthBanner,
  secondBanner,
  thirdBanner,
} from "DB/db";
import MarqueeAnimation from "Components/Marquee/MarqueeAnimation";
import QuickView from "Components/QuickView/QuickView";

function Dashboard() {
  const [slider1, setslider1] = useState([]);
  const [slider2, setslider2] = useState([]);
  const [slider3, setslider3] = useState([]);
  const [slider4, setslider4] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/products`
      );
      const data = await response.json();
      setslider1(data.products.slice(0, 10));
      setslider2(data.products.slice(10, 20));
      setslider3(data.products.slice(20, 30));
      setslider4(data.products.slice(30, 40));
    };
    fetchProducts();
  }, []);

  const [QuickViewProduct, setQuickViewProduct] = useState([]);

  const OnClose = () => {
    setQuickViewProduct([]);
  };

  return (
    <div className="raleway-EC max-lg:pt-16 ">
      <MarqueeAnimation />
      <Box
        sx={{
          bgcolor:
            // @ts-ignore
            theme.palette.backGround.main,
        }}
      >
        <HeroSection />
        <Slider
          Sliders={slider1}
          Headline={"Popular Products"}
          setQuickViewProduct={setQuickViewProduct}
        />
        <ProductsBanners banner={firstBanner} />
        <ProductsBanners banner={secondBanner} />
        <ProductsBanners banner={thirdBanner} />
        <SelectYourProduct />
        <Slider
          Sliders={slider2}
          Headline={"Top Selling Products"}
          setQuickViewProduct={setQuickViewProduct}
        />
        <IconsSeaction />
        <ProductsBanners banner={fourthBanner} />
        <ProductsBanners banner={fifthBanner} />
        <BigBanner />
        <ProductsBanners banner={thirdBanner} />
        <ProductsBanners banner={fourthBanner} />
        <Slider
          Sliders={slider3}
          Headline={"Featured Selling Products"}
          setQuickViewProduct={setQuickViewProduct}
        />
        <CallToAction />
        <ProductsBanners banner={firstBanner} />
        <ProductsBanners banner={secondBanner} />
        <Slider
          Sliders={slider4}
          Headline={"New Products"}
          setQuickViewProduct={setQuickViewProduct}
        />
        <TotalCustomers />
        <ScrollUp />
      </Box>
      <QuickView product={QuickViewProduct} onClose={OnClose} />
    </div>
  );
}

export default Dashboard;
