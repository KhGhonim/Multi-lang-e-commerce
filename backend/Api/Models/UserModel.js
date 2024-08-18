import mongoose from "mongoose";
const { Schema, models } = mongoose;

// User Schema
const userSchema = new Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    Firstname: {
      type: String,
      required: true,
    },
    PW: {
      type: String,
      required: true,
    },

    LastName: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = models.User || mongoose.model("User", userSchema);

export default UserModel;