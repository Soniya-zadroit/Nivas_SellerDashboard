import React, { useState, useEffect } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useLocation } from "react-router-dom";
import type { MenuItem } from "primereact/menuitem";
import { ArrowDown, ArrowUp, ArrowUpDown, Search } from "lucide-react";
import productIcon from "../../assets/Dashboard/Products.png";
import { IoMdAdd } from "react-icons/io";
import copy from "../../assets/Icons/copy.png";
import { PlainDropdown } from "../../components/LabelSelect";
import group from "../../assets/Icons/group.png";
import { IoMdArrowForward } from "react-icons/io";
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
  { label: "Men Topwear", value: "men_topwear" },
  { label: "Men Accessories", value: "men_accessories" },
  { label: "Women Accessories", value: "women_accessories" },
  { label: "Men Footwear", value: "men_footwear" },
  { label: "Bags", value: "bags" },
];

const stocks = [
  { label: "All Stocks", value: "all" },
  { label: "In Stock", value: "in_stock" },
  { label: "Out of Stock", value: "out_of_stock" },
  { label: "Low Stock", value: "low_stock" },
];

// Sample products data - expanded to 25+ items for pagination testing
const sampleProducts = [
  {
    sku: "SHT-2025-0009-BLU",
    product: {
      name: "Blue Denim",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Casual Shirts",
    price: 1299,
    stock: 310,
    status: "In Stock",
  },
  {
    sku: "JCK-2025-0050-KHK",
    product: {
      name: "Khaki Jacket",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Jackets / Vests",
    price: 899,
    stock: 112,
    status: "In Stock",
  },
  {
    sku: "HAT-2025-0048-GLA",
    product: {
      name: "Summer Hat",
      image: group,
    },
    category: "Women Accessories",
    subCategory: "Caps / Hats",
    price: 699,
    stock: 78,
    status: "In Stock",
  },
  {
    sku: "HAT-2025-0007-BRN",
    product: {
      name: "Brown Leather",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Caps / Hats",
    price: 699,
    stock: 5,
    status: "Low Stock",
  },
  {
    sku: "BAG-2025-0006-NVA",
    product: {
      name: "Navy Blue Bag",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Bags",
    price: 550,
    stock: 0,
    status: "Out of Stock",
  },
  {
    sku: "SHT-2025-0031-BLK",
    product: {
      name: "Ocean Shirt",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Casual Shirts",
    price: 899,
    stock: 68,
    status: "In Stock",
  },
  {
    sku: "SHT-2025-0043-NAV",
    product: {
      name: "Formal Shirt",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Formal Shirts",
    price: 599,
    stock: 10,
    status: "Low Stock",
  },
  {
    sku: "TSH-2025-0041-BLU",
    product: {
      name: "Oversized Tee",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "T-Shirts",
    price: 499,
    stock: 8,
    status: "Low Stock",
  },
  {
    sku: "TSH-2025-0050-RED",
    product: {
      name: "Half Sleeve",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "T-Shirts",
    price: 399,
    stock: 59,
    status: "In Stock",
  },
  {
    sku: "SNE-2025-0003-RED",
    product: {
      name: "Sneaker",
      image: group,
    },
    category: "Men Footwear",
    subCategory: "Sneakers",
    price: 899,
    stock: 189,
    status: "In Stock",
  },
  // Additional products for pagination
  {
    sku: "TSH-2025-0052-GRN",
    product: {
      name: "Green Polo",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "T-Shirts",
    price: 799,
    stock: 45,
    status: "In Stock",
  },
  {
    sku: "SHO-2025-0021-BLK",
    product: {
      name: "Black Boots",
      image: group,
    },
    category: "Men Footwear",
    subCategory: "Boots",
    price: 1599,
    stock: 23,
    status: "In Stock",
  },
  {
    sku: "WAT-2025-0015-SIL",
    product: {
      name: "Silver Watch",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Watches",
    price: 2499,
    stock: 15,
    status: "In Stock",
  },
  {
    sku: "JEA-2025-0033-BLU",
    product: {
      name: "Blue Jeans",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Jeans",
    price: 1899,
    stock: 87,
    status: "In Stock",
  },
  {
    sku: "CAP-2025-0011-RED",
    product: {
      name: "Red Cap",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Caps / Hats",
    price: 299,
    stock: 156,
    status: "In Stock",
  },
  {
    sku: "SWE-2025-0028-GRY",
    product: {
      name: "Grey Sweater",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Sweaters",
    price: 1599,
    stock: 34,
    status: "In Stock",
  },
  {
    sku: "SAN-2025-0019-TAN",
    product: {
      name: "Tan Sandals",
      image: group,
    },
    category: "Men Footwear",
    subCategory: "Sandals",
    price: 699,
    stock: 2,
    status: "Low Stock",
  },
  {
    sku: "BEL-2025-0007-BRN",
    product: {
      name: "Brown Belt",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Belts",
    price: 799,
    stock: 91,
    status: "In Stock",
  },
  {
    sku: "SHO-2025-0044-WHT",
    product: {
      name: "White Shorts",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Shorts",
    price: 899,
    stock: 67,
    status: "In Stock",
  },
  {
    sku: "SUN-2025-0013-BLK",
    product: {
      name: "Black Sunglasses",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Sunglasses",
    price: 1299,
    stock: 0,
    status: "Out of Stock",
  },
  {
    sku: "HOO-2025-0025-NAV",
    product: {
      name: "Navy Hoodie",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Hoodies",
    price: 1899,
    stock: 42,
    status: "In Stock",
  },
  {
    sku: "TRA-2025-0038-GRY",
    product: {
      name: "Grey Trackpant",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Track Pants",
    price: 1199,
    stock: 78,
    status: "In Stock",
  },
  {
    sku: "WAL-2025-0022-BLK",
    product: {
      name: "Black Wallet",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Wallets",
    price: 899,
    stock: 125,
    status: "In Stock",
  },
  {
    sku: "TRO-2025-0017-KHA",
    product: {
      name: "Khaki Trousers",
      image: group,
    },
    category: "Men Topwear",
    subCategory: "Trousers",
    price: 1599,
    stock: 9,
    status: "Low Stock",
  },
  {
    sku: "GLO-2025-0012-BLK",
    product: {
      name: "Black Gloves",
      image: group,
    },
    category: "Men Accessories",
    subCategory: "Gloves",
    price: 399,
    stock: 203,
    status: "In Stock",
  },
];

const Products: React.FC = () => {
  const location = useLocation();
  const currentLabel = pathToLabel[location.pathname] || "Products";

  // Breadcrumb items
  const breadcrumbItems: MenuItem[] = [{ label: currentLabel }];
  const home: MenuItem = { icon: "pi pi-home", url: "/dashboard" };

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStock, setSelectedStock] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const customSortIcon = (options: any) => {
    if (options.sorted) {
      if (options.sortOrder === 1) return <ArrowUp className="w-3 h-3 ml-1" />;
      if (options.sortOrder === -1)
        return <ArrowDown className="w-3 h-3 ml-1" />;
    }
    return <ArrowUpDown className="w-3 h-3 ml-1 text-gray-400" />;
  };

  // Filter products based on search and dropdowns
  useEffect(() => {
    let filtered = sampleProducts;

    // Filter by search text
    if (searchText) {
      filtered = filtered.filter(
        (product) =>
          product.product.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          product.sku.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => {
        const categoryMap: Record<string, string> = {
          electronics: "Electronics",
          clothing: "Clothing",
          home_kitchen: "Home & Kitchen",
          men_topwear: "Men Topwear",
          men_accessories: "Men Accessories",
          women_accessories: "Women Accessories",
          men_footwear: "Men Footwear",
        };
        return product.category === categoryMap[selectedCategory];
      });
    }

    // Filter by stock status
    if (selectedStock !== "all") {
      const stockMap: Record<string, string> = {
        in_stock: "In Stock",
        out_of_stock: "Out of Stock",
        low_stock: "Low Stock",
      };
      filtered = filtered.filter(
        (product) => product.status === stockMap[selectedStock]
      );
    }

    setFilteredProducts(filtered);
  }, [searchText, selectedCategory, selectedStock]);

  // Custom column templates
  const productTemplate = (rowData: any) => (
    <div className="flex items-center gap-2">
      {/* <img
        src={rowData.product.image}
        alt={rowData.product.name}
        className="w-8 h-8 rounded object-cover"
      /> */}
      <img src={group} alt="product" className="w-8 h-8 rounded object-cover" />

      <span className="font-medium text-xs">{rowData.product.name}</span>
    </div>
  );

  const priceTemplate = (rowData: any) => (
    <span className="font-semibold text-xs">₹{rowData.price}</span>
  );

  const stockTemplate = (rowData: any) => (
    <span
      className={`text-xs ${
        rowData.stock === 0 ? "text-red-500" : "text-gray-700"
      }`}
    >
      {rowData.stock}
    </span>
  );

  const statusTemplate = (rowData: any) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case "In Stock":
          return "bg-green-100 text-green-800";
        case "Low Stock":
          return "bg-yellow-100 text-yellow-800";
        case "Out of Stock":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
          rowData.status
        )}`}
      >
        {rowData.status}
      </span>
    );
  };

  const actionsTemplate = () => (
    <div className="flex items-center justify-center">
      <button className="text-gray-400 hover:text-gray-600">
        <svg
          width="12"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </button>
    </div>
  );

  // Empty message template
  const emptyMessageTemplate = () => (
    <div className="flex flex-col items-center justify-center  text-center">
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
    <div className=" bg-gray-50">
      {/* Breadcrumb */}
      <BreadCrumb
        model={breadcrumbItems}
        home={home}
        className="mb-6"
        style={{ fontSize: "18px", fontWeight: 700 }}
      />

      {/* Top Filter Bar */}
      <div className="flex lg:flex-row md:flex-col items-center overflow-hidden w-[full] bg-white shadow-sm h-[8vh] p-3 gap-2 mb-2">
        <div className=" flex flex-row gap-2 flex-grow">
          {/* Search */}
          <div className="relative   min-w-[100px]">
            <Search className="absolute left-2 top-2.5 text-gray-400 w-3 h-3" />
            <input
              type="text"
              placeholder="Search for Products"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-xs"
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
        <div className="flex lg:flex-row md:flex-row gap-2">
          <button className="border flex flex-row gap-1 cursor-pointer border-gray-400 rounded-full px-3 py-1.5 text-xs font-medium">
            <span>
              <img className="w-3 h-4" src={copy} alt="" />
            </span>{" "}
            <span> Bulk Upload</span>
          </button>
          <button className="bg-black flex flex-row cursor-pointer text-white rounded-full px-3 py-1.5 text-xs font-medium">
            <span>
              <IoMdAdd className="mr-1 mt-0.5 text-sm" />
            </span>{" "}
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow-sm overflow-hidden">
        <div className="p-4 text-lg font-semibold">
          All Products({filteredProducts.length})
        </div>

        <DataTable
          value={filteredProducts}
          emptyMessage={emptyMessageTemplate}
          className="text-[12px] "
          tableClassName="border-collapse w-full text-center text-[12px]"
          paginator
          rows={10}
          rowsPerPageOptions={[10]}
          paginatorTemplate="CurrentPageReport NextPageLink"
          currentPageReportTemplate="Products {first} of {totalRecords}"
          paginatorClassName="border-t bg-white p-3 flex justify-between items-center"
          scrollable
          scrollHeight="calc(100vh - 300px)"
          paginatorLeft={
            <div className="text-xs text-gray-600">
              Products {Math.min(filteredProducts.length > 0 ? 1 : 0, 10)} of{" "}
              {filteredProducts.length}
            </div>
          }
          paginatorRight={
            <div className="flex items-center gap-3">
              <button className="bg-black flex flex-row text-white px-3 py-2 rounded-full text-xs font-medium">
                <span> Next page </span>
                <span className="text-xl mr-1 ml-2">
                  <IoMdArrowForward />
                </span>
              </button>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>Page</span>
                <select className="border rounded px-2 py-1 text-xs">
                  <option>1</option>
                </select>
                <span>of 1</span>
              </div>
            </div>
          }
        >
          <Column field="sku" header="SKU ID" style={{ width: "20%" }} />
          <Column
            field="product"
            header="Product"
            body={productTemplate}
            sortable
            sortField="product.name"
            style={{ width: "18%" }}
          />
          <Column field="category" header="Category" style={{ width: "12%" }} />
          <Column
            field="subCategory"
            header="Sub Category"
            style={{ width: "10%" }}
          />
          <Column
            field="price"
            header="Price"
            body={priceTemplate}
            style={{ width: "10%" }}
          />
          <Column
            field="stock"
            header="Stock"
            body={stockTemplate}
            sortable
            style={{ width: "8%" }}
          />
          <Column
            field="status"
            header="Status"
            body={statusTemplate}
            sortable
            style={{ width: "12%" }}
          />
          <Column
            header="Actions"
            body={actionsTemplate}
            style={{ width: "2%" }}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default Products;
