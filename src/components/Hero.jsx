import { useEffect, useState } from "react";
import BitcoinImg from "../assets/bitcoin.png";
import React, { useRef, memo } from "react";
import Chevron from "../assets/icons/Chevron";

const Hero = () => {
  const [USDprice, setUSDPrice] = useState(0);
  const [INRPrice, setINRPrice] = useState(0);
  const [change, setChange] = useState(0);
  const container = useRef();
  const tradingViewScriptRef = useRef(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUSDPrice(data.bitcoin.usd);
        setINRPrice(data.bitcoin.inr);
        setChange(parseFloat(data.bitcoin.usd_24h_change.toFixed(2)));
      });
  }, []);

  useEffect(() => {
    if (tradingViewScriptRef.current) {
      tradingViewScriptRef.current.remove();
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": true,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;

    container.current.appendChild(script);

    tradingViewScriptRef.current = script;

    return () => {
      if (tradingViewScriptRef.current) {
        const parentNode = tradingViewScriptRef.current.parentNode;
        parentNode.removeChild(tradingViewScriptRef.current);
      }
    };
  }, []);
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col gap-4 h-full">
      <div>
        <div className="flex items-center gap-2">
          <img src={BitcoinImg} alt="Bitcoin" className="w-10 h-10" />
          <div className="font-semibold">
            Bitcoin
            <span className="text-sm font-normal"> BTC </span>
          </div>
          <div className="bg-gray-500 text-white p-1 rounded-md">Rank #1</div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold"> ${USDprice}</span>
          <span> ₹{INRPrice}</span>
        </div>
        <div>
          <div
            className={` inline-flex ${
              change > 0 ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
            } p-0.5 pr-2 rounded-md`}
          >
            <div className="flex items-center gap-1">
              {change > 0 ? (
                <Chevron color={"#14B079"} />
              ) : (
                <Chevron inverted={true} color={"#cd2011"} />
              )}
              <div> {change}% </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full">
        <div
          className="tradingview-widget-container"
          ref={container}
          style={{ height: "50vh", width: "100%" }}
        >
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "calc(100% - 32px)", width: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
