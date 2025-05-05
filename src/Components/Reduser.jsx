import React, { useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "UPDATE":
      return state.map((ele, inx) => {
        if (inx === action.index) {
          return action.data;
        }
        return ele;
      });
    case "DELETE":
      return state.filter((ele, inx) => action.indx !== inx);

    default:
      return state;
  }
};

const Reducer = () => {
  const [main, dispatch] = useReducer(reducer, []);
  const [username, setUsername] = useState("");
  const [usersurname, setUserSurname] = useState("");
  const [Ind, setInd] = useState();

  const setUserData = () => {
    if (username.trim() === "" || usersurname.trim() === "") {
      alert("Please fill all fields!");
      return;
    }

    const newRow = {
      userName: username,
      userSurname: usersurname,
    };

    if (Ind === null || Ind === undefined) {
      dispatch({ type: "ADD", data: newRow });
    } else {
      const updateRow = [...main];
      updateRow[Ind] = newRow;
      dispatch({ type: "UPDATE", index: Ind, data: newRow });
      setInd(null);
    }

    setUsername("");
    setUserSurname("");
  };

  const updateUserData = (row, index) => {
    setInd(index);
    setUsername(row.userName);
    setUserSurname(row.userSurname);
  };

  const deleteUserData = (arr, index) => {
    const delData = main.filter((ele, ind) => ind !== index);

    dispatch({ type: "DELETE", indx: index, data: delData });

    setInd(null);
    if (Ind === index) {
      setUsername("");
      setUserSurname("");
    }
  };

  const length = useRef();

  length.current = main.length;

  console.log(length);

  return (
    <>
      <table className="w-full mt-4 bg-gray-900">
        <tbody>
          <tr className="w-full">
            <th className="w-1/4 text-center text-white">Name</th>
            <th>
              <input
                className="w-full bg-black text-white form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </th>
          </tr>
          <tr className="w-full">
            <th className="w-1/4 text-center text-white">Surname</th>
            <th>
              <input
                className="w-full bg-black text-white form-control"
                type="text"
                value={usersurname}
                onChange={(e) => setUserSurname(e.target.value)}
              />
            </th>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center my-10">
        <button className="btn btn-dark" onClick={setUserData}>
          Submit Data
        </button>
      </div>
      <table className="table table-dark table-striped table-hover ">
        <thead className="thead text-center !p-10">
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="tbody text-center">
          {main.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.userName}</td>
              <td>{item.userSurname}</td>
              <td className="flex justify-center gap-2">
                <button
                  className="btn btn-light"
                  onClick={() => updateUserData(item, index)}
                >
                  Update
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => {
                    deleteUserData(item, index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end px-3 mt-4">
        <h1 className="text-4xl font-bold">This todo is done with useRedcer</h1>
      </div>
    </>
  );
};

export default Reducer;
