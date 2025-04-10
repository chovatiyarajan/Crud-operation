import React, { createContext, useContext, useState } from "react";

const UserNameContext = createContext();

const Demo = () => {
  const [user] = useState("Rajan");

  return (
    <UserNameContext.Provider value={user}>
      <div className="container mt-5">
        <p>this is useContext</p>
        <div>Hello {user} !!</div>
        <User2 />
      </div>
    </UserNameContext.Provider>
  );
};

const User2 = () => {
  return (
    <>
      <div>this is user2</div>
      <User3 />
    </>
  );
};
const User3 = () => {
  return (
    <>
      <div>this is user3</div>
      <User4 />
    </>
  );
};

const User4 = () => {
  return (
    <>
      <div>this is user4</div>
      <User5 />
    </>
  );
};

const User5 = () => {
  const userName = useContext(UserNameContext);

  return <div>hell0 {userName} again !!</div>;
};

export default Demo;
