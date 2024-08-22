import { useTheme } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signInFailed,
  signInStart,
  signInSuccess,
} from "../../../Redux/userSlice";
import { useTranslation } from "react-i18next";

export default function Login() {
  const theme = useTheme().palette.mode;
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const handlesubmit = async (eo) => {
    eo.preventDefault();
    dispatch(signInStart());

    if (!email || !password) {
      setloading(false);
      return;
    }
    const API = process.env.REACT_APP_BASE_URL;

    const response = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      toast.warning("Account is not successfully signed in, try again later");
      dispatch(signInFailed(data.message));
    } else {
      toast.success("Successfully signed in");
      dispatch(signInSuccess(data));
      nevigate("/");
    }

    setloading(false);
  };
  const {t} = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className={`w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg  ${
          theme === "dark" ? "border-2 border-white" : "shadow-lg"
        }`}
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold">
          {t("Sign in to your account")}
          </h2>
        </div>
        <form onSubmit={handlesubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4 text-black">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                onChange={(eo) => setemail(eo.target.value)}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder={t("Email address")}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                onChange={(eo) => setpassword(eo.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder={t("Password")}
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row space-y-2 justify-between items-center ">
            <div className="text-xs">
              <Link
                to="/register"
                className="font-medium hover:text-blue-500 transition-all duration-300"
              >
                {t("Don't hava an account")} {t("Sign up")} {t("here")}
              </Link>
            </div>

            <div className="text-xs">
              <Link
                to="/ForgotPassword"
                className="font-medium hover:text-blue-500 transition-all duration-300"
              >
              {t("Forgot your password?")}
              </Link>
            </div>
          </div>
          <div>
            <button
              disabled={loading}
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
            >
              {loading ? (t("loading")) : (t("Sign in"))}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
