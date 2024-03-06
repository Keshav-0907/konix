import React, { useEffect } from "react";
import InfoIcon from "../assets/icons/InfoIcon";
import Chevron from "../assets/icons/Chevron";
import { useState } from "react";

const Performance = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(data)
  return (
    <div className="bg-white rounded-xl p-5">
      <div className="text-2xl font-semibold"> Performance </div>
      <div className="flex flex-col gap-5 my-5">
        <div className="w-full flex items-center">
          <div className="w-2/12 text-[#44475B]">
            <div className="text-sm">{`Today's Low`}</div>
            <div>${new Intl.NumberFormat().format(data.market_data.low_24h.usd)}</div>
          </div>

          <div className="w-8/12 relative bg-gradient-to-r from-rose-500 via-yellow-500 to-emerald-500 h-2 rounded-full">
            <div className="absolute top-2 md:right-32 right-10">
              {" "}
              <Chevron /> <span>${new Intl.NumberFormat().format(data.market_data.current_price.usd)}</span>{" "}
            </div>
          </div>

          <div className="w-2/12 text-end text-[#44475B]">
            <div className="text-sm">{`Today's High`}</div>
            <div>${new Intl.NumberFormat().format(data.market_data.high_24h.usd)}</div>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-2/12 text-[#44475B]">
            <div className="text-sm">{`52W Low`}</div>
            <div>46,930.22</div>
          </div>

          <div className="w-8/12 bg-gradient-to-r from-rose-500 via-yellow-500 to-emerald-500 h-2 rounded-full"></div>

          <div className="w-2/12 text-end text-[#44475B]">
            <div className="text-sm">{`52W High`}</div>
            <div>49,343.83</div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex gap-3 font-semibold text-lg">
          {" "}
          <span>Fundamentals</span> <InfoIcon />{" "}
        </div>
      </div>

      <div className="text-sm flex justify-between md:gap-12 py-8 md:flex-row flex-col">
        <div className="md:w-1/2 w-full flex flex-col gap-5 ">
          <div className="flex justify-between border-b pb-3">
            <div className="text-[#768396]">Bitcoin Price</div>
            <div>${new Intl.NumberFormat().format(data.market_data.current_price.usd)}</div>
          </div>
          <div className="flex justify-between border-b pb-3">
            <div className="text-[#768396]">24h Low / 24h High</div>
            <div>${new Intl.NumberFormat().format(data.market_data.low_24h.usd)} / ${new Intl.NumberFormat().format(data.market_data.high_24h.usd)}</div>
          </div>
          <div className="flex justify-between border-b pb-3">
            <div className="text-[#768396]">7d Low / 7d High</div>
            <div>$16,382.07 / $16,874.12</div>
          </div>
          <div className="flex justify-between border-b pb-3">
            <div className="text-[#768396]">Trading Volume</div>
            <div>${new Intl.NumberFormat().format(data.market_data.total_volume.usd)} </div>
          </div>
          <div className="flex justify-between border-b pb-3">
            <div className="text-[#768396]">Market Cap Rank</div>
            <div>#{new Intl.NumberFormat().format(data.market_data.market_cap_rank)}</div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:pt-0 pt-5">
          <div className="flex justify-between border-b pb-3">
            <div className="text-[#768396]">Market Cap</div>
            <div>${new Intl.NumberFormat().format(data.market_data.market_cap.usd)}</div>
          </div>
          <div className="flex justify-between border-b py-4">
            <div className="text-[#768396]">Market Cap Dominance</div>
            <div>38.343%</div>
          </div>
          <div className="flex justify-between border-b py-4">
            <div className="text-[#768396]">Volume / Market Cap</div>
            <div>0.0718</div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="text-[#768396] flex items-center">
              All-Time High
            </div>
            <div className="text-end">
              <div>
                $69,044.77 <span className="text-red-500"> -75.6% </span>{" "}
              </div>
              <div className="text-xs">Nov 10, 2021 (about 1 year)</div>
            </div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="text-[#768396] flex items-center">All-Time Low</div>
            <div className="text-end">
              <div>
                $67.81 <span className="text-green-500"> 24729.1% </span>{" "}
              </div>
              <div className="text-xs">Jul 06, 2013 (over 9 years)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
