import useFetchOneProduct from "../../Hooks/useFetchOneProduct";
import { useEffect, useState } from "react";
import {
  FaStar,
  FaTruck,
  FaShoppingCart,
  FaHeart,
  FaThumbsUp,
  FaShareAlt,
  FaPlus,
  FaMinus,
  FaSpinner,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToBasket } from "../../Redux/userSlice";
import TabButton from "Components/ProductDetails/TabButton";
import ProductHighlights from "Components/ProductDetails/ProductHighlights";
import Magnifier from "react18-image-magnifier";

export default function NewProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [comments, setComments] = useState([
    { id: 1, text: "Great product!", likes: 12, isLiked: false },
    { id: 2, text: "The battery life is amazing!", likes: 8, isLiked: false },
  ]);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, loading } = useFetchOneProduct(id);
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const BasketHandler = (P) => {
    if (user.currentUser === null) {
      toast.warning("Please login to add to cart");
      nevigate("/login");
    } else {
      dispatch(addToBasket(P));
      toast.success("Added to basket");
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, text: newComment, likes: 0, isLiked: false },
      ]);
      setNewComment("");
    }
  };

  const handleLikeComment = (id) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          };
        }
        return comment;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 max-lg:py-12">
      <ToastContainer />
      {loading ? (
        <div className="flex w-full h-dvh items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        <main className="container mx-auto px-4 py-8">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image Section */}
            <div className="space-y-4">
              <div className="relative aspect-fit rounded-xl overflow-hidden bg-white shadow-lg">
                <Magnifier
                  src={data?.img}
                  className="object-cover w-full h-full"
                />
                <button
                  className={`      absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm
                  hover:bg-white/90 transition-colors`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <FaHeart
                    className={`${
                      isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
                    } w-6 h-6`}
                  />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full mb-4">
                  New Arrival
                </span>
                <h1 className="text-4xl font-bold mb-2"> {data?.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < Math.floor(data?.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(128 reviews)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold"> ${data?.price}</span>
                  <span className="text-xl text-gray-500 line-through">
                    ${data?.fakePrice}
                  </span>
                  <span className="px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
                    Save 25%
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      className="p-2 hover:bg-gray-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <FaMinus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      className="p-2 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <FaPlus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => BasketHandler(data)}
                    className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart className="h-5 w-5" />
                    Add to Basket
                  </button>
                </div>

                {/* Share Button */}
                <button className="w-full border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <FaShareAlt className="h-5 w-5" />
                  Share Product
                </button>

                {/* Shipping Info */}
                <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
                  <div className="flex items-start gap-4">
                    <FaTruck className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Free Shipping</h3>
                      <p className="text-sm text-gray-600">
                        Estimated Shipping: Within {data?.lowestPriceInDays}{" "}
                        days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Highlights */}
          <ProductHighlights />

          {/* Product Tabs */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b">
              <div className="flex overflow-x-auto">
                <TabButton
                  value="description"
                  label="Description"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabButton
                  value="reviews"
                  label="Reviews"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabButton
                  value="qa"
                  label="Q&A"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabButton
                  value="shipping"
                  label="Shipping & Returns"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabButton
                  value="comments"
                  label="Comments"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            </div>

            <div className="p-6">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">
                    Product Description
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The SmartWatch Pro X1 combines elegant design with
                    cutting-edge technology. This premium smartwatch features a
                    vibrant AMOLED display, advanced health monitoring
                    capabilities, and seamless connectivity with your
                    smartphone.
                  </p>
                  <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>1.4" AMOLED Display with Always-On feature</li>
                    <li>Advanced heart rate and SpO2 monitoring</li>
                    <li>Water-resistant up to 50m</li>
                    <li>7-day battery life</li>
                    <li>Built-in GPS and fitness tracking</li>
                  </ul>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      Write a Review
                    </button>
                  </div>
                  {[1, 2, 3].map((review) => (
                    <div
                      key={review}
                      className="bg-white border rounded-lg p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="w-4 h-4 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold">John Doe</span>
                        <span className="text-sm text-gray-500">
                          • 2 days ago
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Amazing smartwatch! The battery life is impressive and
                        the health tracking features are spot-on. Highly
                        recommended!
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "qa" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">
                      Questions & Answers
                    </h2>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      Ask a Question
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white border rounded-lg p-4">
                      <p className="font-semibold mb-2">
                        Q: Is this watch compatible with iOS?
                      </p>
                      <p className="text-gray-700">
                        A: Yes, the SmartWatch Pro X1 is compatible with both
                        iOS and Android devices.
                      </p>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <p className="font-semibold mb-2">
                        Q: What's the charging time?
                      </p>
                      <p className="text-gray-700">
                        A: The watch takes approximately 2 hours for a full
                        charge.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">
                    Shipping Information
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We offer free standard shipping on all orders. Orders are
                    typically processed within 1-2 business days.
                  </p>
                  <h3 className="text-xl font-semibold mb-2">Returns Policy</h3>
                  <p className="text-gray-700">
                    We accept returns within 30 days of delivery. The product
                    must be unused and in its original packaging.
                  </p>
                </div>
              )}

              {activeTab === "comments" && (
                <div className="space-y-6">
                  <div className="flex gap-4 mb-6">
                    <textarea
                      placeholder="Write a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 min-h-[100px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button
                      onClick={handleAddComment}
                      className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors h-fit"
                    >
                      Post Comment
                    </button>
                  </div>
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-white border rounded-lg p-4"
                      >
                        <p className="text-gray-700 mb-3">{comment.text}</p>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleLikeComment(comment.id)}
                            className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                              comment.isLiked
                                ? "text-gray-600 bg-gray-50"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            <FaThumbsUp className="h-4 w-4" />
                            {comment.likes}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
