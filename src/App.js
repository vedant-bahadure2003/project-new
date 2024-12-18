import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AllComponent from "./components/AllComponent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AllComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
