import UserModel from "../Models/UserModel.js";

export const userExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }
  try {
    const IsUserExist = await UserModel.findOne({ Email: email });
    res.status(577).json({ IsUserExist });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
