import { FiChevronsRight, FiDownload, FiEyeOff, FiUpload } from "react-icons/fi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdFilterList } from "react-icons/md";
import { TbArrowAutofitDown } from "react-icons/tb";
import { FaShareSquare } from "react-icons/fa";
import icon from "../assets/icon.svg";

const Toolbar: React.FC = () => {
    return (
        <div className="flex gap-2 px-3 py-1.5 justify-between border-b border-[#eeeeee] text-sm ">
            {/* 🔹 Left Side: Label and actions */}

            <div className="flex items-center gap-5 ">
                {/* Toolbar label and arrow */}
                <button className=" flex items-center justify-center px-3 py-1 text-sm  gap-1 border-r-2 border-gray-300 cursor-default">
                    <span>Tool Bar</span> <FiChevronsRight className="w-4 h-4  " />
                </button>{" "}
                <button
                    onClick={() => console.log(" Hide Fields Clicked")}
                    className=" flex  items-center justify-center gap-1 cursor-default"
                >
                    <FiEyeOff className="w-4 h-4 " />
                    <span>Hide fields</span>
                </button>
                <button
                    onClick={() => console.log("Sort Clicked")}
                    className="flex  items-center justify-center  gap-1 cursor-default"
                >
                    <RiArrowUpDownFill className="w-4 h-4 " />
                    <span>Sort</span>
                </button>{" "}
                <button
                    onClick={() => console.log("Filter Clicked")}
                    className="  flex  items-center justify-center gap-1 cursor-default"
                >
                    <MdFilterList className="w-4 h-4 " />
                    <span>Filter</span>
                </button>
                <button
                    onClick={() => console.log("Cell view clicked")}
                    className="flex  items-center justify-center gap-1 cursor-default"
                >
                    <TbArrowAutofitDown className="w-4 h-4 " /> <span>Cell view</span>
                </button>
            </div>
            {/* Right Side */}

            <div className="flex items-center  gap-2">
                {/* Import and export  button */}
                <button
                    onClick={() => console.log("Import Clicked")}
                    className="flex items-center justify-center gap-1 px-2 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in cursor-default"
                >
                    <FiDownload className="w-4 h-4  " /> <span>Import</span>
                </button>
                <button
                    onClick={() => console.log("Export Clicked")}
                    className="flex items-center justify-center gap-1 px-2 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in cursor-default"
                >
                    <FiUpload className="w-4 h-4" />
                    <span>Export</span>
                </button>

                {/* Share button */}
                <button
                    onClick={() => console.log("Share Clicked")}
                    className="flex items-center justify-center gap-1 px-2 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in cursor-default"
                >
                    <FaShareSquare className="w-4 h-4" />
                    <span>Share</span>
                </button>
                <button
                    onClick={() => console.log("New Action Clicked")}
                    className="flex items-center gap-1 justify-center px-6 py-2 border rounded-md bg-[#4B6A4F] text-white cursor-default"
                >
                    <img src={icon} alt="New Action Icon" className="w-5 h-5" />
                    New Action
                </button>
            </div>
        </div>
    );
};
export default Toolbar;
