import React from "react";
import { AiFillAlipayCircle, AiOutlineAccountBook } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";

export default function SmallCards(props) {
  return (
    <div className="flex flex-col bg-gray-800 rounded p-4">
      <h6 className="uppercase text-gray-300 mb-1 text-xs font-semibold">
        Overview
      </h6>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-200 text-xl font-semibold">{props.title}</h1>
        <div className="bg-white p-3 rounded-full">{props.icon}</div>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <TbCurrencyNaira className="text-white text-xl" />
        <h1 className="text-white text-xl">{props.amount}</h1>
      </div>
      <div>
        <p className="font-semibold text-gray-400">{props.description}</p>
      </div>
    </div>
  );
}
