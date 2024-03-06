import React from "react";
import Chevron from "../assets/icons/Chevron";
import { useState, useEffect } from "react";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoins(data);
      });
  }, []);
  return (
    <div className="bg-white rounded-lg p-2">
      <div className="text-2xl font-semibold"> Treding Coins (24H) </div>

      <div>
        {coins?.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2">
              <img src={item.image} alt="coin" className="w-8 h-8" />
              <div>{item.id} <span>{item.symbol}</span></div>
            </div>
            <div className="text-green-600 flex items-center gap-1 bg-green-100 p-1 rounded-md">
              <Chevron /> <span>4.5%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
