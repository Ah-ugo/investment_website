import React from "react";

export default function DepositCard() {
  return (
    <div>
      <div>
        <div className="mb-12 xl:mb-0 mt-4">
          <div className="flex flex-wrap mb-6 shadow-lg rounded min-w-0 bg-white">
            <div className="flex flex-col break-words w-full lg:w-6/12">
              <div className="mb-0 px-4 pt-2 bg-transparent">
                <h2 className="text-gray-800 text-xl font-semibold">
                  Deposit Using Bank Transfer
                </h2>
                {/* <p className="text-gray-500 mb-1 text-xs">
                  Use the below link to invite your friends
                </p> */}
              </div>
              <div className="p-4">
                <div className="h-20-px">
                  <div className="flex bg-white rounded shadow border">
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                      defaultValue={""}
                    />
                    <button type="button" className="btn w-16">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
