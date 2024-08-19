import ProductModel from "../Models/ProductModel.js";

export const ProductSlidersService = async (req, res, next) => {

  const products = await ProductModel.find();
  res.status(200).json({ products });
}