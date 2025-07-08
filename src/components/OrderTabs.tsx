import React, { useState } from "react";

const OrderTabs: React.FC = () => {
    const [tabs, setTabs] = useState<string[]>(["All Orders", "Pending", "Reviewed", "Arrived"]);
    const [activeTab, setActiveTab] = useState("All Orders");

    const handleAddSheet = () => {
        const newSheetNumber = tabs.length + 1;
        const newSheetName = `Sheet ${newSheetNumber}`;
        setTabs([...tabs, newSheetName]);
        setActiveTab(newSheetName);
    };
    return (
        <div className="flex item-center fixed  bottom-0 z-20  w-full h-[44px] px-2  font-medium border-t border-gray-300 bg-white shadow-sm pl-[30px]  ">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-sm transition-all font-medium   text-[#757575] cursor-default  ${
                        activeTab === tab
                            ? "bg-[#E8F0E9] text-[#3E5741] font-medium  border-[#3E5741] border-t-2"
                            : "hover:bg-gray-200"
                    }`}
                >
                    {tab}
                </div>
            ))}
            {/* + Button */}
            <button
                onClick={handleAddSheet}
                className="w-[32px] h-[32px] text-2xl text-[#757575] hover:bg-gray-200 flex items-center justify-center p-6"
            >
                +
            </button>
        </div>
    );
};

export default OrderTabs;
