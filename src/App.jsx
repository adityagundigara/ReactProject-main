// App.jsx
import React from "react";
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
// import CartShop from "./component/CartShop";
import Navbarf from "./component/Navbarframe";
import Studytable from "./Pages/Studytable";
import SofaPage from "./Pages/Sofapage";
import ChairPage from "./Pages/ChairPage";
import AddToCart from "./component/AddToCart";


function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Navbarf />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/StudyTable" element={<Studytable/>} />
        <Route path="/ChairPage" element={<ChairPage/>} />
        <Route path="/SofaPage" element={<SofaPage/>} />
      </Routes>
    </>
  );
}

export default App;
