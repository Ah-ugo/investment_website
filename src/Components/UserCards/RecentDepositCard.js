import React from "react";

export const RecentDepositCard = ({ Balance, Amount }) => {
  return (
    <div>
      <main className="flex flex-row justify-between align-center items-center">
        <p>Deposit</p>
        <p>₦ {Amount}</p>
        <p>₦ {Balance}</p>
      </main>
    </div>
  );
};
