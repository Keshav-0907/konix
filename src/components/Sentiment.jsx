import React from "react";
import InfoIcon from "../assets/icons/InfoIcon";
import NewspaperIcon from "../assets/icons/NewspaperIcon";
import UpGraphIcon from "../assets/icons/UpGraphIcon";

const SentimenData = [
  {
    id: 1,
    icon: <NewspaperIcon />,
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    bgClr: "bg-blue-100",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    id: 2,
    icon: <UpGraphIcon />,
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    bgClr: "bg-green-100",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
];

const chartData = [
  { label: "Buy", percentage: 76, color: "bg-green-500" },
  { label: "Hold", percentage: 8, color: "bg-gray-300" },
  { label: "Sell", percentage: 16, color: "bg-red-500" },
];

const Sentiment = () => {
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col gap-5">
      <div className="text-2xl font-semibold">Sentiment</div>
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 items-center">
          <span className="text-lg text-[#44475B]"> Key Event</span>
          <InfoIcon />
        </div>
        <div className="flex gap-3 overflow-x-auto" style={{ width: "100%" }}>
          {SentimenData.map((item, index) => (
            <div
              key={index}
              className={`w-[456px] p-[18px] rounded-lg flex gap-3 ${item.bgClr}`}
            >
              <div className="">{item.icon}</div>
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-[#44475B] text-sm">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <span className="text-lg text-[#44475B]"> Analyst Estimates </span>
          <InfoIcon />
        </div>

        <div className="flex md:gap-7 gap-2 items-center">
          <div className="text-green-600 bg-green-100 font-md md:text-4xl inline-flex p-3 md:h-32 md:w-32 h-20 w-20 items-center justify-center rounded-full">
            {" "}
            76%{" "}
          </div>

          <div className="flex flex-col justify-around py-5 w-full">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-full">
                <div className="text-gray-500 text-sm">{item.label}</div>
                <div
                  className={`h-2 rounded-[2px] ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
                <nobr>
                  <div>{item.percentage} %</div>
                </nobr>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
