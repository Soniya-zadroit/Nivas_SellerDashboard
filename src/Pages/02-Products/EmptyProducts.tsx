import React, { useState } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useLocation } from "react-router-dom";
import type { MenuItem } from "primereact/menuitem";
import { Search } from "lucide-react";
import productIcon from "../../assets/Dashboard/Products.png";
import { IoMdAdd } from "react-icons/io";
import copy from "../../assets/Icons/copy.png";
import { PlainDropdown } from "../../components/LabelSelect";

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

// Sample JSON data for dropdowns
const categories = [
  { label: "All Categories", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Clothing", value: "clothing" },
  { label: "Home & Kitchen", value: "home_kitchen" },
];

const stocks = [
  { label: "All Stocks", value: "all" },
  { label: "In Stock", value: "in_stock" },
  { label: "Out of Stock", value: "out_of_stock" },
  { label: "Low Stock", value: "low_stock" },
];

const EmptyProducts: React.FC = () => {
  const location = useLocation();
  const currentLabel = pathToLabel[location.pathname] || "Products";

  // Breadcrumb items
  const breadcrumbItems: MenuItem[] = [{ label: currentLabel }];
  const home: MenuItem = { icon: "pi pi-home", url: "/dashboard" };

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStock, setSelectedStock] = useState("all");

  // Empty product list
  const products: any[] = [];

  // Empty message template
  const emptyMessageTemplate = () => (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="w-16 h-16 mb-4 text-gray-400">
        <img
          src={productIcon}
          alt="No Products"
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-gray-700 font-medium">No products to display</p>
      <p className="text-gray-500 text-sm mb-4">
        The products will be displayed here <br /> once you added them
      </p>
      <button className="bg-black flex flex-row cursor-pointer text-white rounded-full px-4 py-2 text-sm font-medium">
        <span>
          <IoMdAdd className="mr-2 mt-1 " />
        </span>
        <span>Add Product</span>
      </button>
    </div>
  );

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <BreadCrumb
        model={breadcrumbItems}
        home={home}
        className="mb-6"
        style={{ fontSize: "18px", fontWeight: 700 }}
      />

      {/* Top Filter Bar */}
      <div className="flex flex-row items-center bg-white shadow-sm h-[10vh] p-3 gap-3 mb-2">
       <div className=" flex flex-row gap-3 flex-grow">
         {/* Search */}
        <div className="relative  min-w-[100px]">
          <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search for Products"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full border rounded-lg pl-10 pr-4 py-2 text-sm  "
          />
        </div>

        {/* Categories Dropdown */}
        <div>
          <PlainDropdown
            value={selectedCategory}
            onChange={(val) => setSelectedCategory(val)}
            options={categories}
          />
        </div>

        {/* Stocks Dropdown */}
        <div>
          <PlainDropdown
            value={selectedStock}
            onChange={(val) => setSelectedStock(val)}
            options={stocks}
          />
        </div>
       </div>

        {/* Buttons */}
        <button className="border flex flex-row gap-2 cursor-pointer border-gray-400 rounded-full px-4 py-2 text-sm font-medium">
          <span>
            <img className="w-4 h-5" src={copy} alt="" />
          </span>{" "}
          <span> Bulk Upload</span>
        </button>
        <button className="bg-black flex flex-row cursor-pointer text-white rounded-full px-4 py-2 text-sm font-medium">
          <span>
            <IoMdAdd className="mr-2 mt-1 " />
          </span>{" "}
          <span>Add Product</span>
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow-sm overflow-hidden">
        <div className="p-4 text-lg font-semibold">All Products(0)</div>

        <DataTable
          value={products}
          emptyMessage={emptyMessageTemplate}
          className="text-sm"
          tableClassName="border-collapse"
        >
          <Column field="sku" header="SKU ID" />
          <Column field="product" header="Product" />
          <Column field="category" header="Category" />
          <Column field="subCategory" header="Sub Category" />
          <Column field="price" header="Price" />
          <Column field="stock" header="Stock" />
          <Column field="status" header="Status" />
          <Column header="Actions" />
        </DataTable>
      </div>
    </div>
  );
};

export default EmptyProducts;
