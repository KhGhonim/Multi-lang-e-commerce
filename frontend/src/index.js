import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "./index.css";
import Dashboard from "../src/Pages/Dashboard/Dashboard";
import SignUp from "../src/Pages/Auth/SignUp/SignUp";
import Login from "../src/Pages/Auth/Login/Login";
import Profile from "../src/Pages/Profile/Profile";
import ShoppingCart from "../src/Pages/ShoppingCart/ShoppingCart";
import ProductDetails from "../src/Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />,
      <Route path="/register" element={<SignUp />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/profile" element={<Profile />} />,
      <Route path="/cart" element={<ShoppingCart />} />,
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />,
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
