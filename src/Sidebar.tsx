import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/Images/logo.png";

import { RxDashboard } from "react-icons/rx";

import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiBuildingLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import logout from "./assets/Icons/Logout.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Package } from "@phosphor-icons/react/dist/ssr";

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard", // Make sure this matches your route exactly
      icon: <RxDashboard />,
    },
    {
      label: "Products",
      path: "/products",
      icon: <Package size={20} color="#2b2c2c" />,
    },
    {
      label: "Orders",
      path: "/",
      icon: <HiOutlineShoppingBag />,
    },
    {
      label: "Inventory Management",
      path: "/",
      icon: <RiBuildingLine />,
    },
    {
      label: "Analytics",
      path: "/",
      icon: <GrAnalytics />,
    },
    {
      label: "Campaign Management",
      path: "/",
      icon: <HiOutlineSpeakerphone />,
    },
    {
      label: "Reviews",
      path: "/",
      icon: <FaRegStar />,
    },
  ];

  // Function to determine if a menu item is active
  const isMenuItemActive = (itemPath: string) => location.pathname === itemPath;

  

  return (
    <div className="min-h-screen w-64 shadow-md p-3 bg-[#FFBB1D] flex flex-col justify-between">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="mb-2 w-30 cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <p className="text-[10px] text-black mb-2 px-4">MAIN MENU</p>

        {/* Menu */}
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = isMenuItemActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center  gap-3 px-4 py-2 rounded-3xl transition-colors
                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:bg-gray-200"
                }
              `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-4  flex flex-col gap-3 mb-5 px-4 py-2">
        <p className="text-[10px] font-normal ">OTHER</p>
        <p className="flex items-center gap-2 text-[14px]">
          <span className="text-xl">
            <IoNotificationsOutline />
          </span>
          <span className="text-sm">Notification</span>
        </p>
        <p className="flex items-center gap-2 text-[14px]">
          <span className="text-xl">
            <RiSettingsLine />
          </span>
          <span className="text-sm">Settings</span>
        </p>
        <p className="flex items-center gap-2 text-[14px] border border-black rounded-3xl  px-2 py-1 cursor-pointer max-w-[215px]">
          <span className="w-8 h-8">
            <img src={logout} alt="Logout" />
          </span>
          <span className="truncate text-sm">HRX by Hrithik Roshan</span>
          <span className="text-xl ml-auto">
            <MdLogout />
          </span>
        </p>
      </div>
    </div>
  );
};

// Sidebar.tsx
export const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: <RxDashboard /> },
  { label: "Products", path: "/products", icon: <Package /> },
  { label: "Orders", path: "/orders", icon: <HiOutlineShoppingBag /> },
  {
    label: "Inventory Management",
    path: "/inventory",
    icon: <RiBuildingLine />,
  },
  { label: "Analytics", path: "/analytics", icon: <GrAnalytics /> },
  {
    label: "Campaign Management",
    path: "/campaigns",
    icon: <HiOutlineSpeakerphone />,
  },
  { label: "Reviews", path: "/reviews", icon: <FaRegStar /> },
];
