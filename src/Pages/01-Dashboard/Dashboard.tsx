import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Plus,
  Bell,
  Star,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";
import DonutChart from "../../Graph/donut-chart";
import { cn } from "../../lib/Utils";
import lowstock from "../../assets/Icons/lowstock.png";
import outofstock from "../../assets/Icons/outofstock.png";
import campaign from "../../assets/Icons/campaign.png";
import products from "../../assets/Icons/products.png";
import active from "../../assets/Icons/receipt-disscount.png";
import sealimg from "../../assets/Icons/SealCheck.png";
import revenue from "../../assets/Icons/chart.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuItem } from "primereact/menuitem";
import { BreadCrumb } from "primereact/breadcrumb";
import DashboardSkeleton from "./DashboardSkeleton";

// RingChart component
const calculateRingSize = ({
  size = 96,
  width = 20,
  gap = 4,
  index,
  total,
}) => {
  const position = total - index;
  return size + position * width * 2 + gap * position * 2;
};

function RingChart({ size = 96, gap = 4, width = 20, className, rings = [] }) {
  const totalWidth = calculateRingSize({
    size,
    width,
    gap,
    index: 0,
    total: rings.length,
  });

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{
        minWidth: totalWidth + gap * rings.length * 4,
        minHeight: totalWidth + gap * rings.length * 4,
      }}
    >
      {rings.map((ring, index) => {
        const ringSize = calculateRingSize({
          size,
          width,
          gap,
          index,
          total: rings.length,
        });
        return (
          <DonutChart
            key={`ring_${index}`}
            size={ringSize}
            {...ring}
            progressWidth={width}
            circleWidth={width}
            className={cn("absolute", ring.className)}
          />
        );
      })}
    </div>
  );
}

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
const Dashboard = () => {
  const location = useLocation();
  const currentLabel = pathToLabel[location.pathname] || "Dashboard";

  // Breadcrumb items
  const breadcrumbItems: MenuItem[] = [{ label: currentLabel }];
  const home: MenuItem = { url: "/dashboard" };
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTimeframe, setSelectedTimeframe] = useState("1 Week");

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  // JSON Data Structure
  const dashboardData = {
    lifetimeNumbers: [
      { label: "Total SKUs", value: "450", formatted: "" },
      { label: "Total Sales", value: "8,400", formatted: "/₹10L" },
      { label: "Orders in Progress", value: "178", formatted: "/₹30.2k" },
      { label: "Returns & Refunds", value: "740", formatted: "/₹30.2k" },
      { label: "Exchanges", value: "1,119", formatted: "/₹56.6k" },
    ],
    salesOverview: {
      total: "₹5,00,000",
      chartData: [
        { time: "12AM", sales: 40000 },
        { time: "2AM", sales: 10000 },
        { time: "4AM", sales: 20000 },
        { time: "6AM", sales: 35000 },
        { time: "8AM", sales: 30000 },
        { time: "10AM", sales: 200000 },
        { time: "12PM", sales: 45000 },
        { time: "2PM", sales: 60000 },
        { time: "4PM", sales: 70000 },
        { time: "6PM", sales: 85000 },
        { time: "8PM", sales: 50000 },
        { time: "10PM", sales: 40000 },
      ],
    },
    brandRatings: {
      rating: 4.4,
      totalRatings: "5.7K Ratings",
      breakdown: {
        positive: 58.5,
        neutral: 26.03,
        negative: 15.47,
      },
    },
    averageOrderValue: {
      value: "₹900",
      chartData: [
        { day: "Mon", value: 1200 },
        { day: "Tue", value: 1500 },
        { day: "Wed", value: 4500 },
        { day: "Thu", value: 1800 },
        { day: "Fri", value: 4200 },
        { day: "Sat", value: 3500 },
        { day: "Sun", value: 3200 },
      ],
    },
    topProducts: [
      {
        id: 1,
        name: "HRX cotton T-shirt",
        price: "₹899",
        totalSales: "1,450",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        image: "👕",
      },
      {
        id: 2,
        name: "HRX sweatshirt",
        price: "₹1,299",
        totalSales: "1,225",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        image: "🧥",
      },
      {
        id: 3,
        name: "HRX Sports shoe",
        price: "₹1,599",
        totalSales: "1,099",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        image: "👟",
      },
      {
        id: 4,
        name: "HRX black suit",
        price: "₹1,399",
        totalSales: "953",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        image: "🤵",
      },
      {
        id: 5,
        name: "HRX Bleach denim",
        price: "₹3,500",
        totalSales: "732",
        returns: "125",
        returnChange: "10.3%",
        exchange: "125",
        exchangeChange: "10.3%",
        image: "👖",
      },
    ],
    notifications: [
      {
        id: 1,
        type: "stock",
        title: "Low stock alert",
        message: "Only 5 units left on Red flannel slimfit shirts.",
        time: "2 hrs",
        icon: lowstock,
      },
      {
        id: 2,
        type: "stock",
        title: "Out of stock",
        message: "Oversized full sleeve sweatshirts are out of stock.",
        time: "2 hrs",
        icon: outofstock,
      },
      {
        id: 3,
        type: "campaign",
        title: "Campaign started",
        message: "The Fresh Deal friday campaign started.",
        time: "2 hrs",
        icon: campaign,
      },
      {
        id: 4,
        type: "approval",
        title: "Product approved",
        message: "64 products from your last request got approval.",
        time: "2 hrs",
        icon: products,
      },
    ],
    payoutOverview: {
      total: "1,00,880",
      paidPayments: "₹80,700",
      pendingPayments: "₹15,350",
      returns: "₹4,830",
    },
    discounts: {
      activeCoupons: 4,
      totalRedemptions: 428,
      revenueFromCoupons: "₹1.4L",
      coupons: [
        { code: "SAVE20", discount: "20%", orders: 120, revenue: "₹42,000" },
        { code: "FLAT500", discount: "₹500", orders: 85, revenue: "₹33,900" },
        { code: "NEW50", discount: "50%", orders: 54, revenue: "₹23,987" },
        { code: "NEW50", discount: "50%", orders: 54, revenue: "₹23,987" },
      ],
    },
  };

  // Find max sales dynamically
  const maxSales = Math.max(
    ...dashboardData.salesOverview.chartData.map((d) => d.sales)
  );

  // Round max sales to nearest "nice" value (like 200000, 100000, etc.)
  const step = Math.pow(10, Math.floor(Math.log10(maxSales)));
  const roundedMax = Math.ceil(maxSales / step) * step;

  // Define number of ticks
  const ticks = 4; // means 0%, 25%, 50%, 75%, 100%
  const yAxisValues = [
    { label: "₹5L", value: 500000 },
    { label: "₹1L", value: 100000 },
    { label: "₹50k", value: 50000 },
    { label: "₹10k", value: 10000 },
    { label: "₹0", value: 0 },
  ];

  // Multi-segment circular chart for payout overview
  const MultiSegmentCircular = ({ data, size = 128 }) => {
    const total = 100880;
    const paidAmount = 80700;
    const pendingAmount = 15350;
    const returnsAmount = 4830;

    const paidPercentage = (paidAmount / total) * 100;
    const pendingPercentage = (pendingAmount / total) * 100;
    const returnsPercentage = (returnsAmount / total) * 100;

    const radius = 52;
    const circumference = radius * 2 * Math.PI;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Base circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="15"
            fill="none"
          />

          {/* Paid payments (green) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#10b981"
            strokeWidth="15"
            fill="none"
            strokeDasharray={`${
              (paidPercentage / 100) * circumference
            } ${circumference}`}
            strokeDashoffset="0"
            className="transition-all duration-500"
          />

          {/* Pending payments (yellow) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#f59e0b"
            strokeWidth="15"
            fill="none"
            strokeDasharray={`${
              (pendingPercentage / 100) * circumference
            } ${circumference}`}
            strokeDashoffset={`-${(paidPercentage / 100) * circumference}`}
            className="transition-all duration-500"
          />

          {/* Returns (red) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#ef4444"
            strokeWidth="15"
            fill="none"
            strokeDasharray={`${
              (returnsPercentage / 100) * circumference
            } ${circumference}`}
            strokeDashoffset={`-${
              ((paidPercentage + pendingPercentage) / 100) * circumference
            }`}
            className="transition-all duration-500"
          />
        </svg>
      </div>
    );
  };

  // Line chart component for Average Order Value
  const LineChart = ({ data, width = 300, height = 180 }) => {
    const maxValue = Math.max(...data.map((d) => d.value));
    const minValue = 0;
    const step = 1000;
    const yAxisValues = [];

    for (let i = minValue; i <= maxValue + step; i += step) {
      yAxisValues.push(i);
    }

    const range = maxValue - minValue || 1;

    const points = data
      .map((item, index) => {
        const x = (index / (data.length - 1)) * (width - 60) + 40;
        const y =
          height - 30 - ((item.value - minValue) / range) * (height - 60);
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <div className="relative w-full h-48">
        <svg width={width} height={height} className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* --- AXIS LINES (Purple) --- */}
          {/* Y-Axis */}
          {/* Y-axis line */}
          <line
            x1={40}
            x2={40}
            y1={10}
            y2={height - 30}
            stroke="#655B96"
            strokeWidth="2"
          />

          {/* X-axis line */}
          <line
            x1={40}
            x2={width - 20}
            y1={height - 30}
            y2={height - 30}
            stroke="#655B96"
            strokeWidth="2"
          />

          {/* Y-axis grid & labels */}
          {/* Y-axis grid & labels */}
          {yAxisValues.map((val, i) => {
            const y = height - 30 - ((val - minValue) / range) * (height - 60);
            return (
              <g key={i}>
                {/* keep this as dotted grid lines */}
                <line
                  x1={40}
                  x2={width - 20}
                  y1={y}
                  y2={y}
                  stroke="#e5e7eb"
                  // ❌ remove strokeDasharray from axis lines, keep only for grid
                  strokeDasharray={i === 0 ? "" : "4"}
                />
                <text
                  x={30}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="#6b7280"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Area under the line */}
          <path
            d={`M 40,${height - 30} L ${points} L ${width - 20},${
              height - 30
            } Z`}
            fill="url(#lineGradient)"
          />

          {/* Main line */}
          <polyline
            points={points}
            fill="none"
            stroke="#06b6d4"
            strokeWidth="3"
          />

          {/* Data points */}
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * (width - 60) + 40;
            const y =
              height - 30 - ((item.value - minValue) / range) * (height - 60);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#06b6d4"
                stroke="white"
                strokeWidth="2"
              />
            );
          })}

          {/* X-axis labels */}
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * (width - 60) + 40;
            return (
              <text
                key={index}
                x={x}
                y={height - 10}
                textAnchor="middle"
                fontSize="10"
                fill="#6b7280"
              >
                {item.day}
              </text>
            );
          })}
        </svg>
      </div>
    );
  };

  // Define rings for the brand ratings chart
  const brandRatingRings = [
    {
      progress: dashboardData.brandRatings.breakdown.positive,
      trackClassName: "text-green-100",
      progressClassName: "text-green-500",
    },
    {
      progress: dashboardData.brandRatings.breakdown.neutral,
      trackClassName: "text-yellow-100",
      progressClassName: "text-yellow-400",
    },
    {
      progress: dashboardData.brandRatings.breakdown.negative,
      trackClassName: "text-red-100",
      progressClassName: "text-red-500",
    },
  ];

  // discount

  const codeTemplate = (rowData: any) => {
    return (
      <span className="text-xs font-medium text-gray-900">{rowData.code}</span>
    );
  };

  const discountTemplate = (rowData: any) => {
    return <span className="text-xs text-gray-700">{rowData.discount}</span>;
  };

  const ordersTemplate = (rowData: any) => {
    return <span className="text-xs text-gray-700">{rowData.orders}</span>;
  };

  const revenueTemplate = (rowData: any) => {
    return <span className="text-xs text-gray-700">{rowData.revenue}</span>;
  };

  // Template functions for DataTable columns
  const productTemplate = (rowData: any) => {
    return (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
          {rowData.image}
        </div>
        <span className="text-sm text-gray-900">{rowData.name}</span>
      </div>
    );
  };

  const priceTemplate = (rowData: any) => {
    return <span className="text-sm text-gray-900">{rowData.price}</span>;
  };

  const salesTemplate = (rowData: any) => {
    return <span className="text-sm text-gray-900">{rowData.totalSales}</span>;
  };

  const returnsTemplate = (rowData: any) => {
    return (
      <div className="flex items-center gap-1">
        <span className="text-sm text-gray-900">{rowData.returns}</span>
        <span className="text-xs text-red-500 flex items-center">
          <HiArrowTrendingUp className="w-3 h-3" /> {rowData.returnChange}
        </span>
      </div>
    );
  };

  const exchangeTemplate = (rowData: any) => {
    return (
      <div className="flex items-center gap-1">
        <span className="text-sm text-gray-900">{rowData.exchange}</span>
        <span className="text-xs text-green-500 flex items-center">
          <HiArrowTrendingDown className="w-3 h-3" /> {rowData.exchangeChange}
        </span>
      </div>
    );
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/dashboard");
        const data = await response.json();
        // Process your data
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <>
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            {/* <h1 className="text-2xl font-semibold mb-6 text-gray-900">
        Dashboard <span className="text-gray-400">/ Menu</span>
      </h1> */}

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
                  navigate(toggle ? "/dashboard" : "/emptydashboard");
                }}
                className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
              >
                {toggle ? "Go to Dashboard" : "Go to Empty Dashboard"}
              </button>
            </div>

            {/* Lifetime Numbers */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-4">Lifetime numbers</p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {dashboardData.lifetimeNumbers.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-xs text-gray-500 mb-2">{item.label}</p>
                    <p className="text-2xl font-bold text-black">
                      {item.value}
                      <span className="text-xs text-gray-400 font-normal ml-1">
                        {item.formatted}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Sales Overview */}
              <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-black">
                    Sales Overview
                  </h2>
                  <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 cursor-pointer">
                    <span className="text-sm text-gray-600">Daily</span>
                    <ChevronDown size={16} className="text-gray-600" />
                  </div>
                </div>

                <div className="text-2xl font-bold text-black mb-2">
                  {dashboardData.salesOverview.total}
                </div>

                <div className="relative h-64 px-8 mb-4">
                  {/* Y-Axis */}
                  <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400">
                    {yAxisValues.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <span className="w-12 text-right">{item.label}</span>
                        <div className="flex-1 border-t border-dashed border-gray-200 ml-2"></div>
                      </div>
                    ))}
                  </div>

                  {/* Bars */}
                  <div className="ml-12 flex items-end justify-between h-full">
                    {dashboardData.salesOverview.chartData.map(
                      (item, index) => {
                        const height = (item.sales / maxSales) * 200;
                        const isHighlighted = item.sales === maxSales;

                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center group"
                          >
                            <div className="relative mb-2">
                              <div
                                className={`w-2 rounded transition-all duration-300 hover:opacity-80 ${
                                  isHighlighted ? "bg-red-500" : "bg-orange-400"
                                }`}
                                style={{ height: `${Math.max(height, 8)}px` }}
                              />
                              {/* Tooltip */}
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                ₹{(item.sales / 1000).toFixed(0)}k
                              </div>
                            </div>
                            {/* X-Axis label */}
                            <span className="text-xs text-gray-500">
                              {item.time}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              {/* Brand Ratings */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-black mb-6">
                  Brand Ratings
                </h2>

                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <RingChart
                      rings={brandRatingRings}
                      size={100}
                      gap={3}
                      width={8}
                      className="bg-white"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Star
                        className="w-6 h-6 text-yellow-400 mb-1"
                        fill="currentColor"
                      />
                      <div className="text-2xl font-bold text-gray-900">
                        {dashboardData.brandRatings.rating}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-lg font-semibold text-gray-900">
                    {dashboardData.brandRatings.totalRatings}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Positive</span>
                    </div>
                    <span className="text-sm font-medium">
                      {dashboardData.brandRatings.breakdown.positive}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Neutral</span>
                    </div>
                    <span className="text-sm font-medium">
                      {dashboardData.brandRatings.breakdown.neutral}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Negative</span>
                    </div>
                    <span className="text-sm font-medium">
                      {dashboardData.brandRatings.breakdown.negative}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Average Order Value */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-black mb-6">
                  Average order value
                </h2>

                <div className="text-2xl font-bold text-black mb-8">
                  {dashboardData.averageOrderValue.value}
                </div>

                <LineChart data={dashboardData.averageOrderValue.chartData} />

                <div className="flex justify-between text-xs text-gray-500 mt-4 px-2">
                  {dashboardData.averageOrderValue.chartData.map(
                    (item, index) => (
                      <span key={index}>{item.day}</span>
                    )
                  )}
                </div>
                <div className="flex mt-6   bg-[#f3f3f3] rounded-sm">
                  {["1 Week", "1 Month", "1 Year", "All time"].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedTimeframe(period)}
                      className={`px-2 py-2  text-xs rounded-sm transition-colors cursor-pointer
        ${
          selectedTimeframe === period
            ? "bg-white shadow text-black"
            : "text-gray-700"
        }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Performing Products */}
              <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-black">
                    Top Performing Products
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 cursor-pointer">
                      <span className="text-sm text-gray-600">Daily</span>
                      <ChevronDown size={16} className="text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer text-gray-600">
                      <span className="text-sm">More</span>
                      <MdOutlineArrowForwardIos size={13} />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto ">
                  <DataTable
                    value={dashboardData.topProducts}
                    className="p-datatable-sm"
                    stripedRows
                    showGridlines={false}
                    size="small"
                  >
                    <Column
                      field="name"
                      header="Product"
                      body={productTemplate}
                      style={{ minWidth: "200px" }}
                    />
                    <Column
                      field="price"
                      header="Price"
                      body={priceTemplate}
                      style={{ minWidth: "80px" }}
                    />
                    <Column
                      field="totalSales"
                      header="Total sales"
                      body={salesTemplate}
                      style={{ minWidth: "100px" }}
                    />
                    <Column
                      field="returns"
                      header="Returns"
                      body={returnsTemplate}
                      style={{ minWidth: "120px" }}
                    />
                    <Column
                      field="exchange"
                      header="Exchange"
                      body={exchangeTemplate}
                      style={{ minWidth: "120px" }}
                    />
                  </DataTable>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div className="text-sm text-gray-600">
                    Products <span className="font-medium">5</span> of 10
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
                      Next page <ArrowRight size={14} />
                    </button>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>Page</span>
                      <select className="border rounded px-2 py-1">
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <span>of 2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-5">
              {/* Notifications */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-base font-semibold text-black">
                    Notifications
                  </h2>
                  <div className="flex items-center gap-1 cursor-pointer text-gray-600">
                    <span className="text-xs">More</span>
                    <MdOutlineArrowForwardIos size={11} />
                  </div>
                </div>

                <div className="space-y-2">
                  {dashboardData.notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex gap-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                          <img
                            src={notification.icon}
                            alt={notification.title}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-medium text-gray-900">
                            {notification.title}
                          </h4>
                          <span className="text-[10px] text-gray-400">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-600">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payout Overview */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-base font-semibold text-black">
                    {" "}
                    {/* reduced from text-lg */}
                    Payout overview
                  </h2>
                  <div className="flex items-center gap-1 cursor-pointer text-gray-600">
                    <span className="text-xs">More</span>{" "}
                    {/* reduced from text-sm */}
                    <MdOutlineArrowForwardIos size={12} />{" "}
                    {/* slightly smaller icon */}
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <MultiSegmentCircular data={dashboardData.payoutOverview} />
                </div>

                <div className="text-center mb-6">
                  <div className="text-lg font-bold text-gray-900">
                    {" "}
                    {/* reduced from text-xl */}
                    Total: {dashboardData.payoutOverview.total}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">
                        Paid Payments
                      </span>{" "}
                      {/* reduced */}
                    </div>
                    <span className="text-xs font-medium">
                      {dashboardData.payoutOverview.paidPayments}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">
                        Pending Payments
                      </span>
                    </div>
                    <span className="text-xs font-medium">
                      {dashboardData.payoutOverview.pendingPayments}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Returns</span>
                    </div>
                    <span className="text-xs font-medium">
                      {dashboardData.payoutOverview.returns}
                    </span>
                  </div>
                </div>
              </div>

              {/* Discounts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-base font-semibold text-black">
                    Discounts
                  </h2>{" "}
                  {/* reduced from text-lg */}
                  <div className="flex items-center gap-1 cursor-pointer text-gray-600">
                    <span className="text-xs">More</span>{" "}
                    {/* reduced from text-sm */}
                    <MdOutlineArrowForwardIos size={12} />{" "}
                    {/* slightly smaller */}
                  </div>
                </div>

                <div className="flex flex-row gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center  gap-1 mb-1">
                      <div>
                        <img src={active} alt="" className="w-5 h-5" />
                      </div>{" "}
                      {/* smaller icon */}
                      <div className=" text-[9px] text-gray-600">
                        Active Coupons
                      </div>
                    </div>
                    <div className=" text-lg font-bold text-gray-900">
                      {dashboardData.discounts.activeCoupons}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <div>
                        <img src={sealimg} alt="" className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] text-gray-600">
                        Total Redemptions
                      </span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {dashboardData.discounts.totalRedemptions}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <div>
                        <img src={revenue} alt="" className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] text-gray-600">
                        Revenue from Coupons
                      </span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {dashboardData.discounts.revenueFromCoupons}
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <DataTable
                    value={dashboardData.discounts.coupons}
                    className="p-datatable-sm"
                    stripedRows
                    showGridlines={false}
                    size="small"
                  >
                    <Column
                      field="code"
                      header="Code"
                      body={codeTemplate}
                      style={{ minWidth: "60px" }}
                    />
                    <Column
                      field="discount"
                      header="Discount"
                      body={discountTemplate}
                      style={{ minWidth: "70px" }}
                    />
                    <Column
                      field="orders"
                      header="Orders"
                      body={ordersTemplate}
                      style={{ minWidth: "60px" }}
                    />
                    <Column
                      field="revenue"
                      header="Revenue"
                      body={revenueTemplate}
                      style={{ minWidth: "80px" }}
                    />
                  </DataTable>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Dashboard;
