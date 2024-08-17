import { Box, useTheme } from "@mui/material";
import Header2 from "../../Components/Header/Header2/Header2";
import Header3 from "../../Components/Header/Header3/Header3";
import ScrollUp from "../../Components/ScrollFixedButton/ScrollUp";
import SelectYourProduct from "../../Components/Selection/SelectYourProduct";
import Cart from "../../Pages/Cart/Cart";
import HeroSection from "../../Pages/HeroSection/HeroSection";
import IconsSeaction from "../../Pages/Icons/IconsSeaction";
import ProductsBanners from "../../Components/ProductsBanners/ProductsBanners";
import addidas from "../../Assets/adidas.webp";
import armania from "../../Assets/armania.webp";
import defacto from "../../Assets/defacto.webp";
import mango from "../../Assets/mango.webp";
import mavi from "../../Assets/mavi.webp";
import phones from "../../Assets/phones.webp";
import pijama from "../../Assets/pijama.webp";
import Slider from "../../Components/Sliders/Slider";

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

const slider1 = [
  {
    id: 1,
    feature: "Exclusive Offer",
    description: "Highlight limited-time exclusive offers to create urgency.",
    link: "https://www.example.com/product1",
    price: "149,90 TL",
    fakePrice: "299,90 TL",
    rating: 4.8,
    ratingCount: 4321,
    lowestPriceInDays: 15,
    img: "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/overtime-group-plp.png",
  },
  {
    id: 2,
    feature: "New Arrival",
    description:
      "Showcase newly arrived products to keep customers up-to-date with the latest trends.",
    link: "https://www.example.com/product2",
    price: "199,90 TL",
    fakePrice: "249,90 TL",
    rating: 4.6,
    ratingCount: 6789,
    lowestPriceInDays: 10,
    img: "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/family-care-group-plp.png",
  },
  {
    id: 3,
    feature: "Best Seller",
    description:
      "Indicate popular products that are best sellers, attracting more buyers.",
    link: "https://offmexico.com.mx/-/media/images/off/en/2023-us-update---601/collection/deep-woods-plpv2.png",
    price: "349,90 TL",
    fakePrice: "499,90 TL",
    rating: 4.9,
    ratingCount: 12345,
    lowestPriceInDays: 20,
    img: "https://off.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fscjohnsonana080-dart-production-40df%2Fmedia%2Fproject%2Fdart%2Foff%2Fimages%2Fhome%2Foff_us_4x3_720x540_category_card-family-care-1.png%3Fh%3D540%26iar%3D0%26w%3D720&w=3840&q=75",
  },
  {
    id: 4,
    feature: "Limited Stock",
    description:
      "Create a sense of scarcity by showing that the product is available in limited stock.",
    img: "https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/baby-group-plp.png",
    price: "79,90 TL",
    fakePrice: "149,90 TL",
    rating: 4.3,
    ratingCount: 2456,
    lowestPriceInDays: 5,
  },
  {
    id: 5,
    feature: "Top Rated",
    description:
      "Display products that have received top ratings from users, boosting trust.",
    img: "https://backend.orbitvu.com/sites/default/files/image/sport-shoe-white-background.jpeg",
    price: "499,90 TL",
    fakePrice: "599,90 TL",
    rating: 4.7,
    ratingCount: 9876,
    lowestPriceInDays: 25,
  },
  {
    id: 6,
    feature: "Buy One Get One",
    description:
      "Promote deals where customers can buy one product and get another free.",
    img: "https://backend.orbitvu.com/sites/default/files/image/product-mask.jpeg",
    price: "299,90 TL",
    fakePrice: "399,90 TL",
    rating: 4.4,
    ratingCount: 5432,
    lowestPriceInDays: 18,
  },
  {
    id: 7,
    feature: "Trending Now",
    description:
      "Showcase products that are currently trending, appealing to customers looking for the latest.",
    img: "https://cdn.fstoppers.com/styles/full/s3/media/2015/12/07/white_background_bag_after.jpg",
    price: "229,90 TL",
    fakePrice: "279,90 TL",
    rating: 4.5,
    ratingCount: 7654,
    lowestPriceInDays: 12,
  },
  {
    id: 8,
    feature: "Customer Favorite",
    description:
      "Label products that are consistently highly rated by customers.",
    img: "https://cdn-bjpdk.nitrocdn.com/dyjDRTumiVVFLKEpXMADzKdEUUbypNrL/assets/images/optimized/rev-e0c6bd9/www.visualeducation.com/wp-content/uploads/2020/05/Beats_headphones-2-1558px.jpg",
    price: "129,90 TL",
    fakePrice: "199,90 TL",
    rating: 4.2,
    ratingCount: 3498,
    lowestPriceInDays: 8,
  },
  {
    id: 9,
    feature: "Clearance Sale",
    description:
      "Advertise products that are on clearance, offering deep discounts.",
    img: "https://www.prophotostudio.net/wp-content/uploads/2020/05/Versus-side-white-and-gold-watch-photography.jpg",
    price: "59,90 TL",
    fakePrice: "119,90 TL",
    rating: 4.1,
    ratingCount: 2087,
    lowestPriceInDays: 7,
  },
  {
    id: 10,
    feature: "Staff Pick",
    description:
      "Highlight products that are recommended by staff members for their quality.",
    img: "https://www.mncreative.com.au/wp-content/uploads/2020/09/PRETTYNAILCO-79-min-1024x683.jpg",
    price: "399,90 TL",
    fakePrice: "499,90 TL",
    rating: 4.8,
    ratingCount: 8765,
    lowestPriceInDays: 22,
  },
];

