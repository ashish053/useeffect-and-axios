import React, { useState } from "react";
import axios from "axios";
import { RiH1 } from "react-icons/ri";
import Home from "./Home";
import User from "./User";
import Show from "./Show";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  // const postmethod = () => {
  //   const api = "https://fakestoreapi.com/products";
  //   axios
  //     .post(api, {
  //       title: "test product",
  //       price: 13.5,
  //       description: "lorem ipsum set",
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>

      <nav className="pt-[5%] pl-[5%] flex justify-center items-center gap-4">
        <Link to="/">home</Link>
        <Link to="/user">user</Link>
        <Link to="/show">show</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </>
  );
};

export default App;
