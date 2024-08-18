import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export const CreatUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const CreatNewUSER = await UserModel.create({
      Firstname: firstname,
      LastName: lastname,
      Email: email,
      PW: hashedPassword,
    });
    res.status(201).json({
      CreatNewUSER
    });
  } catch (error) {
    res.status(402).json({
      message: error.message,
    });
  }
};
