import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const Contect = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const pop = () => setCount(count - 1);

  useEffect(() => {
    alert("this is your First Time");
  }, [  ]);

  useEffect(() => {
    alert(count + "@@@@@@@@@@@");
  }, [pop]);

  const {userName} = useContext(UserContext)

  return (
    <>
      <div className="container ">
        <button className="btn btn-dark mt-4 p-3  " onClick={add}>
          {count}
        </button>
        <button className="btn btn-dark mt-4 p-3  " onClick={pop}>
          {count}
        </button>
      </div>
      <div className="mt-6">
        <p>Created by : - {userName}</p>
      </div>
    </>
  );
};

export default Contect;
