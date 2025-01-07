import { Star, StarHalf } from "@mui/icons-material";
import ComparisonTable from "Components/Comparison/ComparisonTable";
import ProsAndCons from "Components/Comparison/ProsAndCons";
import ReviewSummary from "Components/Comparison/ReviewSummary";
import Suggestions from "Components/Comparison/Suggestions";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RemoveFromCompare } from "../../Redux/userSlice";
import { toast, ToastContainer } from "react-toastify";

function transformProductData(products) {
  return products.map((product, index) => ({
    id: product._id,
    name: product.name || "No Name",
    price: parseFloat(product.price) || 0,
    rating: parseFloat(product.rating) || 0,
    image: product.img || "",
    availability: "In Stock",
    features: {
      Description: product.description || "No description available",
      Category: product.category || "Uncategorized",
      "Lowest Price in Days": product.lowestPriceInDays || "N/A",
    },
    pros: ["Excellent quality", "Great performance", "Affordable price"],
    cons: ["May not be suitable for heavy tasks", "Limited compatibility"],
    reviews: {
      total: product.ratingCount || 0,
      breakdown: [
        5,
        Math.floor(product.ratingCount * 0.6),
        4,
        Math.floor(product.ratingCount * 0.2),
        3,
        Math.floor(product.ratingCount * 0.1),
        2,
        Math.floor(product.ratingCount * 0.05),
        1,
        Math.floor(product.ratingCount * 0.05),
      ],
    },
  }));
}
export default function Compare() {
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const transformedProducts = transformProductData(user.CompareProducts);
  const DeleteCompareHandler = (product) => {
    dispatch(RemoveFromCompare(product));
    toast.success("Product removed from compare list");
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-4 h-4 text-yellow-400 inline" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-4 h-4 text-yellow-400 inline" />
      );
    }
    return stars;
  };

  const pathname = useLocation().pathname;

  return (
    <div className="min-h-screen bg-gray-100 max-lg:pt-11">
      <ToastContainer position="top-center" />
      {/* Comparison Table */}
      {transformedProducts.length > 0 ? (
        <ComparisonTable
          products={transformedProducts}
          renderStars={renderStars}
          DeleteCompareHandler={DeleteCompareHandler}
        />
      ) : (
        <div className="h-96 bg-gray-100 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900">No Product Found</h1>
        </div>
      )}

      {/* Pros & Cons Section */}
      <ProsAndCons products={transformedProducts} />

      {/* Review Summary Section */}
      <ReviewSummary products={transformedProducts} />

      {/* Call to Action & Suggestions */}
      <Suggestions />

      {pathname === "/login" || pathname === "/register" ? null : (
        <PhoneNavbar />
      )}
    </div>
  );
}
