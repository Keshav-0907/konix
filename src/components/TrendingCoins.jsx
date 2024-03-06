import React from "react";
import Chevron from "../assets/icons/Chevron";
import { useState, useEffect } from "react";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setCoins(data);
      });
  }, []);
  const top3Coins = coins.slice(0, 3);
  return (
    <div className="bg-white rounded-lg p-2">
      <div className="text-2xl font-semibold"> Treding Coins (24H) </div>

      <div>
        {top3Coins?.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2">
              <img src={item.image} alt="coin" className="w-8 h-8" />
              <div>
                {item.id} <span>{item.symbol}</span>
              </div>
            </div>
            <div
              className={`flex items-center gap-1 ${
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
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
