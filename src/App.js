import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Events from "./Components/Events";
import Members from "./Components/Members";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
