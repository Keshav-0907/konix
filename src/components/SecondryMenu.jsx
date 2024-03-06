import React from "react";

const SecondryMenuData = [
  {
    title: "Overview",
    active: true,
  },
  {
    title: "Fundamentals",
    active: false,
  },
  {
    title: "News Insights",
    active: false,
  },
  {
    title: "Sentiments",
    active: false,
  },
  {
    title: "Team",
    active: false,
  },
  {
    title: "Technicals",
    active: false,
  },
  {
    title: "Tokenomics",
    active: false,
  },
];

const SecondryMenu = () => {
  return (
    <div className="relative">
      <div className=" overflow-x-auto">
        <div className="flex gap-10">
          {SecondryMenuData.map((item, index) => (
            <nobr key={index}>
              <div
                className={`text-gray-500 cursor-pointer md:pb-3 pb-0 inline-block ${
                  item.active ? "text-blue-700 font-medium" : ""
                }`}
              >
                {item.title}
              </div>
            </nobr>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300" />
        <div className="absolute bottom-0 left-0 w-[75px] h-[2px] bg-blue-700" />
      </div>
    </div>
  );
};

export default SecondryMenu;
