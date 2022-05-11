import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sets from "./Sets";
import Home from "./Home";

//API-KEY = "dc1b51ef-4895-437a-9528-7eb6dc0ea43a";

const App = () => {
  return (
    <div className="site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sets" element={<Sets />} />
      </Routes>
    </div>
  );
};

export default App;
