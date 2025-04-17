import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../App";

const Ref = () => {
  let [num, setNum] = useState(1);

  let no = useRef(0);

  useEffect(() => {
    no.current = no.current + 1;
    console.log("num is " + no.current);
  });

  const { userName } = useContext(UserContext);
  return (
    <>
      <div>This Is Reff !!!</div>
      <div className="container">
        <button className="btn bg-black text-white my-2" onClick={() => {setNum(num  = num + 1 )}}>{num}</button>
      </div>
      <div className="flex justify-end px-3 py-2">
        <p>Created bu : - {userName}</p>
      </div>
    </>
  );
};

export default Ref;