const slider2 = [
  {
    id: 11,
    feature: "Limited Edition",
    description:
      "Feature rare and exclusive items available for a limited time.",
    link: "https://www.example.com/product1",
    price: "249,90 TL",
    fakePrice: "399,90 TL",
    rating: 4.7,
    ratingCount: 5200,
    lowestPriceInDays: 30,
    img: "https://www.befunky.com/images/wp/wp-2017-09-Background-Remover-1.jpg?auto=avif,webp&format=jpg&width=944",
  },
  {
    id: 12,
    feature: "Seasonal Special",
    description: "Showcase products themed around current seasons or holidays.",
    link: "https://www.example.com/product2",
    price: "159,90 TL",
    fakePrice: "219,90 TL",
    rating: 4.5,
    ratingCount: 3800,
    lowestPriceInDays: 12,
    img: "https://backend.orbitvu.com/sites/default/files/image/perfect-lighting-product-photography.webp",
  },
  {
    id: 13,
    feature: "Exclusive Collaboration",
    description:
      "Highlight products from unique collaborations or partnerships.",
    link: "https://www.example.com/product3",
    price: "299,90 TL",
    fakePrice: "399,90 TL",
    rating: 4.9,
    ratingCount: 6000,
    lowestPriceInDays: 25,
    img: "https://cgifurniture.com/wp-content/uploads/2020/11/white-product-background-why-use-it-View03.jpg",
  },
  {
    id: 14,
    feature: "Flash Sale",
    description:
      "Promote products available at special prices for a limited time only.",
    link: "https://www.example.com/product4",
    price: "89,90 TL",
    fakePrice: "139,90 TL",
    rating: 4.4,
    ratingCount: 2900,
    lowestPriceInDays: 7,
    img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121339151/original/c0ef6d95cb9d8063c86aa38fe7ef2a6d114411d3/make-white-background-amazon-product-10-photos.png",
  },
  {
    id: 15,
    feature: "Bundle Deal",
    description:
      "Offer deals where customers get more value by purchasing in bundles.",
    link: "https://www.example.com/product5",
    price: "399,90 TL",
    fakePrice: "499,90 TL",
    rating: 4.8,
    ratingCount: 7100,
    lowestPriceInDays: 20,
    img: "https://www.productphoto.com/wp-content/uploads/2022/10/Ring10_1-scaled.jpg",
  },
  {
    id: 16,
    feature: "New Technology",
    description:
      "Showcase cutting-edge products featuring the latest technology.",
    link: "https://www.example.com/product6",
    price: "799,90 TL",
    fakePrice: "999,90 TL",
    rating: 4.6,
    ratingCount: 4300,
    lowestPriceInDays: 15,
    img: "https://s3.us-east-1.wasabisys.com/grid50/2017/12/white-background-prudct-photography-example-002.jpg",
  },
  {
    id: 17,
    feature: "Eco-Friendly",
    description:
      "Highlight products made from sustainable and eco-friendly materials.",
    link: "https://www.example.com/product7",
    price: "119,90 TL",
    fakePrice: "159,90 TL",
    rating: 4.7,
    ratingCount: 3500,
    lowestPriceInDays: 10,
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043",
  },
  {
    id: 18,
    feature: "Best Value",
    description: "Showcase products that offer the best value for money.",
    link: "https://www.example.com/product8",
    price: "89,90 TL",
    fakePrice: "129,90 TL",
    rating: 4.3,
    ratingCount: 2800,
    lowestPriceInDays: 8,
    img: "https://watermark.lovepik.com/photo/20211202/large/lovepik-skin-care-products-cosmetics-set-white-background-picture_501396552.jpg",
  },
  {
    id: 19,
    feature: "Customer Choice",
    description:
      "Promote products that have received the most votes from customers.",
    link: "https://www.example.com/product9",
    price: "229,90 TL",
    fakePrice: "289,90 TL",
    rating: 4.5,
    ratingCount: 5100,
    lowestPriceInDays: 12,
    img: "https://petapixel.com/assets/uploads/2017/06/Double_Tinder-530x800.jpg",
  },
  {
    id: 20,
    feature: "Top Pick",
    description: "Feature top picks selected by experts or influencers.",
    link: "https://www.example.com/product10",
    price: "399,90 TL",
    fakePrice: "499,90 TL",
    rating: 4.9,
    ratingCount: 6000,
    lowestPriceInDays: 18,
    img: "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6633f5bfbf7ed3afb7657c38_web_amazonianskinfood_r1_0867.webp",
  },
];

function Dashboard() {
  const theme = useTheme();
  return (
    <div>
      <Header2 />
      <Header3 />
      <Box
        sx={{
          bgcolor:
            // @ts-ignore
            theme.palette.backGround.main,
        }}
      >
        <HeroSection />
        <ProductsBanners banner={firstBanner} />
        <Slider Sliders={slider1} Headline={"Popular Products"} />

        <ProductsBanners banner={secondBanner} />

        <ProductsBanners banner={thirdBanner} />
        <SelectYourProduct />
        <IconsSeaction />
        <ProductsBanners banner={fourthBanner} />
        <ProductsBanners banner={fifthBanner} />
        <Slider Sliders={slider2} Headline={"Top Selling Products"} />
        <Cart />
        <ScrollUp />
      </Box>
    </div>
  );
}

export default Dashboard;
