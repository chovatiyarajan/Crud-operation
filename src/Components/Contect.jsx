import React, { useEffect, useState } from "react";

const Contect = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const pop = () => setCount(count - 1);

  useEffect(() => {
    alert(count);
  }, [  ]);

  useEffect(() => {
    alert(count + "@@@@@@@@@@@");
  }, [pop]);

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
    </>
  );
};

export default Contect;
