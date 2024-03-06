import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArrowIcon from "./assets/icons/ArrowIcon";
import Sidebar from "./components/Sidebar";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";
import AboutBitcoin from "./components/AboutBitcoin";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import TrendingCoins from "./components/TrendingCoins";
import SecondryMenu from "./components/SecondryMenu";
import OtherCoins from "./components/OtherCoins";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gray-200 pt-20 h-full">
        <div className="flex items-center  md:px-10 px-5 text-sm pb-4">
          <span className="text-gray-500">Cryptocurrencies </span> <ArrowIcon />{" "}
          <span>Bitcoin</span>
        </div>

        <div className="flex md:flex-row  md:px-10 px-5 flex-col gap-6">
          <div className="md:w-4/6 w-full flex flex-col gap-5">
            <Hero />
            <SecondryMenu />

            <Performance />
            <Sentiment />
            <AboutBitcoin />
            <div className="hidden md:flex">
              <Tokenomics />
            </div>
            <Team />
          </div>
          <div className="md:w-2/6 w-full flex flex-col gap-4">
            <Sidebar />
            <TrendingCoins />
          </div>
        </div>
        <div className="w-full bg-white">
          <OtherCoins />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
