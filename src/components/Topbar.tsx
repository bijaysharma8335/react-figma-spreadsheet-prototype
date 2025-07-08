import { FiChevronRight, FiMoreHorizontal, FiSearch } from "react-icons/fi";
import notificationBell from "../assets/notification-bell.svg";
import user from "../assets/john.svg";
import mirror from "../assets/switch.svg";

const Topbar: React.FC = () => {
    return (
        <div className="flex justify-between gap-2 px-3 py-3 text-sm text-gray  border-b ml-2">
            {/* Left BreadCrumb */}
            <div className="flex items-center gap-2 px-2 cursor-pointer">
                <img src={mirror} alt="Switch" className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-400 hover:underline">Workspace</span>
                <FiChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 font-medium hover:underline">Folder 2</span>
                <FiChevronRight className="w-4 h-4 text-gray-400 " />
                <span className="font-medium text-black hover:underline">Spreadsheet 3</span>
                <FiMoreHorizontal className="w-4 h-4 text-gray-400" />
            </div>

            {/* Right BreadCrumb */}
            <div className="flex items-center gap-4">
                {/* Search box */}
                <div className="relative rounded ">
                    <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search within sheet"
                        className="pl-8 pr-2 py-1 border rounded  focus:outline-none text-xs bg-gray-100"
                    />
                </div>

                {/* Notification bell */}
                <button onClick={() => console.log("Notifications clicked")}>
                    <img src={notificationBell} className="text-lg text-gray-700" />
                </button>

                {/* User info */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={user} alt="User Avatar" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs text-gray-800 font-medium">John Doe</span>
                        <span className="text-xs text-gray-500">john.doe...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Topbar;
