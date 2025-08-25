import { InputNumber, Select } from "antd";
import { useState } from "react";
import { FcInfo } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { localization } from "../../localization/localization";
import { CommonSearch } from "../common-components/search";

const dummyProducts = [
  {
    id: "001500-001",
    name: "BENMOORE WOODLUXE STAIN REMOVE 1G",
    price: 49.57,
    discountPrice: 59.48,
    extra: 0.75,
    qty: 2,
  },
];

export const Newtab = () => {
  const [products, setProducts] = useState(dummyProducts);

  const handleQtyChange = (id: string, value: number | null) => {
    if (value === null) return;
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: value } : p))
    );
  };

  //   const handleRemove = (id: string) => {
  //     setProducts((prev) => prev.filter((p) => p.id !== id));
  //   };
  return (
    <div className="flex flex-row gap-2 p-2">
      <div className="w-[20%] h-full border overflow-y-auto rounded">
        <div className="flex flex-col p-2 bg-white border-b">
          <div className="flex flex-row justify-between items-center">
            <span>303</span>
            <RxCross2 className="cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">303 Main Street/Dale Eubank</span>
            <span className="text-gray-400">Tier 2 Contractor</span>
          </div>
        </div>
        <div className="flex items-center justify-center border-b">
          <button
            className="bg-transparent text-blue-600 font-bold py-2 px-4 m-2 rounded border border-blue-500"
            onClick={() => {}}
          >
            {localization.SEARCH_SALES_HISTORY}
          </button>
        </div>
        <div className="flex flex-col gap-2 p-2 border-b">
          <span className="font-bold">{localization.JOB}</span>
          <CommonSearch placeholder={localization.SEARCH} />
        </div>
        <div className="flex flex-col gap-2 p-2 border-b">
          <span className="font-bold">{localization.CONTACTS}</span>
          <div className="flex flex-row justify-between border border-gray-200 rounded-md p-2 bg-blue-50">
            <span className="font-semibold">Whiteland Works</span>
            <span className="text-blue-800 font-bold text-xs">PRIMARY</span>
          </div>
        </div>
        <div className="flex flex-col border-b">
          <div className="flex flex-row justify-between items-center">
            <Select
              className="w-[40%] m-2"
              placeholder="Select"
              options={[
                { value: "financing", label: "Financing" },
                { value: "cash", label: "Cash" },
                { value: "check", label: "Check" },
                { value: "credit_card", label: "Credit Card" },
              ]}
            />
            <span className="font-semibold text-blue-800 cursor-pointer m-2">
              {localization.GENERATE_STATEMENT}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center p-2">
            <span className="text-[14px] text-gray-600">
              {localization.TOTAL_BALANCE}
            </span>
            <span className="font-semibold text-sm">$0.00</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 border">
          <span className="font-bold">{localization.SAVED_CARDS}</span>
        </div>
      </div>
      <div className="w-[80%] h-full flex flex-col gap-2">
        <div className="bg-white flex flex-col">
          <div className="p-2 border-b flex flex-row gap-3 justify-between items-center">
            <CommonSearch placeholder={localization.SEARCH_FOR_A_PRODUCT} />
            <InputNumber size="large" />
            <button
              className="bg-blue-500 text-white font-bold py-1 px-3 rounded border border-blue-500"
              onClick={() => {}}
            >
              {localization.ADD}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 px-3 py-2 text-gray-600 font-semibold border-b">
            <div>PRODUCT</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>SUBTOTAL</div>
          </div>
          {products.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-4 gap-2 items-center px-3 py-2 border-b"
            >
              <div className="flex flex-col">
                <span className="text-blue-600 underline cursor-pointer text-sm">
                  {p.id}
                </span>
                <span className="font-semibold">{p.name}</span>
                <div className="flex gap-2 mt-1">
                  <button className="border px-2 py-1 text-xs rounded">
                    Return
                  </button>
                  <button className="border px-2 py-1 text-xs rounded">
                    Add note
                  </button>
                </div>
              </div>

              <div>
                <span className="font-semibold">${p.price.toFixed(2)}</span>
                <span className="ml-1 text-sm text-gray-500">+ ${p.extra}</span>
                <div className="line-through text-gray-400 text-sm">
                  ${p.discountPrice.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <InputNumber
                  min={1}
                  value={p.qty}
                  onChange={(val) => handleQtyChange(p.id, val)}
                  className="w-20"
                />
                <span className="text-green-500 text-xs">✓ {p.qty}</span>
              </div>

              <div className="font-semibold">
                ${(p.price + p.extra) * p.qty}
              </div>

              {/* Remove */}
              {/* <div>
                <FiX
                  className="cursor-pointer text-red-500"
                  onClick={() => handleRemove(p.id)}
                />
              </div> */}
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded border">
          <div className="flex flex-row gap-4">
            {/* Left Side - Form Fields */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Purchase order & Address */}
              <div className="flex flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold text-sm mb-1">
                    Purchase order
                  </label>
                  <select className="border rounded p-2 text-sm">
                    <option>Select PO</option>
                    <option>PO-001</option>
                    <option>PO-002</option>
                  </select>
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold text-sm mb-1">Address</label>
                  <select className="border rounded p-2 text-sm">
                    <option>Choose Address</option>
                    <option>123 Main St</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="font-semibold text-sm mb-1">
                    Internal notes
                  </label>
                  <textarea
                    className="border rounded p-2 text-sm"
                    rows={3}
                  ></textarea>
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-semibold text-sm mb-1 items-center flex">
                    Sale notes <FcInfo style={{ marginLeft: 2 }} />
                  </label>
                  <textarea
                    className="border rounded p-2 text-sm"
                    rows={3}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Right Side - Totals */}
            <div className="flex flex-col w-64 border-l pl-4 text-sm">
              <div className="flex justify-between mb-1">
                <span>Subtotal</span>
                <span className="font-semibold">$99.14</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>CO Eco Fee - 1 Gallon</span>
                <span className="font-semibold">$1.50</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>
                  Sales tax{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Carbondale (8.4%)
                  </span>
                </span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between mt-2 text-base font-bold">
                <span>Sale total</span>
                <span>$100.64</span>
              </div>
              <button className="text-blue-600 text-sm mt-1 text-left">
                View Totals Breakdown
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-row justify-between p-2 border rounded">
          <div className="flex flex-row gap-2">
            <button className="text-red-400 font-bold py-1 px-3 rounded border border-red-400">
              {localization.VOID}
            </button>
            <button className="font-bold rounded border border-gray-400 py-1 px-3">
              {localization.SAVE_DRAFT}
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <button className="font-bold text-gray-700 py-1 px-3">
              {localization.QUOTE}
            </button>
            <button className="font-bold text-gray-700 py-1 px-3">
              {localization.WILL_CALL}
            </button>
            <button className="font-bold rounded bg-blue-100 text-blue-800 py-1 px-3">
              {localization.SALE}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
