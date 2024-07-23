import React from "react";
import { useState, useEffect } from "react";
import axios from "./Axios";
const Show = () => {
  const [product, setProduct] = useState([]);

  const getmethod = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };


  useEffect(()=>getmethod())

  return (
    <div className="pt-[5%] pl-[5%]">
      {/* <button
        onClick={() => getmethod()}
        className="p-2 mt-4 bg-slate-500 rounded text-white"
      >
        get me
      </button> */}

      <hr className="my-3" />
      <ul>
        {product.length > 0 ? (
          product.map((res) => (
            <li className="bg-yellow-100 p-3 m-3 ">{res.title}</li>
          ))
        ) : (
          <h1 className="">loading</h1>
        )}
      </ul>
    </div>
  );
};

export default Show;
