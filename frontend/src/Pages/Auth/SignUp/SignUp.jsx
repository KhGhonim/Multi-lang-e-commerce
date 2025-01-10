import { useTheme } from "@mui/material";
import useRegister from "Hooks/useRegister";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function SignUp() {
  const theme = useTheme().palette.mode;
  const { t } = useTranslation();

  const {
    RegisterHandler,
    setfirstname,
    setlastname,
    setemail,
    setpassword,
    loading,
  } = useRegister();
  return (
    <div className="min-h-screen flex items-center bg-gray-100 justify-center bg-background text-foreground">
      <ToastContainer />
      <div
        className={`max-w-md w-full space-y-8 p-10 bg-white rounded-lg  ${
          theme === "dark" ? "border-2 border-white" : "shadow-lg"
        }`}
      >
        <div className="text-center text-black">
          <h2 className="mt-6 text-3xl font-extrabold">{t("Sign up")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("Create a new account")}
          </p>
        </div>
        <form onSubmit={RegisterHandler} className="mt-8 space-y-6 text-black">
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
                placeholder={t("First Name")}
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
                placeholder={t("Last Name")}
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
                placeholder={t("Email address")}
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
                placeholder={t("Password")}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="ForgetPassword" className={`font-medium text-black `}>
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
              {loading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : (
                t("Sign up")
              )}
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-muted-foreground text-black">
          {t("Already have an account?")}
          <Link
            to="/login"
            className="font-medium text-blue-400 hover:text-blue-500 transition-all duration-200 m-1"
          >
            {t("Sign in")}
          </Link>
        </div>
      </div>
    </div>
  );
}
