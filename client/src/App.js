import Landing from "./components/LandingPage/landing";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "../src/components/Home/home";
import Detail from "./components/Details/detail";
import Create from "./components/Create/create";
import Nav from "./components/Nav/nav";

function App() {
  document.title = "VideoGame DS";
  const { pathname } = useLocation();

  return (
    <div>
      <div>
      {pathname === '/home' ? <Nav /> : null}
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
