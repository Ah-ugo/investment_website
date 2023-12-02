import React from "react";

export default function RecentInvestmentCard() {
  return (
    <div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 xl:mb-0">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                    Overview
                  </h6>
                  <h2 className="text-gray-300 text-xl font-semibold">
                    Recent Investments
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              <div className="relative h-350-px text-white">
                Nothing here yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
