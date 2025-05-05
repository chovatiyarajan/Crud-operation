import React, { useEffect, useState } from "react";

const TodoData = () => {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    const storegeData = JSON.parse(localStorage.getItem("Data"));
    setStateData([...storegeData]);
  }, []);

  console.log(stateData);

  return (
    <div className="mt-5 px-5">
      <div className="text-4xl text-center my-12">
        <p>this Data is First Todo Data Using LocalStorage</p>
      </div>
      <table className="table border">
        <thead className="thead">
          <tr>
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
    </div>
  );
};

export default TodoData;
