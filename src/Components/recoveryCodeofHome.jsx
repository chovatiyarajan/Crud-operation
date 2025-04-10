import React, { useState } from "react";
import Todo from "./Todo";

const Home = () => {
  const [Name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [password, setPassword] = useState("");

  const [gender, setGender] = useState("");

  const [hooby, setHobby] = useState([]);

  const [main, setMain] = useState([]);

  const [Ind, setInd] = useState();

  const dataBtn = () => {
    if (!Name || !address || !password || !gender || hooby.length === 0) {
      alert("Please fill out all fields!");
      return;
    }

    const newRow = {
      userName: Name,
      userAddress: address,
      userPassword: password,
      userGender: gender,
      userHobby: hooby.join(", "),
    };

    if (Ind === null) {
      setMain([...main, newRow]);
    } else {
      const updateMain = [...main];
      updateMain[Ind] = newRow;
      setInd(null);
    }

    setName("");
    setAddress("");
    setPassword("");
    setGender("");
    setHobby([]);
  };
  console.log(main);

  const handleUpdate = (element, index) => {
    console.log("Row index:", index, element.userName);
    setName(element.userName);
    setAddress(element.userAddress);
    setPassword(element.userPassword);
    setGender(element.userGender);
    setHobby(element.userHobby.split(", "));
    setInd(index);
  };

  return (
    <>
      <div className="container mt-5 ">
        <Todo
          name={Name}
          setNm={setName}
          address={address}
          setAdd={setAddress}
          pass={password}
          setPass={setPassword}
          gen={gender}
          setGen={setGender}
          hb={hooby}
          setHb={setHobby}
        />
      </div>
      <div
        className="container d-flex w-100"
        style={{ justifyContent: "center" }}
      >
        <button className="btn btn-outline-dark" onClick={dataBtn}>
          Add your Details
        </button>
      </div>
      <div className="container mt-5">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Password </th>
              <th>Gender</th>
              <th>Hobby</th>
            </tr>
          </thead>
          <tbody>
            {main.map((item, index) => (
              <tr key={index}>
                <td>{item.userName}</td>
                <td>{item.userAddress}</td>
                <td>{item.userPassword}</td>
                <td>{item.userGender}</td>
                <td>{item.userHobby}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleUpdate(item, index)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
