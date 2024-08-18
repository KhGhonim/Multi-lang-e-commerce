import ProductModel from "../Models/ProductModel.js";

export const ProductDetailsService = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Id is required",
    });
  }
  try {
    const product = await ProductModel.findOne({ id: id });

    if (!product) {
      return res.status(400).json({
        message: "Product not found",
      });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};
