import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { NavLink, Outlet } from "react-router-dom";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const TodoData = () => {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    const storegeData = JSON.parse(localStorage.getItem("Data"));
    setStateData([...storegeData]);
  }, []);

  // console.log(stateData);

  const { main } = useContext(UserContext);

  // console.log(main);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("LocalStorage Todo Data", 10, 10);
    autoTable(doc, {
      startY: 15,
      head: [["No.", "Name", "Address", "Password", "Gender", "Hobby"]],
      body: stateData.map((ele, i) => [
        i + 1,
        ele.userName,
        ele.userAddress,
        ele.userPassword,
        ele.userGender,
        ele.userHobby,
      ]),
    });

    const secondTableY = doc.lastAutoTable.finalY + 20;
    doc.text("useReducer + useContext", 10, secondTableY);
    autoTable(doc, {
      startY: secondTableY + 5,
      head: [["No.", "Name", "Surname"]],
      body: main.map((ele, i) => [i + 1, ele.userName, ele.userSurname]),
    });

    doc.save("Data.pdf");
  };

  return (
    <div className="mt-5 px-5">
      <div className="text-4xl text-center my-12">
        <p>this Data is First Todo Data Using LocalStorage</p>
      </div>

      <table className="table border-separate">
        <thead className="thead">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Addresss</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {stateData.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.userName}</td>
                <td>{ele.userAddress}</td>
                <td>{ele.userPassword}</td>
                <td>{ele.userGender}</td>
                <td>{ele.userHobby}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end px-5">
        <NavLink className="btn btn-dark " to="/">
          Make some changes
        </NavLink>
      </div>

      <div className="text-4xl text-center my-12">
        <p>This is second Todo data using useReducer and useContext</p>
      </div>
      <div>
        <table className="table border">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {main.map((ele, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{ele.userName}</td>
                  <td>{ele.userSurname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end px-5">
        <NavLink className="btn btn-dark " to="/reducer">
          add some data
        </NavLink>
      </div>

      <div className="flex justify-center my-10">
        <button onClick={generatePDF} className="btn btn-primary mt-4 py-2 px-3">
          Generate PDF
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default TodoData;
