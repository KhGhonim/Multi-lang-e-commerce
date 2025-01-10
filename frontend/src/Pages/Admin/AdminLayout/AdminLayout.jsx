import { AdminnavItems } from "DB/db";
import useLogOut from "../../../Hooks/useLogOut";
import { CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";

export default function AdminLayout() {
  const location = useLocation();
  const theme = useTheme().palette.mode;

  const { HandleSignOut } = useLogOut();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  if (!user.currentUser || !user.currentUser.user.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return (
    <div
      className={`h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      } flex flex-col md:flex-row`}
    >
      <aside
        className={`md:w-64 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } border-gray-200 md:border-r lg:top-0 fixed bottom-0 left-0 right-0  `}
      >
        <Link
          to="/admin"
          className="hidden md:flex h-16 items-center px-6 border-b border-gray-200"
        >
          <h1
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Admin Portal
          </h1>
        </Link>
        <nav className="flex md:block overflow-x-auto md:overflow-visible p-4 space-x-4 md:space-x-0 md:space-y-1">
          {AdminnavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-1 ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                } items-center max-lg:justify-center lg:space-y-2 md:space-x-3 px-3 py-2 rounded-lg  ${
                  isActive
                    ? "bg-blue-50 !text-black"
                    : "text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block absolute bottom-0 w-64 p-4 border-t border-gray-200">
          <button
            onClick={HandleSignOut}
            className={`flex items-center space-x-3 ${
              theme === "dark"
                ? "text-white hover:text-gray-100"
                : "text-gray-700 hover:text-gray-900"
            } w-full px-3 py-2`}
          >
            <CiLogout className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 lg:pl-64 overflow-auto pb-20 md:pb-0">
        <div
          className={`h-16 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } border-b border-gray-200 flex items-center px-6`}
        >
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm ${
                theme === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Welcome back,
            </span>
            <span
              className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              {user?.currentUser?.user?.Firstname}{" "}
              {user?.currentUser?.user?.LastName}
            </span>
          </div>
        </div>
        <div className="p-6 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
