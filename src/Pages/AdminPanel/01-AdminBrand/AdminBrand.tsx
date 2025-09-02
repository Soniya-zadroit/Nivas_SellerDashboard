import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  ChevronDown,
  Star,
  Search,
  ArrowRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import positive from "../../../assets/AdminIcons/Positive.png";
import negative from "../../../assets/AdminIcons/Negavtive.png";
import { IoMdArrowForward } from "react-icons/io";
import type { MenuItem } from "primereact/menuitem";
import { BreadCrumb } from "primereact/breadcrumb";

const AdminBrand = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const breadcrumbItems: MenuItem[] = [
    {
      label: "Menu",
      url: "/menu",
      command: () => {
        window.location.href = "/menu";
      },
    },
    {
      label: "Brands",
    },
  ];
  const home: MenuItem = {
    icon: "pi pi-home",
    url: "/dashboard",
  };
  // Dashboard data
  const brandDashboard = {
    brandstatus: [
      {
        label: "Total Brands",
        value: "20",
        formatted: "+ 10%",
        isPositive: true,
      },
      {
        label: "Pending Approval",
        value: "10",
        formatted: "- 5%",
        isPositive: false,
      },
      {
        label: "Total Revenue",
        value: "₹30L",
        formatted: "+ 19%",
        isPositive: true,
      },
      {
        label: "Top Performing Brand",
        value: "Wrogn",
        formatted: "+ 49%",
        isPositive: true,
      },
    ],
    topPerformingBrands: [
      {
        brand: "HRX",
        totalSales: "3,350",
        revenue: "₹1,18,000",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        isReturnPositive: false,
        isExchangePositive: false,
      },
      {
        brand: "Being human",
        totalSales: "4,700",
        revenue: "₹1,66,000",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        isReturnPositive: true,
        isExchangePositive: true,
      },
      {
        brand: "Rowdy",
        totalSales: "4,250",
        revenue: "₹1,53,000",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        isReturnPositive: false,
        isExchangePositive: false,
      },
      {
        brand: "Wrogn",
        totalSales: "5,300",
        revenue: "₹1,78,000",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        isReturnPositive: true,
        isExchangePositive: true,
      },
      {
        brand: "Villian",
        totalSales: "3,500",
        revenue: "₹1,11,000",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        isReturnPositive: false,
        isExchangePositive: false,
      },
    ],
    topCampaigns: [
      {
        brand: "HRX",
        offer: "Flat 20% Discount",
        revenue: "₹1,18,000",
      },
      {
        brand: "Being human",
        offer: "Flat 50% Discount",
        revenue: "₹1,66,000",
      },
      {
        brand: "Rowdy",
        offer: "Flat 30% Discount",
        revenue: "₹1,53,000",
      },
      {
        brand: "Wrogn",
        offer: "Flat 10% Discount",
        revenue: "₹1,78,000",
      },
      {
        brand: "Villian",
        offer: "Flat 70% Discount",
        revenue: "₹1,11,000",
      },
    ],
    payoutOverview: {
      total: "2,15,09,030",
      paidPayments: "₹8,20,700",
      pendingPayments: "₹1,45,350",
      returns: "₹40,830",
    },
    brandRatings: [
      { brand: "HRX", totalRatings: "3,350", averageRating: 4.5 },
      { brand: "Being human", totalRatings: "4,700", averageRating: 4.2 },
      { brand: "Rowdy", totalRatings: "4,250", averageRating: 4.1 },
      { brand: "Wrogn", totalRatings: "5,300", averageRating: 4.0 },
      { brand: "Villian", totalRatings: "3,500", averageRating: 3.6 },
    ],
    averageOrderValue: [
      {
        brand: "HRX",
        totalOrders: "3,350",
        grossRevenue: "₹1,18,000",
        netRevenue: "₹1,07,000",
        grossAOV: "₹975",
        netAOV: "₹953",
        returnRate: "12%",
      },
      {
        brand: "Being human",
        totalOrders: "4,700",
        grossRevenue: "₹1,66,000",
        netRevenue: "₹1,34,000",
        grossAOV: "₹770",
        netAOV: "₹715",
        returnRate: "7%",
      },
      {
        brand: "Rowdy",
        totalOrders: "4,250",
        grossRevenue: "₹1,53,000",
        netRevenue: "₹1,23,000",
        grossAOV: "₹843",
        netAOV: "₹802",
        returnRate: "14%",
      },
      {
        brand: "Wrogn",
        totalOrders: "5,300",
        grossRevenue: "₹1,78,000",
        netRevenue: "₹1,68,000",
        grossAOV: "₹999",
        netAOV: "₹928",
        returnRate: "10%",
      },
      {
        brand: "Villian",
        totalOrders: "3,500",
        grossRevenue: "₹1,11,000",
        netRevenue: "₹1,01,000",
        grossAOV: "₹832",
        netAOV: "₹811",
        returnRate: "6%",
      },
    ],
  };

  // Multi-segment circular chart for payout overview
  const PayoutChart = ({ data, size = 200 }) => {
    const total = 21509030;
    const paidAmount = 820700;
    const pendingAmount = 145350;
    const returnsAmount = 40830;

    const paidPercentage = (paidAmount / total) * 1000;
    const pendingPercentage = (pendingAmount / total) * 7000;
    const returnsPercentage = (returnsAmount / total) * 8000;

    const radius = 60;
    const circumference = radius * 2 * Math.PI;

    return (
      <div className="flex items-center justify-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#10b981"
              strokeWidth="20"
              fill="none"
              strokeDasharray={`${
                (paidPercentage / 100) * circumference
              } ${circumference}`}
              strokeDashoffset="0"
            />

            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#f59e0b"
              strokeWidth="20"
              fill="none"
              strokeDasharray={`${
                (pendingPercentage / 100) * circumference
              } ${circumference}`}
              strokeDashoffset={`-${(paidPercentage / 100) * circumference}`}
            />

            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#ef4444"
              strokeWidth="20"
              fill="none"
              strokeDasharray={`${
                (returnsPercentage / 100) * circumference
              } ${circumference}`}
              strokeDashoffset={`-${
                ((paidPercentage + pendingPercentage) / 100) * circumference
              }`}
            />
          </svg>
        </div>
      </div>
    );
  };

  // Template functions for DataTables
  const brandTemplate = (rowData: any) => (
    <span className="text-sm font-medium text-gray-900">{rowData.brand}</span>
  );

  const salesTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.totalSales}</span>
  );

  const revenueTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.revenue}</span>
  );

  const returnsTemplate = (rowData: any) => (
    <div className="flex items-center gap-1">
      <span className="text-sm text-gray-900">{rowData.returns}</span>
      <span
        className={`text-xs flex items-center ${
          rowData.isReturnPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {rowData.isReturnPositive ? (
          <TrendingDown className="w-3 h-3" />
        ) : (
          <TrendingUp className="w-3 h-3" />
        )}
        {rowData.returnChange}
      </span>
    </div>
  );

  const exchangeTemplate = (rowData: any) => (
    <div className="flex items-center gap-1">
      <span className="text-sm text-gray-900">{rowData.exchange}</span>
      <span
        className={`text-xs flex items-center ${
          rowData.isExchangePositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {rowData.isExchangePositive ? (
          <TrendingDown className="w-3 h-3" />
        ) : (
          <TrendingUp className="w-3 h-3" />
        )}
        {rowData.exchangeChange}
      </span>
    </div>
  );

  const offerTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.offer}</span>
  );

  const ratingTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.totalRatings}</span>
  );

  const avgRatingTemplate = (rowData: any) => (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4 text-yellow-400 fill-current" />
      <span className="text-sm font-medium">{rowData.averageRating}</span>
    </div>
  );

  const ordersTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.totalOrders}</span>
  );

  const grossRevenueTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.grossRevenue}</span>
  );

  const netRevenueTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.netRevenue}</span>
  );

  const grossAOVTemplate = (rowData: any) => (
    <span className="text-sm text-red-500">{rowData.grossAOV} ↓10.3%</span>
  );

  const netAOVTemplate = (rowData: any) => (
    <span className="text-sm text-red-500">{rowData.netAOV} ↓10.3%</span>
  );

  const returnRateTemplate = (rowData: any) => (
    <span className="text-sm text-gray-700">{rowData.returnRate}</span>
  );
  const itemsPerPage = 5;
  const totalItems = brandDashboard.topPerformingBrands.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const getCurrentPageItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return brandDashboard.topPerformingBrands.slice(start, end);
  };

  // ✅ Custom pagination footer (reusable)
  const customPaginationTemplate = () => {
    if (totalItems === 0) return null;

    return (
      <div className="flex items-center justify-between w-full px-4 py-3 bg-white border-t">
        {/* Left side - Brands count */}
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium text-gray-900">Brands</span>
          <span className="mx-2">{startIndex}</span>
          <span className="mx-1">-</span>
          <span className="mx-1">{endIndex}</span>
          <span className="mx-1">of</span>
          <span className="mx-1">{totalItems}</span>
        </div>

        {/* Middle - Next button */}
        {/* <div className="flex items-center">
          <button
            className="bg-black text-white px-2 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#000] transition-colors cursor-pointer  disabled:cursor-not-allowed"
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage >= totalPages}
          >
            <span>Next page</span>
            <IoMdArrowForward className="text-sm" />
          </button>
        </div> */}

        {/* Right side - Page selector */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Page</span>
          <select
            className="border rounded px-2 py-1 text-sm bg-white focus:outline-none focus:ring-2"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span>of {totalPages}</span>
        </div>
      </div>
    );
  };
  const [pageNumber, setPageNumber] = useState(1);
  const [brandSearch, setBrandSearch] = useState("");

  const filteredBrands = brandDashboard.averageOrderValue.filter((brandItem) =>
    brandItem.brand.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const totalBrands = filteredBrands.length;
  const totalPageCount = Math.ceil(totalBrands / itemsPerPage);
  const startBrandIndex = (pageNumber - 1) * itemsPerPage + 1;
  const endBrandIndex = Math.min(pageNumber * itemsPerPage, totalBrands);

  const getPaginatedBrands = () => {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredBrands.slice(start, end);
  };

  const customPaginationTemplateOder = () => {
    if (totalBrands === 0) return null;

    return (
      <div className="flex items-center justify-between w-full px-4 py-3 bg-white border-t">
        {/* Left side - Brands count */}
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium text-gray-900">Brands</span>
          <span className="mx-2">{startBrandIndex}</span>
          <span className="mx-1">-</span>
          <span className="mx-1">{endBrandIndex}</span>
          <span className="mx-1">of</span>
          <span className="mx-1">{totalBrands}</span>
        </div>

        {/* Middle - Next button */}
        <div className="flex items-center">
          <button
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#000] transition-colors cursor-pointer  disabled:cursor-not-allowed"
            onClick={() =>
              setPageNumber(Math.min(pageNumber + 1, totalPageCount))
            }
            disabled={pageNumber >= totalPageCount}
          >
            <span>Next page</span>
            <IoMdArrowForward className="text-sm" />
          </button>
        </div>

        {/* Right side - Page selector */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Page</span>
          <select
            className="border rounded px-2 py-1 text-sm bg-white focus:outline-none focus:ring-2"
            value={pageNumber}
            onChange={(e) => setPageNumber(Number(e.target.value))}
          >
            {Array.from({ length: totalPageCount }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span>of {totalPageCount}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Breadcrumb Area */}
      <div className="">
        <BreadCrumb
          model={breadcrumbItems}
          home={home}
          className="mb-6"
          style={{ fontSize: "18px", fontWeight: 700 }}
        />
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {brandDashboard.brandstatus.map((item, index) => {
          const isPositive = item.formatted?.startsWith("+");
          return (
            <div
              key={index}
              className="flex flex-row justify-between bg-white border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              {/* Left side */}
              <div>
                <p className="text-xs text-gray-500 mb-2">{item.label}</p>
                <p className="text-2xl font-bold text-black">{item.value}</p>
              </div>

              {/* Right side */}
              <div className="flex flex-col items-center gap-2 mt-2">
                <p
                  className={`text-sm font-medium ${
                    isPositive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.formatted}
                </p>
                <img
                  src={isPositive ? positive : negative}
                  alt={isPositive ? "Positive" : "Negative"}
                  className="w-16 h-6"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Performing Brands */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Top Performing Brands</h2>
            <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
              More →
            </span>
          </div>

          <DataTable
            value={getCurrentPageItems()} // ✅ only render paginated items
            className="p-datatable-sm"
            stripedRows
            showGridlines={false}
          >
            <Column field="brand" header="Brand" body={brandTemplate} />
            <Column
              field="totalSales"
              header="Total sales"
              body={salesTemplate}
            />
            <Column field="revenue" header="Revenue" body={revenueTemplate} />
            <Column field="returns" header="Returns" body={returnsTemplate} />
            <Column
              field="exchange"
              header="Exchange"
              body={exchangeTemplate}
            />
          </DataTable>

          {/* ✅ Dynamic Pagination Footer */}
          {customPaginationTemplate()}
        </div>

        {/* Top 5 Campaigns */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Top 5 Campaigns</h2>
            <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
              More →
            </span>
          </div>

          <DataTable
            value={brandDashboard.topCampaigns}
            className="p-datatable-sm"
            stripedRows
            showGridlines={false}
          >
            <Column field="brand" header="Brand" body={brandTemplate} />
            <Column field="offer" header="Offer" body={offerTemplate} />
            <Column field="revenue" header="Revenue" body={revenueTemplate} />
          </DataTable>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Payout Overview */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Payout Overview</h2>
            <span className="text-sm text-gray-600">Jan 01 - Jan 28</span>
          </div>
          <div className=" flex  items-center justify-center">
            <div className="text-lg font-bold">Total:</div>
            <div className="text-xl font-bold">
              {brandDashboard.payoutOverview.total}
            </div>
          </div>

          <div className="flex flex-row">
            <PayoutChart data={brandDashboard.payoutOverview} />

            <div className="mt-10 space-y-3">
              <div className="flex gap-3 justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[12px] text-gray-600">
                    Paid Payments
                  </span>
                </div>
                <span className="text-[12px] font-medium">
                  {brandDashboard.payoutOverview.paidPayments}
                </span>
              </div>
              <div className="flex gap-3 justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-[12px] text-gray-600">
                    Pending Payments
                  </span>
                </div>
                <span className="text-[12px] font-medium">
                  {brandDashboard.payoutOverview.pendingPayments}
                </span>
              </div>
              <div className="flex gap-3 justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-[12px] text-gray-600">Returns</span>
                </div>
                <span className="text-[12px] font-medium">
                  {brandDashboard.payoutOverview.returns}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Brand Ratings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Top 5 Brand ratings</h2>
            <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
              More →
            </span>
          </div>

          <DataTable
            value={brandDashboard.brandRatings}
            className="p-datatable-sm"
            stripedRows
            showGridlines={false}
          >
            <Column field="brand" header="Brand" body={brandTemplate} />
            <Column
              field="totalRatings"
              header="Total ratings"
              body={ratingTemplate}
            />
            <Column
              field="averageRating"
              header="Average Ratings"
              body={avgRatingTemplate}
            />
          </DataTable>
        </div>
      </div>

      {/* Average Order Value */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Average Order Value</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Brands"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
              More →
            </span>
          </div>
        </div>

        <DataTable
          value={brandDashboard.averageOrderValue}
          className="p-datatable-sm"
          stripedRows
          showGridlines={false}
        >
          <Column field="brand" header="Brand" body={brandTemplate} />
          <Column
            field="totalOrders"
            header="Total Orders"
            body={ordersTemplate}
          />
          <Column
            field="grossRevenue"
            header="Gross Revenue"
            body={grossRevenueTemplate}
          />
          <Column
            field="netRevenue"
            header="Net Revenue"
            body={netRevenueTemplate}
          />
          <Column field="grossAOV" header="Gross AOV" body={grossAOVTemplate} />
          <Column field="netAOV" header="Net AOV" body={netAOVTemplate} />
          <Column
            field="returnRate"
            header="Return Rate"
            body={returnRateTemplate}
          />
        </DataTable>

        {/* ✅ Dynamic Pagination Footer */}
        {customPaginationTemplateOder()}
      </div>
    </div>
  );
};

export default AdminBrand;
