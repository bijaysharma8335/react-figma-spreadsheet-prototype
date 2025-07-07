import { FiChevronsRight, FiDownload, FiEyeOff, FiUpload } from "react-icons/fi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdFilterList } from "react-icons/md";
import { TbArrowAutofitDown } from "react-icons/tb";
import { FaShareSquare } from "react-icons/fa";
import icon from "../assets/icon.svg";

export default function Toolbar() {
    return (
        <div className="flex flex-wrap items-center justify-between border-b px-4 py-2 bg-white">
            {/* Left Side  */}

            <div className="flex items-center gap-4">
                <span className="pr-3 py-1 text-sm  flex items-center gap-1">
                    Tool Bar <FiChevronsRight className="w-4 h-4  " />
                </span>{" "}
                <span className="text-gray-200 text-xl">|</span>
                <span
                    onClick={() => console.log(" Hide Fields Clicked")}
                    className="px-3 py-1  text-sm flex  items-center gap-1"
                >
                    <FiEyeOff className="w-4 h-4 " /> Hide fields
                </span>
                <span
                    onClick={() => console.log("Sort Clicked")}
                    className="px-3 py-1 text-sm  flex  items-center gap-1"
                >
                    <RiArrowUpDownFill className="w-4 h-4 " /> Sort
                </span>{" "}
                <span
                    onClick={() => console.log("Filter Clicked")}
                    className="px-3 py-1 text-sm  flex  items-center gap-1"
                >
                    <MdFilterList className="w-4 h-4 " /> Filter
                </span>
                <span
                    onClick={() => console.log("Cell view clicked")}
                    className="px-3 py-1 text-sm  flex  items-center gap-1"
                >
                    <TbArrowAutofitDown className="w-4 h-4 " /> Cell view
                </span>
            </div>
            {/* Right Side */}

            <div className="flex flex-wrap  gap-2">
                <button
                    onClick={() => console.log("Import Clicked")}
                    className="px-3 py-1 border rounded text-sm hover:bg-green-800 hover:text-white flex items-center gap-1"
                >
                    <FiDownload className="w-4 h-4 " /> Import
                </button>
                <button
                    onClick={() => console.log("Export Clicked")}
                    className="px-3 py-1 border rounded hover:bg-green-800 hover:text-white flex items-center gap-1"
                >
                    <FiUpload className="w-4 h-4" />
                    Export
                </button>
                <button
                    onClick={() => console.log("Share Clicked")}
                    className="px-3 py-1 border rounded hover:bg-green-800 hover:text-white flex items-center gap-1"
                >
                    <FaShareSquare className="w-4 h-4" /> Share
                </button>
                <button
                    onClick={() => console.log("New Action Clicked")}
                    className="px-3 py-1 border rounded-lg bg-green-800 text-white flex items-center gap-1"
                >
                    <img src={icon} alt="New Action Icon" className="w-5 h-5" />
                    New Action
                </button>
            </div>
        </div>
    );
}
