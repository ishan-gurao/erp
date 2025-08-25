import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { tabs } from "../constants/tabs-name";
import { localization } from "../localization/localization";

export const Transactions = () => {
  const [selectedTab, setSelectedTab] = useState<string>("1");

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-row gap-1 items-center text-xl font-bold p-1">
          <HiOutlineShoppingCart />
          <span>{localization.TRANSACTIONS}</span>
        </div>
        <div className="flex flex-row gap-2 border-b">
          {tabs.map((tab) => (
            <div
              key={tab.value}
              className={`px-2 py-1 cursor-pointer font-semibold text-gray-500 ${
                selectedTab === tab.value
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : ""
              }`}
              onClick={() => handleChangeTab(tab.value)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
