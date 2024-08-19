import Header2 from "Components/Header/Header2/Header2";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToBasket } from "../../Redux/userSlice";

export default function Profile() {
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen">
      <Header2 />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between items-center space-x-4 p-4 bg-card rounded-lg shadow-md">
          <div className="flex space-x-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="User Profile"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">
                {user.currentUser.user.Firstname}{" "}
                {user.currentUser.user.LastName}
              </h1>
              <p className="text-muted-foreground">
                {user.currentUser.user.Email}
              </p>
            </div>
          </div>
          {/* <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Edit your profile
          </button> */}
        </div>

        <div className="my-10">
          <h2 className="text-xl font-semibold mb-4">Previous Purchases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Product 1</h3>
              <p className="text-muted-foreground">$29.99</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Product 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Product 2</h3>
              <p className="text-muted-foreground">$49.99</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Product 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Product 3</h3>
              <p className="text-muted-foreground">$19.99</p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-xl font-semibold mb-4 ">Favorites</h2>
          {user.FavoirteProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {user.FavoirteProducts.map((product, index) => (
                <div key={index} className="bg-card p-4 rounded-lg shadow-md">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{product.feature}</h3>
                    <p className="text-muted-foreground">${product.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addToBasket(product));
                      toast.success("Product added to cart");
                    }}
                    className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md w-full"
                  >
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No favorites yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
