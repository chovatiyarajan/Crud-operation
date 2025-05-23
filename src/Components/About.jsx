import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import Class from "./Class";

const About = () => {
  const [url, setUrl] = useState("");
  const [imgUrl, setImgurl] = useState();

  const [car, setCar] = useState({
    Name: "mustang",
    Color: "red",
    Model: "ford",
    Year: 1964,
  });

  const changYear = () => {
    setCar((oldCar) => {
      return { ...oldCar, Name: "Defeder", Year: 2006 };
    });
  };

  // const getUrl = (val) => {
  //   console.log(url)
  //   setUrl(val);
  // };

  // const setImg = () => {
  //   console.log(saveUrl)
  // }

  const {userName } = useContext(UserContext)
  return (
    <div className="container mt-5">
      <div>
        <p>{"Year " + car.Year + " and Name is " + car.Name}</p>
        <button className="btn btn-dark" onClick={changYear}>
          Chang Year
        </button>
      </div>
      <p className="mt-4">Through Object</p>

      <div>
        <input
          type="text"
          placeholder="enter url of img"
          className="form-control form-control-sm"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn btn-dark my-2" onClick={() => setImgurl(url)}>Get Img </button>
      </div>
      <div><img src={imgUrl} alt=""/></div>
      <div>created by : - {userName}</div>
      <Class />
    </div>
  );
};

export default About;
