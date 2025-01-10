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
import { useState } from "react";
import {
  fifthBanner,
  firstBanner,
  fourthBanner,
  secondBanner,
  thirdBanner,
} from "DB/db";
import MarqueeAnimation from "Components/Marquee/MarqueeAnimation";
import QuickView from "Components/QuickView/QuickView";
import { useLocation } from "react-router-dom";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import { FaSpinner } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import FirstHeroSection from "Components/FirstHeroSection/FirstHeroSection";

function Dashboard() {
  const theme = useTheme();
  const { data, loading } = useGetAllProducts();
  const Slider1 = data?.slice(0, 10);
  const Slider2 = data?.slice(10, 20);
  const Slider3 = data?.slice(20, 30);
  const Slider4 = data?.slice(30, 40);
  const [QuickViewProduct, setQuickViewProduct] = useState([]);
  const pathname = useLocation().pathname;

  const OnClose = () => {
    setQuickViewProduct([]);
  };

  return (
    <div className="raleway-EC max-lg:pt-16 ">
      <ToastContainer />
      <MarqueeAnimation />
      <Box
        sx={{
          bgcolor:
            // @ts-ignore
            theme.palette.backGround.main,
        }}
      >
        <FirstHeroSection />
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          <Slider
            Sliders={Slider1}
            Headline={"Popular Products"}
            setQuickViewProduct={setQuickViewProduct}
          />
        )}
        <ProductsBanners banner={firstBanner} />
        <ProductsBanners banner={secondBanner} />
        <ProductsBanners banner={thirdBanner} />
        <SelectYourProduct />
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          <Slider
            Sliders={Slider2}
            Headline={"Top Selling Products"}
            setQuickViewProduct={setQuickViewProduct}
          />
        )}
        <HeroSection/>
        <IconsSeaction />
        <ProductsBanners banner={fourthBanner} />
        <ProductsBanners banner={fifthBanner} />
        <BigBanner />
        <ProductsBanners banner={thirdBanner} />
        <ProductsBanners banner={fourthBanner} />
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          <Slider
            Sliders={Slider3}
            Headline={"Featured Selling Products"}
            setQuickViewProduct={setQuickViewProduct}
          />
        )}
        <CallToAction />
        
        <ProductsBanners banner={firstBanner} />
        <ProductsBanners banner={secondBanner} />
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          <Slider
            Sliders={Slider4}
            Headline={"New Products"}
            setQuickViewProduct={setQuickViewProduct}
          />
        )}
        <TotalCustomers />
        <ScrollUp />
      </Box>
      <QuickView product={QuickViewProduct} onClose={OnClose} />
      {pathname === "/login" || pathname === "/register" ? null : (
        <PhoneNavbar />
      )}
    </div>
  );
}

export default Dashboard;
