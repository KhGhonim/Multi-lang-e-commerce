import ProductModel from "../Models/ProductModel.js";

export const SearchHandler = async (req, res, next) => {
  const SearchData = await ProductModel.find();

  res.status(200).json({ SearchData });
};
