import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../App";

const Ref = () => {
  let [num, setNum] = useState(1);

  let no = useRef(0);
  const btnRef = useRef();

  const colorChangbtn = () => {
    btnRef.current.style.backgroundColor = "red";
  }
  useEffect(() => {
    no.current = no.current + 1;
    console.log("num is " + no.current);
  },[colorChangbtn]);



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
      
      <div className="my-5" ref={btnRef}>
        <div>
          <h1 className="text-5xl" >This is use of refcase</h1>
        </div>  
        <div className="my-3">
          <button className="bg-indigo-500 p-2 rounded mx-2" onClick={colorChangbtn}> chang background color of ubove div</button>
        </div>
      </div>
    </>
  );
};

export default Ref;
