import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("homeTab");

  const selectionHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const eventId = (e.target as HTMLAnchorElement).id;
    setSelectedTab(eventId);
    console.log("Clicked Anchor ID: ", selectedTab);
  };
  return (
    <div className="main-content">
      <div>
        <p>Photo and some text here</p>
      </div>
      <Router>
        {/* <div className="sticky-navbar">
          <Navbar activeSelection={selectedTab} onClick={selectionHandler} />
        </div> */}
        <Navbar activeSelection={selectedTab} onClick={selectionHandler} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
