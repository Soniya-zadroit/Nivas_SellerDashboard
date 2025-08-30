import React, { useState } from "react";
import { BreadCrumb } from "primereact/breadcrumb";

import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Plus } from "lucide-react";

import nodata from "../../assets/Dashboard/Nodata.png";
import nodataIcon from "../../assets/Dashboard/NodataIcon.png";
import notifiIcon from "../../assets/Dashboard/Notification.png";
import productIcon from "../../assets/Dashboard/Products.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import type { MenuItem } from "primereact/menuitem";

// Map routes to labels
const pathToLabel: Record<string, string> = {
  "/emptydashboard": "Dashboard",
  "/dashboard": "Dashboard",
  "/emptyproducts": "Products",

  "/orders": "Orders",
  "/inventory": "Inventory Management",
  "/analytics": "Analytics",
  "/campaigns": "Campaign Management",
  "/reviews": "Reviews",
};

const EmptyDashboard: React.FC = () => {
  const location = useLocation();
  const currentLabel = pathToLabel[location.pathname] || "Dashboard";

  // Breadcrumb items
  const breadcrumbItems: MenuItem[] = [{ label: currentLabel }];

  // Home item
  const home: MenuItem = { url: "/dashboard" };

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Dynamic Breadcrumb */}
      <div className="flex justify-between items-center mb-6">
        <BreadCrumb
          model={breadcrumbItems}
          home={home}
          className=" "
          style={{ fontSize: "18px", fontWeight: 700 }}
        />

        {/* Toggle Button */}
        <button
          onClick={() => {
            setToggle(!toggle);
            navigate(toggle ? "/emptydashboard" : "/dashboard");
          }}
          className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
        >
          {toggle ? "Go to Empty Dashboard" : "Go to Dashboard"}
        </button>
      </div>
      {/* Lifetime numbers section */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Lifetime numbers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Total SKUs */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-2">Total SKUs</p>
            <p className="text-2xl font-bold text-black">
              0 <span className="text-xs text-gray-400 font-normal">/₹0k</span>
            </p>
          </div>

          {/* Total Sales */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-2">Total Sales</p>
            <p className="text-2xl font-bold text-black">
              0 <span className="text-xs text-gray-400 font-normal">/₹0k</span>
            </p>
          </div>

          {/* Orders in Progress */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-2">Orders in Progress</p>
            <p className="text-2xl font-bold text-black">
              0 <span className="text-xs text-gray-400 font-normal">/₹0k</span>
            </p>
          </div>

          {/* Returns & Refunds */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-2">Returns & Refunds</p>
            <p className="text-2xl font-bold text-black">
              0 <span className="text-xs text-gray-400 font-normal">/₹0k</span>
            </p>
          </div>

          {/* Exchanges */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-2">Exchanges</p>
            <p className="text-2xl font-bold text-black">
              0 <span className="text-xs text-gray-400 font-normal">/₹0k</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Overview */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-black">Sales Overview</h2>
            <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 cursor-pointer">
              <span className="text-sm text-gray-600">Daily</span>
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          </div>
          <div className="text-lg font-semibold text-black mb-8">₹--</div>
          <div
            className="flex flex-col items-center justify-center h-48 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${nodata})` }}
          >
            <div className="w-16 h-16  flex items-center justify-center mb-1">
              <div className="w-10 h-10">
                <img src={nodataIcon} alt="" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-gray-700 mb-1">
              No data to display
            </h3>
            <p className="text-xs text-gray-500 text-center max-w-[40%] mb-5">
              This graph will show you the Sales overview of your brand in Nivas
            </p>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-black">Notifications</h2>
            <div className="flex flex-row ">
              <span className="text-sm text-gray-400 cursor-pointer ">
                More
              </span>
              <span className=" text-2xl text-gray-400 cursor-pointer">
                <MdOutlineKeyboardArrowRight className="" />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-48">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src={notifiIcon} alt="" />
            </div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              No notifications received
            </h3>
            <p className="text-xs text-gray-500 text-center">
              All the notifications and updates will be displayed here
            </p>
          </div>
        </div>

        {/* Average order value */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-black mb-6">
            Average order value
          </h2>
          <div className="flex flex-col items-center justify-center h-48">
            <div className="w-16 h-16  flex items-center justify-center mb-4">
              <div className="w-10 h-10">
                <img src={nodataIcon} alt="" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-gray-700 mb-2">
              No data to display
            </h3>
            <p className="text-xs text-gray-500 text-center max-w-[100%]">
              This graph will show you the <br />
              Sales overview of your brand in Nivas
            </p>
          </div>
        </div>

        {/* Top Products */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-black">Top Products</h2>
            <div className="flex flex-row ">
              <span className="text-sm text-gray-400 cursor-pointer ">
                More
              </span>
              <span className=" text-2xl text-gray-400 cursor-pointer">
                <MdOutlineKeyboardArrowRight className="" />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-48">
            <div className="w-16 h-16  flex items-center justify-center mb-4">
              <div className="w-10 h-10">
                <img src={productIcon} alt="" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-gray-700 mb-2">
              No data to display
            </h3>
            <p className="text-xs text-gray-500 text-center mb-2 ">
              Top products from your brand will be <br /> displayed here
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
              <Plus size={16} />
              Add Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyDashboard;
