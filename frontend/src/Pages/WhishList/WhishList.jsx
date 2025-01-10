import { useTheme } from "@mui/material";
import GridControls from "Components/WhishListPage/GridControls";
import HeroSection from "Components/WhishListPage/HeroSection";
import ProductCard from "Components/WhishListPage/ProductCard";
import { useState } from "react";
import { MdOutlineHeartBroken } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToBasket, RemoveItemFromFav } from "../../Redux/userSlice";
import QuickView from "Components/QuickView/QuickView";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";

export default function WhishList() {
  const [gridColumns, setGridColumns] = useState(3);
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(user?.FavoirteProducts);
  const theme = useTheme().palette.mode;
  const [QuickViewProduct, setQuickViewProduct] = useState([]);
  const handleDeleteProduct = (id) => {
    dispatch(RemoveItemFromFav(id));
    toast.success("Product removed from wishlist");
    setProducts(products.filter((product) => product._id !== id._id));
  };
  const handleAddToCart = (product) => {
    dispatch(addToBasket(product));
    toast.success("Added to cart");
  };

  const OnClose = () => {
    setQuickViewProduct([]);
  };

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
              handleDeleteProduct={handleDeleteProduct}
              handleAddToCart={handleAddToCart}
              setQuickViewProduct={setQuickViewProduct}
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

      <QuickView product={QuickViewProduct} onClose={OnClose} />

      <PhoneNavbar />
    </div>
  );
}
