import React from "react";

export default function LargeUserInvestmentDetails() {
  return (
    <div className="p-4 bg-gray-800 grid grid-cols-2 rounded justify-between gap-6">
      <div className="">
        <div className="mb-3">
          <h1 className="text-gray-300 font-bold text-xl lg:text-2xl">
            Date Registered:
          </h1>
          <p className="text-gray-400 font-thin text-lg lg:text-xl">
            2nd July 2023, 10:20pm
          </p>
        </div>
        <div>
          <h1 className="text-gray-300 font-bold text-xl lg:text-2xl">
            Withdrawal Status:
          </h1>
          <p className="text-gray-400 font-thin text-lg lg:text-xl">Eligible</p>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <h1 className="text-gray-300 font-bold text-xl lg:text-2xl">
            Last Withdrawal:
          </h1>
          <p className="text-gray-400 font-thin text-lg lg:text-xl">
            2nd August 2023, 5:33pm
          </p>
        </div>
        <div>
          <h1 className="text-gray-300 font-bold text-xl lg:text-2xl">
            Next Withdrawal:
          </h1>
          <p className="text-gray-400 font-thin text-lg lg:text-xl">
            2nd September 2023
          </p>
        </div>
      </div>
      {/* <div className="flex flex-row gap-3">
        <button className="bg-white text-gray-800 p-2 rounded font-bold">
          Renew
        </button>
        <button className="text-white font-bold">Upgrade</button>
      </div> */}
    </div>
  );
}
