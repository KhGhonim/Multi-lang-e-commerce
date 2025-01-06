import { useTheme } from "@mui/material";
import GridControls from "Components/WhishListPage/GridControls";
import HeroSection from "Components/WhishListPage/HeroSection";
import ProductCard from "Components/WhishListPage/ProductCard";
import { initialProducts } from "DB/db";
import { useState } from "react";
import { MdOutlineHeartBroken } from "react-icons/md";
import { useSelector } from "react-redux";

export default function WhishList() {
  const [gridColumns, setGridColumns] = useState(3);
  const [products, setProducts] = useState(initialProducts);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };
  const theme = useTheme().palette.mode;
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#121212]" : ""}`}>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <GridControls
          gridColumns={gridColumns}
          setGridColumns={setGridColumns}
        />
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
          }}
        >
          {user?.FavoirteProducts?.map((product, index) => (
            <ProductCard
              key={index}
              id={product._id}
              item={product}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center py-12 flex flex-col justify-center items-center">
            <p className="text-gray-500 text-lg">Your wishlist is empty</p>
            <MdOutlineHeartBroken className="text-9xl text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
}
