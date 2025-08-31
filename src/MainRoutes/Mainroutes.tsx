// MainRoutes/Mainroutes.tsx
import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Login from "../Pages/00-Login/Login";
import PasswordPage from "../Pages/00-Login/PasswordPage";
import { Sidebar } from "../Sidebar";
import EmptyDashboard from "../Pages/01-Dashboard/EmptyDashboard";
import Dashboard from "../Pages/01-Dashboard/Dashboard";
import EmptyProducts from "../Pages/02-Products/EmptyProducts";
import Products from "../Pages/02-Products/Products";
import DashboardSkeleton from "../Pages/01-Dashboard/DashboardSkeleton";
import Bulkupload from "../Pages/02-Products/Bulkupload";

// Layout with sidebar
const Layout: React.FC = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-6 h-screen overflow-y-auto">
      <Outlet />
    </main>
  </div>
);

const Mainroutes: React.FC = () => {
  return (
    <Routes>
      {/* Routes without sidebar */}
      <Route path="/" element={<Login />} />
      <Route path="/password" element={<PasswordPage />} />

      {/* Routes with sidebar */}
      <Route element={<Layout />}>
        <Route path="/emptydashboard" element={<EmptyDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emptyproducts" element={<EmptyProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/loading" element={<DashboardSkeleton />} />
        <Route path="/bulkupload" element={<Bulkupload onClose={() => {}} />} />

        {/* add more sidebar pages here */}
      </Route>
    </Routes>
  );
};

export default Mainroutes;
