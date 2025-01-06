import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import HeroSectionSlider from "./HeroSectionSlider/HeroSectionSlider";
import { SliderArray1, SliderArray2, SliderArray3, SliderArray4 } from "DB/db";

function HeroSection() {
  return (
    <div className="w-full h-full  pt-3 overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full px-4">
        <div className="hidden lg:grid grid-cols-1 gap-4">
          <div className="relative h-80 md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
            <HeroSectionSlider
              SliderArray={SliderArray1}
              title={"Summer's Sale Collection For Women"}
            />
          </div>

          <div className="relative h-80 md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
            <HeroSectionSlider
              SliderArray={SliderArray3}
              title={"Summer's Sale Collection For Men"}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="relative  h-full md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
            <HeroSectionSlider
              SliderArray={SliderArray2}
              title={"Winter's Sale Collection For Women"}
            />
          </div>
          <div className="relative  h-full md:h-96  overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out">
            <HeroSectionSlider
              SliderArray={SliderArray4}
              title={"Winter's Sale Collection For Men"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
