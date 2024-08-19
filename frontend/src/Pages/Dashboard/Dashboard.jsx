import { Box, useTheme } from "@mui/material";
import Header2 from "../../Components/Header/Header2/Header2";
import ScrollUp from "../../Components/ScrollFixedButton/ScrollUp";
import SelectYourProduct from "../../Components/Selection/SelectYourProduct";
import HeroSection from "../../Components/HeroSection/HeroSection";
import IconsSeaction from "../../Components/Icons/IconsSeaction";
import ProductsBanners from "../../Components/ProductsBanners/ProductsBanners";
import addidas from "../../Assets/adidas.webp";
import armania from "../../Assets/armania.webp";
import defacto from "../../Assets/defacto.webp";
import mango from "../../Assets/mango.webp";
import mavi from "../../Assets/mavi.webp";
import phones from "../../Assets/phones.webp";
import pijama from "../../Assets/pijama.webp";
import Slider from "../../Components/Sliders/Slider";
import BigBanner from "Components/BigBanner/BigBanner";
import CallToAction from "../../Components/CallToAction/CallToAction";
import TotalCustomers from "../../Components/TotalCustomers/TotalCustomers";
import { useEffect, useState } from "react";

const firstBanner = [
  {
    pic: armania,
    alt: "A silver Pandora bracelet with a butterfly charm.",
    name: "Pandora",
    date: "9 August - 18 August",
    discount: "15",
  },
  {
    pic: defacto,
    alt: "A woman wearing a black jacket and wide-leg jeans.",
    name: "Bershka",
    date: "12 August - 31 August",
    discount: "10",
  },
  {
    pic: mango,
    alt: "A woman wearing a white crochet dress and sunglasses.",
    name: "Laçatı",
    date: "9 August - 16 August",
    discount: "25",
  },
];

const secondBanner = [
  {
    pic: mavi,
    alt: "A silver Pandora bracelet with a butterfly charm.",
    name: "Pandora",
    date: "9 August - 18 August",
    discount: "15",
  },
  {
    pic: phones,
    alt: "A woman wearing a black jacket and wide-leg jeans.",
    name: "Bershka",
    date: "12 August - 31 August",
    discount: "10",
  },
  {
    pic: "https://cdn.dsmcdn.com/ty1470/pimWidgetApi/mobile_20240809152858_2702466KadinMobile202408091801.jpg",
    alt: "A woman wearing a white crochet dress and sunglasses.",
    name: "Laçatı",
    date: "9 August - 16 August",
    discount: "25",
  },
];

const thirdBanner = [
  {
    pic: pijama,
    alt: "A woman wearing a blue dress with a denim jacket.",
    name: "Mavi",
    date: "10 September - 17 September",
    discount: "15",
  },
  {
    pic: addidas,
    alt: "A woman wearing a black and white tracksuit.",
    name: "Adidas",
    date: "12 September - 19 September",
    discount: "6",
  },
  {
    pic: mavi,
    alt: "A woman wearing a pink running shoe.",
    name: "Nike",
    date: "15 September - 22 September",
    discount: "10",
  },
];

const fourthBanner = [
  {
    pic: addidas,
    alt: "A woman wearing a blue dress with a white cardigan.",
    name: "DeFacto",
    date: "28 August - 4 September",
    discount: "6",
  },
  {
    pic: defacto,
    alt: "A woman wearing a pink shirt and jeans.",
    name: "Koton",
    date: "3 September - 10 September",
    discount: "10",
  },
  {
    pic: armania,
    alt: "A woman wearing a red dress with a white belt.",
    name: "LC Waikiki",
    date: "5 September - 12 September",
    discount: "20",
  },
];

const fifthBanner = [
  {
    pic: pijama,
    alt: "A woman wearing a floral dress and sandals.",
    name: "Mango",
    date: "15 August - 22 August",
    discount: "20",
  },
  {
    pic: phones,
    alt: "A woman wearing a striped shirt and denim shorts.",
    name: "H&M",
    date: "20 August - 27 August",
    discount: "10",
  },
  {
    pic: mavi,
    alt: "A woman wearing a black dress with a belt.",
    name: "Zara",
    date: "25 August - 3 September",
    discount: "15",
  },
];

function Dashboard() {
  const [slider1, setslider1] = useState([]);
  const [slider2, setslider2] = useState([]);
  const [slider3, setslider3] = useState([]);
  const [slider4, setslider4] = useState([]);
  const theme = useTheme();

  const API = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${API}/api/products`);
      const data = await response.json();
      setslider1(data.products.slice(0, 10));
      setslider2(data.products.slice(10, 20));
      setslider3(data.products.slice(20, 30));
      setslider4(data.products.slice(30, 40));
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Header2 />
      <Box
        sx={{
          bgcolor:
            // @ts-ignore
            theme.palette.backGround.main,
        }}
      >
        <HeroSection />
        <Slider Sliders={slider1} Headline={"Popular Products"} />
        <ProductsBanners banner={firstBanner} />

        <ProductsBanners banner={secondBanner} />

        <ProductsBanners banner={thirdBanner} />
        <SelectYourProduct />
        <Slider Sliders={slider2} Headline={"Top Selling Products"} />
        <IconsSeaction />
        <ProductsBanners banner={fourthBanner} />
        <ProductsBanners banner={fifthBanner} />
        <BigBanner />
        <ProductsBanners banner={thirdBanner} />
        <ProductsBanners banner={fourthBanner} />
        <Slider Sliders={slider3} Headline={"Featured Selling Products"} />
        <CallToAction />
        <ProductsBanners banner={firstBanner} />
        <ProductsBanners banner={secondBanner} />
        <Slider Sliders={slider4} Headline={"New Products"} />

        <TotalCustomers />

        <ScrollUp />
      </Box>
    </div>
  );
}

export default Dashboard;
