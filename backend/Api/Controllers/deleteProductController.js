import ProductModel from "../Models/ProductModel.js";

export const deleteProductController = async (req, res) => {

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      message: "Id is required",
    });
  }

  try {

    const result = await ProductModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Error while deleting product",
    });
  }

}
