import React, { useState } from "react";
import User1 from "./User1";

const User = () => {
  const [user] = useState("rajan");

  return (
    <>
      <div className="container mt-3">
        <div>hello {user}</div>
        <User2 getUser={user} />
      </div>
      <div>
      </div>
      <div className="mx-10">
        <User1 />
      </div>
    </>
  );
};

const User2 = ({ getUser }) => {
  return (
    <>
      <div>this is user2</div> <User3 getUser={getUser} />
    </>
  );
};

const User3 = ({ getUser }) => {
  return (
    <>
      <div>this is user3</div> <User4 user={getUser} />
    </>
  );
};

const User4 = ({ user }) => {
  return (
    <>
      <div>this is user4</div> <User5 getUser={user} />
    </>
  );
};
const User5 = ({ getUser }) => {
  return (
    <>
      <div>this is {getUser}</div>
    </>
  );
};

export default User;
