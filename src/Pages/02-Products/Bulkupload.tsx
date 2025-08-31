import React from "react";
import { X } from "lucide-react";
import copy from "../../assets/Icons/copy.png";
import download from "../../assets/Icons/download.png";
import upload from "../../assets/Icons/upload.png";

interface BulkuploadProps {
  onClose: () => void; // callback to close modal
}

const Bulkupload: React.FC<BulkuploadProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 ">
      <div className="bg-white rounded-xl shadow-2xl w-[600px] max-w-[95vw] p-6 relative z-[10000] mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black transition-colors z-[10001]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-row gap-5">
          <div className="border-2 border-[#F8F8F8] rounded-xl p-2 text-gray-900 flex-shrink-0">
            <img src={copy} alt="copy" className="w-6 h-6" />
          </div>
          <div className="text-[18px] flex-1">
            <div className="font-bold">Bulk Upload</div>
            <div className="text-sm text-gray-500 mt-1">
              Upload multiple products at once using our bulk upload feature.
              Download the template, fill in your product details, and upload to
              save time.
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {/* Download Template */}
          <div className="border-2 border-[#EAEAEA] rounded-xl p-4 flex flex-col  min-h-[140px]">
            <h3 className="font-bold text-xl  text-gray-800">Download template</h3>
            <p className="text-xs text-gray-500  mt-1">
              Download the CSV template to get started with bulk upload.
            </p>
            <button className="mt-3 w-[200px] flex flex-row gap-2 items-center bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              <img src={download} alt="Download" className="w-4 h-4" />
              <span>Download Template</span>
            </button>
          </div>

          {/* Upload Document */}
          <div className="border-2 border-[#EAEAEA] rounded-xl p-4 flex flex-col justify-center min-h-[140px]">
            <h3 className="font-bold text-xl text-gray-800">Upload document</h3>
            <p className="text-xs text-gray-500  mt-1">
              Upload your filled CSV file to complete the bulk upload.
            </p>
            <button className="mt-3 w-[200px] flex flex-row gap-2 items-center bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              <img src={upload} alt="Upload" className="w-4 h-4" />
              <span>Upload Document</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulkupload;