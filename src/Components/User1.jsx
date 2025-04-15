import React, { useContext } from "react";
import User2 from "./User2";
import { UserContext } from "../App";

const User1 = () => {
  const {userName, setUserName} = useContext(UserContext);
  console.log("@@@@@@@", userName);

  const changeUser = () => {
    setUserName("Sumit");
  };

  return (
    <>
      <div>my name is {userName} !!</div>
      <div>
        <button onClick={changeUser}>Change User !!</button>
        <User2 />
      </div>
    </>
  );
};

export default User1;
