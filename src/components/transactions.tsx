import { useState } from "react";

export const Transactions = () => {
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="border-b bg-white px-6 py-3 flex space-x-6 text-sm font-medium">
        {[
          "New",
          "Drafts",
          "Quotes",
          "Will call",
          "Special orders",
          "Completed",
          "Voided",
        ].map((tab, idx) => (
          <button
            key={idx}
            className={`pb-2 ${
              tab === "New"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-1">
        <aside className="w-72 border-r bg-white p-4 space-y-6 overflow-y-auto">
          <div>
            <h2 className="text-sm font-semibold text-gray-800">
              303 Main Street/ Dale Eubank
            </h2>
            <p className="text-xs text-gray-500">Tier 2 Contractor</p>
            <button className="mt-2 w-full rounded-md border px-3 py-1 text-sm">
              Search sales history
            </button>
          </div>

          <div>
            <label className="text-xs text-gray-500">Job</label>
            <input
              type="text"
              placeholder="Search"
              className="mt-1 w-full rounded-md border px-2 py-1 text-sm"
            />
          </div>

          <div>
            <h3 className="text-xs text-gray-500 mb-1">Contacts</h3>
            <div className="rounded-md border px-3 py-2 text-sm">
              Whitelande Works{" "}
              <span className="ml-2 rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-600">
                PRIMARY
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xs text-gray-500 mb-1">Financing</h3>
            <button className="rounded-md border px-3 py-1 text-sm">
              Generate statement
            </button>
            <p className="text-xs text-gray-500 mt-1">Total balance $0</p>
          </div>
        </aside>

        <main className="flex-1 p-6 space-y-4 overflow-y-auto">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search for a product"
              className="flex-1 rounded-md border px-3 py-2 text-sm"
            />
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
              Add
            </button>
          </div>

          <div className="border rounded-md bg-white">
            <div className="grid grid-cols-5 gap-4 px-4 py-2 border-b text-sm font-medium bg-gray-50">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
              <div></div>
            </div>
            <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm items-center">
              <div>
                <p className="font-medium text-blue-600">001500-001</p>
                <p className="text-gray-700">
                  BENMOORE WOODLUXE STAIN REMOVE 1G
                </p>
              </div>
              <div>
                <p className="line-through text-xs text-gray-400">$59.46</p>
                <p>$49.57</p>
              </div>
              <div>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1"
                />
              </div>
              <div>${(49.57 * quantity).toFixed(2)}</div>
              <div>
                <button className="text-sm text-red-500">Remove</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500">Purchase order</label>
                <select className="w-full rounded-md border px-3 py-2 text-sm">
                  <option>Select PO</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500">Internal notes</label>
                <textarea className="w-full rounded-md border px-3 py-2 text-sm"></textarea>
              </div>

              <div>
                <label className="text-xs text-gray-500">Sale notes</label>
                <textarea className="w-full rounded-md border px-3 py-2 text-sm"></textarea>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${(49.57 * quantity).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>CO Eco Fee - 1 Gallon</span>
                <span>$1.50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sales tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span>Sale total</span>
                <span>${(49.57 * quantity + 1.5).toFixed(2)}</span>
              </div>

              <div className="flex space-x-2 pt-3">
                <button className="rounded-md border px-4 py-2 text-sm">
                  Void
                </button>
                <button className="rounded-md border px-4 py-2 text-sm">
                  Save Draft
                </button>
                <button className="ml-auto rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                  Sale
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
