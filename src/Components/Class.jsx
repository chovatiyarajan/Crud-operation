import React, { useContext, useState } from "react";
import { UserContext } from "../App";

const Class = () => {
  const [userName, setUsername] = useState();
  const [saveUname, setSaveUname] = useState("Plese Enter User Name");
  const [removeUname, setRemoveUname] = useState("User removed");

  const getUname = () => {
    setSaveUname(`Hello ${userName} to my first Rect Project!`);
  };

  const removeUser = () => {
    setUsername("");
    setSaveUname(removeUname);
  };

  const {useName} = useContext(UserContext)

  return (
    <div className="container mt-4">
      <div>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={userName}
        />
        <button className="btn btn-dark mt-2" onClick={getUname}>
          Get Your Name
        </button>
        <button
          className="btn btn-dark mt-2"
          onClick={removeUser}
          style={{ margin: "0 10px" }}
        >
          remove User{" "}
        </button>
      </div>
      <div>
        <p className="mt-3 ">{saveUname}</p>
      </div>
      <p>Created By : - {useName} </p>Z
    </div>
  );
};

export default Class;
