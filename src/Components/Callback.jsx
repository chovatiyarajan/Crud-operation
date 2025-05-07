import React, { useCallback, useState } from "react";
import Callbackdemo from "../Callbackdemo";

const   Callback = () => {
  const [adjective ] = useState("good");
  const [count, setcount] = useState(0);

  const demoFunc = useCallback(() => {
      return "heyyy" + count ;
    }, []);

  return (
    <>
      <div className="text-3xl m-5 space-y-2">
        <h1>Practice with useCallback</h1>
        <Callbackdemo adjective={adjective} demoFunc={demoFunc} />
        <button
          className="btn btn-warning"
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Count is : {count}
        </button>
      </div>

    </>
  );
};

export default Callback;
