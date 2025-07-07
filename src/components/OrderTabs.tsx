import React, { useState } from "react";

const OrderTabs: React.FC = () => {
    const [tabs, setTabs] = useState<string[]>(["All Orders", "Pending", "Reviewed", "Arrived"]);
    const [activeTab, setActiveTab] = useState("All Orders");

    const handleAddSheet = () => {
        const newSheetNumber =  tabs.length + 1;
        const newSheetName = `Sheet ${newSheetNumber}`;
        setTabs([...tabs, newSheetName]);
        setActiveTab(newSheetName);
    };
    return (
        <div className="flex text-sm font-medium border-t border bg-white ">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`p-3 text-gray-500 cursor-default  ${
                        activeTab === tab
                            ? "border-t-2 border-green-800 text-green-800 bg-gray-300"
                            : "hover:bg-gray-200"
                    }`}
                >
                    {tab}
                </div>
            ))}
            {/* + Button */}
            <div onClick={handleAddSheet} className="p-2 text-gray-500 cursor-pointer hover:bg-gray-200 text-2xl hover:text-green-800">
                +
            </div>
        </div>
    );
};

export default OrderTabs;
