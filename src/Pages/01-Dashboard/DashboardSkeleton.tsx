import React from 'react';
import { Skeleton } from 'primereact/skeleton';

const DashboardSkeleton = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-6">
        <Skeleton width="200px" height="2rem" />
        <Skeleton width="150px" height="2.5rem" borderRadius="8px" />
      </div>

      {/* Lifetime Numbers Skeleton */}
      <div className="mb-8">
        <Skeleton width="120px" height="1rem" className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <Skeleton width="80%" height="0.8rem" className="mb-2" />
              <Skeleton width="60%" height="1.5rem" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid - First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Sales Overview Skeleton */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton width="150px" height="1.5rem" />
            <Skeleton width="80px" height="2rem" borderRadius="6px" />
          </div>
          
          <Skeleton width="120px" height="2rem" className="mb-6" />
          
          {/* Chart Area */}
          <div className="relative h-64 mb-4">
            <div className="flex items-end justify-between h-full">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Skeleton 
                    width="8px" 
                    height={`${Math.random() * 150 + 50}px`} 
                    className="mb-2" 
                  />
                  <Skeleton width="25px" height="0.8rem" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Ratings Skeleton */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <Skeleton width="120px" height="1.5rem" className="mb-6" />
          
          {/* Circular Chart */}
          <div className="flex justify-center mb-6">
            <Skeleton shape="circle" size="120px" />
          </div>
          
          <div className="text-center mb-6">
            <Skeleton width="100px" height="1.2rem" />
          </div>
          
          {/* Rating Breakdown */}
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Skeleton width="4px" height="16px" />
                  <Skeleton width="60px" height="0.9rem" />
                </div>
                <Skeleton width="40px" height="0.9rem" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Average Order Value Skeleton */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <Skeleton width="160px" height="1.5rem" className="mb-6" />
          <Skeleton width="80px" height="2rem" className="mb-8" />
          
          {/* Line Chart Area */}
          <div className="h-48 mb-4">
            <Skeleton width="100%" height="180px" />
          </div>
          
          {/* Time Period Buttons */}
          <div className="flex mt-6 bg-[#f3f3f3] rounded-sm">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton 
                key={index} 
                width="60px" 
                height="2rem" 
                className="mx-1" 
                borderRadius="4px"
              />
            ))}
          </div>
        </div>

        {/* Top Performing Products Skeleton */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton width="200px" height="1.5rem" />
            <div className="flex items-center gap-4">
              <Skeleton width="80px" height="2rem" borderRadius="6px" />
              <Skeleton width="60px" height="1rem" />
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 pb-3 border-b border-gray-200 mb-4">
            <Skeleton width="80px" height="1rem" />
            <Skeleton width="50px" height="1rem" />
            <Skeleton width="80px" height="1rem" />
            <Skeleton width="60px" height="1rem" />
            <Skeleton width="70px" height="1rem" />
          </div>

          {/* Table Rows */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 items-center py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Skeleton shape="circle" size="40px" />
                <Skeleton width="120px" height="1rem" />
              </div>
              <Skeleton width="60px" height="1rem" />
              <Skeleton width="50px" height="1rem" />
              <div className="flex items-center gap-1">
                <Skeleton width="30px" height="1rem" />
                <Skeleton width="40px" height="0.8rem" />
              </div>
              <div className="flex items-center gap-1">
                <Skeleton width="30px" height="1rem" />
                <Skeleton width="40px" height="0.8rem" />
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <Skeleton width="120px" height="1rem" />
            <div className="flex items-center gap-4">
              <Skeleton width="100px" height="2rem" borderRadius="20px" />
              <Skeleton width="80px" height="1rem" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-row gap-5">
        {/* Notifications Skeleton */}
        <div className="bg-white border w-[100%] border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton width="100px" height="1.2rem" />
            <Skeleton width="50px" height="0.8rem" />
          </div>

          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex gap-2 p-2 border border-gray-200 rounded-md"
              >
                <Skeleton shape="circle" size="28px" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <Skeleton width="80px" height="0.8rem" />
                    <Skeleton width="30px" height="0.6rem" />
                  </div>
                  <Skeleton width="95%" height="0.7rem" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payout Overview Skeleton */}
        <div className="bg-white border w-[80%] border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton width="120px" height="1.2rem" />
            <Skeleton width="50px" height="0.8rem" />
          </div>

          <div className="flex justify-center mb-6">
            <Skeleton shape="circle" size="128px" />
          </div>

          <div className="text-center mb-6">
            <Skeleton width="150px" height="1.2rem" />
          </div>

          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Skeleton width="4px" height="16px" />
                  <Skeleton width="100px" height="0.8rem" />
                </div>
                <Skeleton width="60px" height="0.8rem" />
              </div>
            ))}
          </div>
        </div>

        {/* Discounts Skeleton */}
        <div className="bg-white border w-[100%] border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton width="80px" height="1.2rem" />
            <Skeleton width="50px" height="0.8rem" />
          </div>

          {/* Stats Row */}
          <div className="flex flex-row gap-4 mb-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Skeleton shape="circle" size="20px" />
                  <Skeleton width="60px" height="0.7rem" />
                </div>
                <Skeleton width="40px" height="1.2rem" />
              </div>
            ))}
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-4 gap-2 pb-2 border-b border-gray-200 mb-3">
            <Skeleton width="40px" height="0.8rem" />
            <Skeleton width="60px" height="0.8rem" />
            <Skeleton width="50px" height="0.8rem" />
            <Skeleton width="60px" height="0.8rem" />
          </div>

          {/* Table Rows */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="grid grid-cols-4 gap-2 py-2 border-b border-gray-100">
              <Skeleton width="50px" height="0.8rem" />
              <Skeleton width="40px" height="0.8rem" />
              <Skeleton width="30px" height="0.8rem" />
              <Skeleton width="60px" height="0.8rem" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;