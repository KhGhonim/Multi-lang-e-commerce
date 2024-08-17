import jwt from "jsonwebtoken";

export default function JWTverifier(req, res, next) {
  console.log("Cookies: ", req.cookies); // Debugging statement
  const token = req.cookies.jwt;
  console.log("Token: ", token); // Debugging statement
  if (!token) {
    return res.status(401).json({
      message: "No token Header",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "Invalid Token",
      });
    }
    req.user = user;
    next();
  });
}
