import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contect from "./Components/Contect";
import User from "./Components/User";
import Textarea from "./Components/Textarea";
import Card from "./Components/Card";
import Practice from "./Components/Practice";
import Ref from "./Components/Ref";
import PromiseDemo from "./Components/PromiseDemo";
import Reduser from "./Components/Reduser";
import TodoData from "./Components/TodoData";
import ZodForm from "./Components/ZodForm";
import CustomHooks from "./Components/CustomHooks";
// import Form from "./Components/Form";
// import Callback from "./Components/Callback";

export const UserContext = createContext();

const reducer = (state, action) => {
  if (action.type === "Inc") {
    console.log(state);
    return state + 1;
  }
  if (action.type === "Dec") {
    console.log(state);
    return state - 1;
  }
};

const reducer1 = (state, action) => {
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


const App = () => {
  const [main, dispatch] = useReducer(reducer1, []);
  const [userName, setUserName] = useState("Rajan");

  const [number, setNumber] = useState(0);

  const [num, dispatch1] = useReducer(reducer, 0);

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        number,
        setNumber,
        num,
        dispatch1,
        main,
        dispatch,
      }}
    >
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contect" element={<Contect />} />
              <Route path="user/:username" element={<User />} />
              <Route path="textarea" element={<Textarea />} />
              <Route path="card" element={<Card />} />
              <Route path="practice" element={<Practice />} />
              <Route path="refCase" element={<Ref />} />
              <Route path="promise" element={<PromiseDemo />} />
              <Route path="reducer" element={<Reduser />} />
              <Route path="form" element={<ZodForm />} />
              <Route path="tododata" element={<TodoData />} />
              <Route path="customhooks" element={<CustomHooks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
};

export default App;
