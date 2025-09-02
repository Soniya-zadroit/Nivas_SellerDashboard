import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { useLocation } from "react-router-dom";
import type { MenuItem } from "primereact/menuitem";
import save from "../../assets/Icons/save.png";

const AddProducts: React.FC = () => {
  const location = useLocation();

  // Define the breadcrumb items for Add Product page
  const breadcrumbItems: MenuItem[] = [
    {
      label: "Products",
      url: "/products",
      command: () => {
        // Optional: Handle navigation if needed
        window.location.href = "/products";
      },
    },
    {
      label: "Add Product",
    },
  ];

  // Home breadcrumb item
  const home: MenuItem = {
    icon: "pi pi-home",
    url: "/dashboard",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="p-6">
        <BreadCrumb
          model={breadcrumbItems}
          home={home}
          className="mb-6"
          style={{ fontSize: "18px", fontWeight: 700 }}
        />

        {/* Page Content */}
        <div className="">
          <div className="bg-white rounded-lg shadow-sm p-2">
            <h1 className="text-xl  font-bold text-gray-900 ">
              Add New Product
            </h1>
            <button className="border flex flex-row border-black bg-white text-black hover:bg-gray-100  px-4 py-2 rounded-full cursor-pointer">
              <span>
                <img src={save} alt="Save" className="w-5 h-5 mr-1" />
              </span>
              <span>Save Draft</span>
            </button>
             <button className="border flex flex-row border-white bg-black text-white   px-4 py-2 rounded-full cursor-pointer">
            
              <span>Submit for Approval</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
