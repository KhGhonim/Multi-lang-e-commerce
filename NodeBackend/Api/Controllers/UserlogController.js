import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Userlog = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const user = await UserModel.findOne({ Email: email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exists",
      });
    }

    const isMatch = await bcrypt.compare(password, user.PW);
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    if (user && isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensures secure cookie transmission
        sameSite: "None", // Allows cross-site cookie sendingm
        maxAge: 3600000,
      });
      res.status(200).send({ user });
    }
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};
