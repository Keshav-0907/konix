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

const SecondryMenu = [
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gray-200 px-10 py-20 h-full">
        <div className="flex items-center text-sm">
          <span className="text-gray-500">Cryptocurrencies </span> <ArrowIcon />{" "}
          <span>Bitcoin</span>
        </div>

        <div className="flex gap-6">
          <div className="w-4/6 flex flex-col gap-5">
            <Hero />
            <div className="flex gap-10 relative">
              {SecondryMenu.map((item, index) => (
                <div
                  key={index}
                  className={`text-gray-500 cursor-pointer pb-3 ${
                    item.active ? "text-blue-700 font-medium" : ""
                  }`}
                >
                  {item.title}
                </div>
              ))}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300" />
              <div className="absolute bottom-0 left-0 w-[75px] h-[2px] bg-blue-700" />
            </div>
            <Performance/>
            <Sentiment/>
            <AboutBitcoin/>
            <Tokenomics/>
            <Team/>
          </div>
          <div className="w-2/6">
            <Sidebar />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
