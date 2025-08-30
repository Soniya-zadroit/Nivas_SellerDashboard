import React from "react";
import { X } from "lucide-react"; // for close button icon
import { Upload, FileDown } from "lucide-react"; // for icons
import copy from "../../assets/Icons/copy.png";

const Bulkupload: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-[600px] p-6 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className=" flex flex-row gap-5">
          <div className=" border-2 border-[#F8F8F8] rounded-xl p-3 text-gray-900">
            <img src={copy} alt="" className=""/>
          </div>
          <div className="text-[18px]">
            <div >Bulk Upload</div>

            <div className="text-sm text-gray-500 mt-1">
              {" "}
              Upload multiple products at once using our bulk upload feature.
              Download the template, fill in your product details, and upload to
              save time.
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Download Template */}
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <FileDown className="w-8 h-8 text-gray-700 mb-2" />
            <h3 className="font-medium text-gray-800">Download template</h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              Download the CSV template to get started with bulk upload.
            </p>
            <button className="mt-3 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800">
              Download Template
            </button>
          </div>

          {/* Upload Document */}
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <Upload className="w-8 h-8 text-gray-700 mb-2" />
            <h3 className="font-medium text-gray-800">Upload document</h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              Upload your filled CSV file to complete the bulk upload.
            </p>
            <button className="mt-3 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800">
              Upload Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulkupload;
