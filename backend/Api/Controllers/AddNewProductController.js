import ProductModel from "../Models/ProductModel.js";
import { uploadStream } from "../utils/CloudineryProvider.js";

export const AddNewProductController = async (req, res) => {
  const {
    name,
    description,
    category,
    price,
    fakePrice,
    rating,
    ratingCount,
    lowestPriceInDays,
  } = req.body;

  let image = req.file;
  if (!name || !description || !category || !price || !fakePrice || !rating || !ratingCount || !lowestPriceInDays || !image) {
    return res.status(400).json({ message: "All fields are required, including the image." });
  }

  if (image && image.buffer) {
    try {
      const uploadedImg = await uploadStream(
        image.buffer,
        `E-commerce-Trendyol`
      );
      image = uploadedImg.secure_url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ message: "Failed to upload image" });
    }
  }

  try {
    const NewProduct = await ProductModel.create({
      name,
      description,
      category,
      price,
      fakePrice,
      rating,
      ratingCount,
      lowestPriceInDays,
      img: image
    })

    if (!NewProduct) {
      return res.status(400).json({ message: "Failed to add product" });

    }
    return res.status(200).json({ message: "Product added successfully" });

  } catch (error) {
    return res.status(400).json({ message: "Failed to add product" });
  }
}
