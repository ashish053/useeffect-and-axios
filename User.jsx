import React, { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  useEffect(() => {
    console.log("User component mounted");
    return () => {
      console.log("User component unmounted");
    };
  },[]);

  const [normal, setNormal] = useState("this is normal data");

  return (
    <div className="p-4 m-4" >
        <h1> {normal}</h1>
      <button
        onClick={() => setNormal("Normal data changed")}
        className="p-2 m-4 bg-red-300 text-white rounded-xl"
      >
        normal data
      </button>
    </div>
  );
};

export default User;
