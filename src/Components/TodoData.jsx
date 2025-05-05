import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const TodoData = () => {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    const storegeData = JSON.parse(localStorage.getItem("Data"));
    setStateData([...storegeData]);
  }, []);

  // console.log(stateData);

  const { main } = useContext(UserContext);

  console.log(main);

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
            {
              main.map((ele , index) => {
                return(
                  <tr>
                    <td>{index}</td>
                    <td>{ele.userName}</td>
                    <td>{ele.userSurname}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoData;
