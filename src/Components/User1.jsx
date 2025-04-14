import React, { createContext, useState } from "react";
import User2 from "./User2";

const User1 = () => {
  const [Name] = useState("Rajan");
  return (
    <>
      <div>my name is {Name} !!</div>
      <div>
        <User2 />
      </div>
    </>
  );
};

export default User1;
