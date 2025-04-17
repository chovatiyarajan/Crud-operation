import React, { useContext, useState } from "react";
import { UserContext } from "../App";

const Class = () => {
  const [userNm, setUsername] = useState();
  const [saveUname, setSaveUname] = useState("Plese Enter User Name");
  const [removeUname] = useState("User removed");

  const getUname = () => {
    setSaveUname(`Hello ${userNm} to my first Rect Project!`);
  };

  const removeUser = () => {
    setUsername("");
    setSaveUname(removeUname);
  };

  const { userName } = useContext(UserContext);
  return (
    <div className="container mt-4">
      <div>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={userNm}
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
      <div className="flex justify-end px-3 py-2">
        <p>Created By : - {userName}</p>
      </div>
    </div>
  );
};

export default Class;
