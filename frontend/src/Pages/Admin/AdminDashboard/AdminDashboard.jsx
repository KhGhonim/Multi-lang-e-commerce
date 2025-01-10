import { useTheme } from "@mui/material";
import Card from "Components/Admin/Card/Card";
import { metrics, recentActivity } from "DB/db";
import { FaUsers } from "react-icons/fa6";
import { GoPackage } from "react-icons/go";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiShoppingBag3Fill } from "react-icons/ri";

export default function AdminDashboard() {
  const theme = useTheme().palette.mode;
  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Dashboard Overview</h2>
        <p className="mt-1 text-sm text-gray-500">
          Last login: Today at 9:30 AM
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Total Sales"
          value={metrics.totalSales}
          icon={LuCircleDollarSign}
          trend={{ value: 12, isPositive: true }}
        />
        <Card
          title="Total Orders"
          value={metrics.totalOrders}
          icon={RiShoppingBag3Fill}
          trend={{ value: 8, isPositive: true }}
        />
        <Card
          title="Active Products"
          value={metrics.activeProducts}
          icon={GoPackage}
          trend={{ value: 2, isPositive: false }}
        />
        <Card
          title="New Customers"
          value={metrics.newCustomers}
          icon={FaUsers}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <span className="text-sm text-gray-700">{activity.message}</span>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
