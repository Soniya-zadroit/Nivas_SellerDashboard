// Sidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/Images/logo.png";

import { RxDashboard } from "react-icons/rx";
import { BiPackage } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiBuildingLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import logout from "./assets/Icons/Logout.png";
import { PiUserCircleGear } from "react-icons/pi";
import { BrandIcon } from "./components/Icons";
import { PiMoneyWavyLight } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { RiGlobalLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";


type MenuItem = { label: string; path: string; icon: React.ReactNode };

// ✅ Dummy menu data for Role 1
const role1Menu: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard", icon: <RxDashboard /> },
  { label: "Products", path: "/products", icon: <BiPackage /> },
  { label: "Orders", path: "/orders", icon: <HiOutlineShoppingBag /> },
  { label: "Inventory", path: "/inventory", icon: <RiBuildingLine /> },
  { label: "Analytics", path: "/analytics", icon: <GrAnalytics /> },
  { label: "Campaigns", path: "/campaigns", icon: <HiOutlineSpeakerphone /> },
  { label: "Reviews", path: "/reviews", icon: <FaRegStar /> },
];

// ✅ Dummy menu data for Role 2
const role2Menu: MenuItem[] = [
  { label: "Dashboard", path: "/admin-dashboard", icon: <RxDashboard /> },
  {
    label: "User Management",
    path: "/user-management",
    icon: <PiUserCircleGear />,
  },
  { label: "Brands", path: "/admin-brands", icon: <BrandIcon /> },
  { label: "Products", path: "/admin-products", icon: <BiPackage /> },
  { label: "Orders", path: "/admin-orders", icon: <HiOutlineShoppingBag /> },
  { label: "Payments", path: "/admin-payments", icon: <PiMoneyWavyLight /> },
  { label: "Integration", path: "/admin-integration", icon: <VscSettings /> },
  { label: "Global setting", path: "/admin-global", icon: <RiGlobalLine /> },
  { label: "Analytics", path: "/admin-analytics", icon: <GrAnalytics /> },
  { label: "Audit logs", path: "/admin-audit", icon: <CgList /> },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  // 👉 Dummy roleId (later you can fetch from API or localStorage)
  const roleId = 1; // change to 2 for testing

  // Pick menu based on roleId
  const menuItems = roleId === 2 ? role1Menu : role2Menu;

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
                className={`flex items-center gap-3 px-4 py-2 rounded-3xl transition-colors
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-gray-200"
                  }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 flex flex-col gap-3 mb-5 px-4 py-2">
        <p className="text-[10px] font-normal">OTHER</p>
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
        <p className="flex items-center gap-2 text-[14px] border border-black rounded-3xl px-2 py-1 cursor-pointer max-w-[215px]">
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
