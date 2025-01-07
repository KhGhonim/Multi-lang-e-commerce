import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import Dashboard from "../src/Pages/Dashboard/Dashboard";
import SignUp from "../src/Pages/Auth/SignUp/SignUp";
import Login from "../src/Pages/Auth/Login/Login";
import Profile from "../src/Pages/Profile/Profile";
import ShoppingCart from "../src/Pages/ShoppingCart/ShoppingCart";
import ProductDetails from "../src/Pages/ProductDetails/ProductDetails";
import Search from "../src/Pages/Search/Search";
import RelatedSearch from "../src/Pages/Related/RelatedSearch";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import WhishList from "Pages/WhishList/WhishList";
import Compare from "Pages/Compare/Compare";
import BlogPage from "Pages/BlogPage/BlogPage";
import Article from "Pages/Article/Article";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />,
      <Route path="/register" element={<SignUp />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/profile" element={<Profile />} />,
      <Route path="/cart" element={<ShoppingCart />} />,
      <Route path="/search" element={<Search />} />,
      <Route path="/whishlist" element={<WhishList />} />,
      <Route path="/RelatedSearch" element={<RelatedSearch />} />,
      <Route path="/compare" element={<Compare />} />,
      <Route path="/blog" element={<BlogPage />} />,
      <Route path="/article/:id" element={<Article />} />,
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />,
      <Route path="*" element={<ErrorPage />} />

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
