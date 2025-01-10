import { Link } from "react-router-dom";
import banner1 from "../../Assets/banner1.jpg";
import { useTranslation } from "react-i18next";
export default function FirstHeroSection() {
  const { t } = useTranslation();

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left div with border animation */}
        <div className="relative group h-[450px] lg:h-[85dvh] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${banner1}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30">
              <div className="p-16 text-white relative z-10">
                <h2 className="text-5xl font-bold mb-4">
                  {" "}
                  {t("Fashion For Her")}
                </h2>
                <p className="mb-6 text-xl">
                  {t("Discover the latest trends in women's fashion")}.
                </p>
                <Link
                  to="/search"
                  className="bg-white text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                >
                  {t("Shop Now")}
                </Link>
              </div>
            </div>
          </div>
          {/* Border animation */}
          <div className="absolute inset-0 p-2">
            <div className="relative w-full h-full border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms]">
              <div className="absolute inset-0 border-2 border-white rounded-lg border-r-0 border-b-0 group-hover:border-r group-hover:border-b transition-all duration-[2000ms]"></div>
            </div>
          </div>
        </div>

        {/* Right div with shine effect */}
        <div className="shine-effect  group h-[450px] lg:h-[85dvh]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30">
              <div className="p-16 text-white relative z-10">
                <h2 className="text-5xl font-bold mb-4">
                  {" "}
                  {t("Fashion For Him")}{" "}
                </h2>
                <p className="mb-6 text-xl">
                  {t("Elevate your style with our men's collection")}
                </p>
                <Link
                  className="bg-white text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                  to={"/search"}
                >
                  {t("Shop Now")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
