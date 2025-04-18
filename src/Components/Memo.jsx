import React, { createContext, useContext, useState } from "react";
import { memo } from "react";
import { UserContext } from "../App";

const NameContext = createContext();

const Memo = ({ name }) => {
  const [nm] = useState("Rajan");

  return (
    <NameContext.Provider value={nm}>
      <div>
        <p>Hello my name is {name} </p>
        <div>
          <div>my name is {nm}</div>
        </div>
        <User2 />
      </div>
    </NameContext.Provider>
  );
};

const User2 = () => {
  return (
    <div>
      <div>This ia user2</div>
      <User3 />
    </div>
  );
};

const User3 = () => {
  return (
    <div>
      <div>This ia user3</div>
      <User4 />
    </div>
  );
};

const User4 = () => {
  return (
    <div>
      <div>This ia user4</div>
      <User5 />
    </div>
  );
};

const User5 = () => {
  const Unm = useContext(NameContext);

  const { userName } = useContext(UserContext);

  return (
    <>
      <div>
        <div>
          <p>hello i'm {Unm}</p>
        </div>
        <div className="flex justify-end px-3">
          <p>Created by : - {userName}</p>
        </div>
      </div>
    </>
  );
};
export default memo(Memo);
