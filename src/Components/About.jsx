import React, { useState } from "react";

const About = () => {
  const [url, setUrl] = useState("");
  const [saveUrl,setSaveUrl] = useState("");

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

  const getUrl = (val) => {
    setUrl(val);
  };

  const setImg = () => {
    setSaveUrl(url);
  }
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
          onChange={(e) => getUrl(e.target.value)}
        />
        <button className="btn" onClick={setImg}>Get Img </button>
      </div>
      <div><img src={saveUrl} /></div>
    </div>
  );
};

export default About;
