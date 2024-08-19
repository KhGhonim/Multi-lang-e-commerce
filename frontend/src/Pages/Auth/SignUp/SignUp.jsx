import { useTheme } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

export default function SignUp() {
  const theme = useTheme().palette.mode;
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);

  const API = process.env.REACT_APP_BASE_URL;

  const nevigate = useNavigate();
  const handlesubmit = async (eo) => {
    eo.preventDefault();
    setloading(true);
    if (!firstname || !lastname || !email || !password) {
      setloading(false);
      toast.warning("Please fill all the fields");
    }
    if (!emailRegex.test(email)) {
      setloading(false);
      toast.warning("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setloading(false);
      toast.warning(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
      );
      return;
    }

    const IsUserExists = await fetch(
      `${API}/api/auth/userExist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await IsUserExists.json();

    if (data.IsUserExist) {
      toast.warning("Account already exists");
      setloading(false);
      eo.target.reset();
      return;
    }

    const response = await fetch(`${API}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });
    console.log(response);

    if (response.ok) {
      toast.success("Account created");
      setloading(false);
      nevigate("/login");
    } else {
      toast.warning("Account is not created, try again later");
      setloading(false);
    }

    setloading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div
        className={`max-w-md w-full space-y-8 p-10  rounded-lg  ${
          theme === "dark" ? "border-2 border-white" : "shadow-lg"
        }`}
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold">Sign Up</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your account
          </p>
        </div>
        <form onSubmit={handlesubmit} className="mt-8 space-y-6 text-black">
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <label htmlFor="firstname" className="sr-only">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="firstname"
                onChange={(eo) => setfirstname(eo.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>

            <div>
              <label htmlFor="lastname" className="sr-only">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                onChange={(eo) => setlastname(eo.target.value)}
                autoComplete="lastname"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                onChange={(eo) => setemail(eo.target.value)}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                onChange={(eo) => setpassword(eo.target.value)}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="ForgetPassword"
                className={`font-medium ${
                  theme === "dark" ? "text-white" : "text-black"
                } `}
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              disabled={loading}
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-400 hover:text-blue-500 transition-all duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
