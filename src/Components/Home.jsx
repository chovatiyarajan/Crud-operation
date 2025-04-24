import React, { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import { UserContext } from "../App";

const Home = () => {
  const [Name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [password, setPassword] = useState("");

  const [gender, setGender] = useState("");

  const [hooby, setHobby] = useState([]);

  const [main, setMain] = useState([]);

  const [Ind, setInd] = useState();

  const [changName, setChangName] = useState("Add your Details");

  useEffect(() => {
    const dataStorage = localStorage.getItem("Data");

    if (dataStorage) {
      setMain(JSON.parse(dataStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(main));
  }, [main]);

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
      checked: false,
    };

    if (Ind === null || Ind === undefined) {
      setMain([...main, newRow]);
    } else {
      const updateRow = [...main];
      updateRow[Ind] = newRow;
      setMain(updateRow);
      setInd(null);
    }

    setName("");
    setAddress("");
    setPassword("");
    setGender("");
    setHobby([]);
    setChangName("Add your Details");
  };

  const handleUpdate = (element, index) => {
    setName(element.userName);
    setAddress(element.userAddress);
    setPassword(element.userPassword);
    setGender(element.userGender);
    setHobby(element.userHobby.split(", "));
    setInd(index);
    setChangName("Update Record");
  };

  const deleteRecord = (getInd) => {
    setTimeout(() => {
      const delRec = main.filter((ele, ind) => ind !== getInd);
      setMain(delRec);
    }, 500);

    setName("");
    setAddress("");
    setPassword("");
    setGender("");
    setHobby([]);
  };

  const togler = (index) => {
    setMain((main) => {
      const updateRec = main.map((ele, id) =>
        id === index ? { ...ele, checked: !ele.checked } : ele
      );
      const editRec = updateRec.every((ele) => ele.checked);
      document.getElementById("selectAllRec").checked = editRec;

      return updateRec;
    });
  };

  const mulDel = () => {
    console.log(main);
    setTimeout(() => {
      setMain((main) => main.filter((ele) => !ele.checked === true));
    }, 500);
  };

  const selectAll = () => {
    const allChecked = main.every((ele) => ele.checked);
    setMain((main) => {
      return main.map((ele) => {
        return { ...ele, checked: !allChecked };
      });
    });
  };

  const {userName} = useContext(UserContext)

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
          {changName}
        </button>
      </div>
      <div className="container mt-5 table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>
                Multiple Select
                <input
                  style={{ margin: "0 0 0 10px" }}
                  type="checkbox"
                  onChange={selectAll}
                  id="selectAllRec"
                />
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Password </th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>Edit Bar</th>
            </tr>
          </thead>
          <tbody>
            {main.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    name="muldel"
                    id="mulDel"
                    checked={item.checked || false}
                    onChange={(e) => togler(index)}
                  />
                </td>
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
                  <button
                    style={{ margin: "0 0 0 10px" }}
                    className="btn btn-danger"
                    onClick={() => deleteRecord(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-100 p-2 d-flex" style={{ justifyContent: "center" }}>
          <button className="btn btn-danger" onClick={mulDel}>
            Multiple Delete
          </button>
        </div>
        <div>
          <p>Created By : - {userName}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
