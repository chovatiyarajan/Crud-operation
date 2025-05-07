import React, { createContext, useContext, useState, useMemo } from "react";
import { memo } from "react";
import { UserContext } from "../App";

const NameContext = createContext();

const num = new Array(50_00_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 40_00_000,
  };
});

const Memo = () => {
  const [nm] = useState("Rajan");

  const [counter, setcounter] = useState(0);

  const [number, setNumber] = useState(num);

  const magical = useMemo(
    () => number.find((item) => item.isMagical === true),
    [number]
  );

  return (
    <>
      <div className="bg-slate-300 p-5 mt-3">
        <div className="text-4xl  ">Practice for useContext</div>
        <NameContext.Provider value={nm}>
          <div>
            <p>Hello my name is </p>
            <div>
              <div>my name is {nm}</div>
            </div>
            <User2 />
          </div>
        </NameContext.Provider>
        <div className="text-3xl">anove code is stops props drilling</div>
      </div>

      <div className="bg-indigo-300 p-5 mt-3">
        <div className="text-3xl my-3">
          <p>{magical.index}</p>
        </div>
        <div>
          <button
            className="btn btn-light"
            onClick={() => {
              setcounter(counter + 1);
              if (counter >= 15) {
                return setNumber(
                  new Array(10_00_000).fill(0).map((_, i) => {
                    return {
                      index: i,
                      isMagical: i === 9_00_000,
                    };
                  })
                );
              }
            }}
          >
            Count : {counter}
          </button>
        </div>
        <div>
          <p className="text-2xl">Above code is done with useMemo</p>
        </div>
      </div>
    </>
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
