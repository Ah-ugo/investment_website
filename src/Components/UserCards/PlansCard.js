import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

export default function PlansCard(props) {
  return (
    <div className="bg-gray-900 p-4 rounded text-white">
      <div className="mb-3 border-b">
        <h1 className="text-center font-bold text-2xl pb-2">{props.title}</h1>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">Deposit Amount</h1>
          <div className="flex flex-row items-center">
            <TbCurrencyNaira className="text-white text-xl" />
            <label className="text-xl">{props.deposit}</label>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">Weekly Returns</h1>
          <div className="flex flex-row items-center">
            <TbCurrencyNaira className="text-white text-xl" />
            <label className="text-xl">{props.returns}</label>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">Tenure</h1>
          <label className="text-xl">4 weeks</label>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">Total Return</h1>
          <div className="flex flex-row items-center">
            <TbCurrencyNaira className="text-white text-xl" />
            <label className="text-xl">{props.total}</label>
          </div>
        </div>
        <div>
          <button className="p-2 bg-sky-600 w-full rounded mt-4 font-semibold hover:bg-sky-800">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
