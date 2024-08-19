import ProductModel from "../Models/ProductModel.js";

export const SearchHandlertoolbar = async (req, res, next) => {

  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      message: "Search is required",
    });
  }

  try {
    const SearchData = await ProductModel.find({
      name: { $regex: q, $options: "i" },
    });
    res.status(200).json({ SearchData });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}