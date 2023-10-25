import React from "react";

interface ICartStartProp {
  statSubtitle: string;
  statTitle: string;
  statArrow: string;
  statPercent: string;
  statPercentColor: string;
  statDescripiron: string;
  statIconName: React.ReactNode;
  statIconColor: string;
}

export default function CardStats({
  statSubtitle = "Traffic",
  statTitle = "350,897",
  statArrow = "up",
  statPercent = "3.48",
  statPercentColor = "text-emerald-500",
  statDescripiron = "Since last month",
  statIconName = "far fa-chart-bar",
  statIconColor = "bg-red-500",
}: ICartStartProp) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-gray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-gray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {statIconName}
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-4">
            <div className="flex items-center">
              {statArrow == "up" ? (
                <svg
                  className="w-3 h-3 mx-1 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13V1m0 0L1 5m4-4 4 4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 mx-1 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1v12m0 0 4-4m-4 4L1 9"
                  />
                </svg>
              )}
              <span className={statPercentColor + " mr-2"}>{statPercent}%</span>
              <span className="whitespace-nowrap">{statDescripiron}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
