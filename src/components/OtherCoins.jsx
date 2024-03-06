import React, { useEffect, useState } from "react";
import Chevron from "../assets/icons/Chevron";

const OtherCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);

  console.log(coins);

  return (
    <div className="md:px-10 px-5 mt-4 py-5 flex flex-col gap-5">
      <div className="text-2xl font-semibold">You may also like</div>

      <div className="flex overflow-x-auto mt-4">
        {coins.slice(0,20).map((item, index) => (
          <div key={index} className="flex-shrink-0 mr-4">
            <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg py-4">
              <div className="flex items-center gap-1">
                <img src={item.image} alt="coin" className="w-8 h-8" />
                <div>{item.symbol}</div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    item.price_change_percentage_24h > 0
                      ? "text-green-600 bg-green-100"
                      : "text-red-600 bg-red-100"
                  } p-1 rounded-md`}
                >
                  {item.price_change_percentage_24h > 0 ? (
                    <Chevron color={"#14B079"} />
                  ) : (
                    <Chevron inverted={true} color={"#cd2011"} />
                  )}{" "}
                  <span>{item.price_change_percentage_24h}%</span>
                </div>
              </div>
              <div className="w-full">
                <span>${item.current_price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-2xl font-semibold">Trending Coins</div>

      <div className="flex overflow-x-auto mt-4">
        {coins.slice(25,50).map((item, index) => (
          <div key={index} className="flex-shrink-0 mr-4">
            <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg py-4">
              <div className="flex items-center gap-1">
                <img src={item.image} alt="coin" className="w-8 h-8" />
                <div>{item.symbol}</div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    item.price_change_percentage_24h > 0
                      ? "text-green-600 bg-green-100"
                      : "text-red-600 bg-red-100"
                  } p-1 rounded-md`}
                >
                  {item.price_change_percentage_24h > 0 ? (
                    <Chevron color={"#14B079"} />
                  ) : (
                    <Chevron inverted={true} color={"#cd2011"} />
                  )}{" "}
                  <span>{item.price_change_percentage_24h}%</span>
                </div>
              </div>
              <div className="w-full">
                <span>${item.current_price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCoins;
