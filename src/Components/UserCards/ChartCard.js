import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

export default function ChartCard() {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
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
                    Investment Chart
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              <div className="relative h-350-px text-white">
                <VictoryChart
                  // adding the material theme provided with Victory
                  theme={VictoryTheme.material}
                  domainPadding={20}>
                  <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Week 1", "Week 2", "Week 3", "Week 4"]}
                  />
                  <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => `₦${x / 1000}k`}
                  />
                  <VictoryBar data={data} x="quarter" y="earnings" />
                </VictoryChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
