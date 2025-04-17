import React, { useState } from "react";
import Memo from "./Memo";

const Demo = () => {
  const [num, setNum] = useState(1);

  const cars = ["car1", "car2", "car3", "car4"];

  const increment = () => {
    setNum(num + 1);
  };
  const [uName, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [subName, setSubName] = useState("");
  const [subpass, setSubPass] = useState("");

  const getUser = () => {
    setSubName(uName);
    setSubPass(pass);
  };
  return (
    <>
      <div className="container mt-2">
        <button className="btn btn-outline-dark" onClick={increment}>
          {num}
        </button>
      </div>
      <ul className="container">
        {cars.map((arr, ind) => (
          <li style={{ color: "black", padding: "0" }} key={ind}>
            {arr}
          </li>
        ))}
      </ul>
      <div>
        <div className="w-100 d-flex" style={{ justifyContent: "center" }}>
          <table className="table table-dark w-50 rounded">
            <thead>
              <tr>
                <th className="text-center">Name : </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter User Name..."
                    onChange={(e) => setUname(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th className="text-center">Password :</th>
                <th>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password..."
                    onChange={(e) => setPass(e.target.value)}
                  />
                </th>
              </tr>
              <tr>
                <th colSpan={2}>
                  <input
                    type="submit"
                    className="form-control"
                    onClick={getUser}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <p className="m-0">
                    {!subName && !subpass
                      ? "enter User Name and Password"
                      : "Hello " + subName + ", your Password is : " + subpass}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Memo name="rajan" />
      </div>
    </>
  );
};

export default Demo;
