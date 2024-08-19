import mongoose from "mongoose";
const { Schema, models } = mongoose;

// Product Schema
const ProductSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    feature: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },
    fakePrice: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    ratingCount: {
      type: Number,
      required: true,
    },
    lowestPriceInDays: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;