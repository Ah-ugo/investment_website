import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RecentInvestmentCard() {
  const [depositData, setDepositData] = useState([]);
  const [withdrawData, setWithdrawData] = useState([]);
  const userInfo = localStorage.getItem("userData122");
  const userMain = JSON.parse(userInfo);

  const depositUrl = `https://sigmaphi.b4a.io/classes/Transfers?where=%7B%20%22userId%22%3A%20%22${userMain?.objectId}%22%20%7D`;

  const withdrawUrl = `https://sigmaphi.b4a.io/classes/Withdrawal_Request?where=%7B%20%22user%22%3A%20%22${userMain?.objectId}%22%2C%22approved%22%3A%20true%20%20%7D`;

  const config = {
    headers: {
      "X-Parse-Application-Id": "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7",
      "X-Parse-REST-API-Key": "J66ZpMiZBgxEXDSAlWiUcSYMjjLV6FAuX8y0huJE",
      // "X-Parse-Revocable-Session": "1",
    },
  };

  const getAllDeposit = () => {
    axios
      .get(depositUrl, config)
      .then((res) => {
        console.log(res);
        setDepositData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllWithdrawal = () => {
    axios
      .get(withdrawUrl, config)
      .then((res) => {
        console.log(res);
        setWithdrawData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllDeposit();
    getAllWithdrawal();
  }, []);
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
              {depositData.length == 0 || withdrawData.length == 0 ? (
                <div className="relative h-350-px text-white">
                  Nothing here yet
                </div>
              ) : (
                <div>
                  <table class="table-auto min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Withdrawal
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      {depositData.map((i) => {
                        return (
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">Deposit</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              ₦{i?.amount}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              ₦{userMain?.balance}
                            </td>
                          </tr>
                        );
                      })}
                      {withdrawData.map((i) => {
                        return (
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              Withdrawal
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              ₦{i?.Amount}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              ₦{userMain?.balance}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
