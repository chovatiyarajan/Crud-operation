import React from "react";
import { Await } from "react-router-dom";

const PromiseDemo = () => {
  //   console.log("first log");

  //   let pro1 = new Promise((resolve, reject) => {
  //     let a = Math.random();

  //     if (a < 0.5) {
  //       reject("1st reject");
  //     } else {
  //       setTimeout(() => {
  //         console.log("1st done");
  //         resolve("1st code is goinggg ");
  //       }, 3000);
  //     }
  //   });

  //   let pro2 = new Promise((resolve, reject) => {
  //     let a = Math.random();

  //     if (a < 0.5) {
  //       reject("2nd reject");
  //     } else {
  //       setTimeout(() => {
  //         console.log("2nd done");
  //         resolve("2nd code is goingg ");
  //       }, 1000);
  //     }
  //   });

  //   let p3 = Promise.reject([pro1, pro2]);

  //   p3.then((a) => {
  //     console.log(a);
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  //   const getData = () => {
  //     let demoData = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("first resolve");
  //       }, 2000);
  //     });

  //     return demoData
  //   };

  //   let data = getData();

  //   data.then((v) => {
  //     console.log(v)

  //     console.log(data)
  //   })

  const getData1 = async () => {
    let saveData = new Promise((resolve) => {
      setTimeout(() => {
        resolve("first Data resolve");
      }, 2000);
    });

    return saveData;
  };

  const main = async () => {
    console.log("loading data");

    console.log("do somthing else");

    console.log("load data");

    let data = await getData1();
    
    console.log(data);

    return data;
  }

  console.log(main())

  return <div className="mt-4"> this component working in console.log </div>;
};

export default PromiseDemo;
