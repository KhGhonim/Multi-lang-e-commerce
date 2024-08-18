import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import HeroSectionSlider from "./HeroSectionSlider/HeroSectionSlider";

const SliderArray1 = [
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
      "https://people.com/thmb/4zkSBc0FajrSu-1OLxSxFBgGNqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(2999x0:3001x2)/the-best-beauty-products-people-editors-tried-tout-2-3ee7650afc2a430e8884e79850fca4ae.jpg",
    alt: "Fifth Photo",
  },
];

const SliderArray2 = [
  {
    Photo: "https://media.glamour.com/photos/639d05c7d0d74927483ca574/3:2/w_3000,h_2000,c_limit/12-16-editors-picks.jpg",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://lh3.googleusercontent.com/Z5LKF4h_1_uix2KJ5f1tLXcLLLkN_P7gCHSPiSbYBfb8d8dIbt_DU05stfGOJkhd0-Khgnhawvy_QlLpZW8WUip_7NY_fftLMI6w5ZE",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min-1024x683.jpeg",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://c02.purpledshub.com/uploads/sites/41/2024/06/cosmetics.jpg?w=1029&webp=1",
    alt: "Foruth Photo",
  },
  {
    Photo:
      "https://lh3.googleusercontent.com/proxy/YutKBgX4Ov_3ST1t0euSzERSurAAfgk3ZH2P2ijZ2Kc-XqgbLlvpBv1PwsoJ2NOL2w5ReB7y-Ew9Ds6qzgYl8k7mUYCV6Xv6iKHfudi8IE-Y4OjX",
    alt: "Fifth Photo",
  },
];

const SliderArray3 = [
  {
    Photo: "https://images-us.nivea.com/-/media/nivea/local/in/product-banners/nivea-men-products_banner_revised.png?rx=1454&ry=0&rw=1452&rh=806",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://cdn.shopify.com/s/files/1/0513/2409/files/naturalskincare.jpg?v=1693253946",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://www.packagingstrategies.com/ext/resources/ISSUES/2019/07-July/34-wahl.jpg",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://www.insidehook.com/wp-content/uploads/2019/04/The-Ordinary-.jpg?fit=1200%2C675",
    alt: "Foruth Photo",
  },
  {
    Photo:
      "https://menshealth.com.au/wp-content/uploads/2023/01/37083457.png",
    alt: "Fifth Photo",
  },
];
const SliderArray4 = [
  {
    Photo: "https://blogscdn.thehut.net/wp-content/uploads/sites/32/2018/04/17133037/1200x672_217775857-MC-MK-April-photography-batching-Shot14_1200x672_acf_cropped_1200x672_acf_cropped.jpg",
    alt: "Frist Photo",
  },
  {
    Photo:
      "https://www.mensjournal.com/.image/t_share/MTk5Mjk3MzIzMzAwNDk3MzU4/mens-grooming-deals-prime-day-2023.jpg",
    alt: "Second Photo",
  },
  {
    Photo:
      "https://stylestandard.com/cdn/shop/articles/StyleStandard_20200319_009_copy_1024x.jpg?v=1689062004",
    alt: "Thrid Photo",
  },
  {
    Photo:
      "https://media.gq-magazine.co.uk/photos/65e9cf40ad37d1f2a0f745a0/master/pass/Affordable-skincare-b.jpg",
    alt: "Foruth Photo",
  },
  {
    Photo:
      "https://www.businessoutreach.in/wp-content/uploads/2023/09/The-market-size-of-mens-grooming-brands-in-India.jpg",
    alt: "Fifth Photo",
  },
];
function HeroSection() {
  return (
    <div className="w-full h-full mt-3 overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full px-4">
        <div className="hidden lg:grid grid-cols-1 gap-4">
          <div className="relative h-80 md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
        <HeroSectionSlider SliderArray={SliderArray1} title={"Summer's Sale Collection For Women"}/>
          </div>

          <div className="relative h-80 md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
          <HeroSectionSlider SliderArray={SliderArray3} title={"Summer's Sale Collection For Men"}/>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">

        <div className="relative  h-full md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
          <HeroSectionSlider SliderArray={SliderArray2} title={"Winter's Sale Collection For Women"}/>
          </div>
          <div className="relative  h-full md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
          <HeroSectionSlider SliderArray={SliderArray4} title={"Winter's Sale Collection For Men"}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
