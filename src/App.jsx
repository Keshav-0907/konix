import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gray-200 px-10 py-20">
        <Hero/>
      </div>
    </BrowserRouter>
  );
}

export default App;
