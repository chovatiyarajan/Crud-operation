import React, { useContext } from "react";
import User2 from "./User2";
import { UserContext } from "../App";

const User1 = () => {
  const { userName, setUserName } = useContext(UserContext);
  console.log("@@@@@@@", userName);

  const changeUser = () => {
    if (userName === "Sumit") {
      alert("User is already Changed !!");
    } else {
      const isConfirmed = window.confirm(
        "Are you sure you want to chang user !!"
      );
      if (isConfirmed) {
        setUserName("Sumit");
      }
    }
  };

  return (
    <>
      <div>my name is {userName} !!</div>
      <div>
        <User2 />
        <div className="flex justify-end py-3">
          <button
            onClick={changeUser}
            className="py-2 px-3  bg-indigo-900 rounded-md text-white"
          >
            Change User !!
          </button>
        </div>
      </div>
    </>
  );
};

export default User1;
