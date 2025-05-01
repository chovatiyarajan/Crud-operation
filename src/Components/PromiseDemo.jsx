import React, { useContext } from "react";
import { UserContext } from "../App";

const PromiseDemo = () => {
  const demoFunc = async () => {
    let api1 = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await api1.json();
    return data;
  };

  const main = async () => {
    console.log("this is before data getting !!");

    let data = await demoFunc();
    console.log(data);
    console.log("this is after data getting !!");
  };

  main();

  const {num,dispatch} = useContext(UserContext);

  return (
    <>
      <div className="mt-4"> this component working in console.log </div>
      <div className="text-4xl">value : {num}</div>
      <div>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "Inc" });
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "Dec" });
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default PromiseDemo;
