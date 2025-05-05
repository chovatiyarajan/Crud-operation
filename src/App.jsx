import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contect from "./Components/Contect";
import User from "./Components/User";
import Textarea from "./Components/Textarea";
import Card from "./Components/Card";
import Class from "./Components/Class";
import Memo from "./Components/Memo";
import Practice from "./Components/Practice";
import Ref from "./Components/Ref";
import PromiseDemo from "./Components/PromiseDemo";
import Reduser from "./Components/Reduser";
import TodoData from "./Components/TodoData";

export const UserContext = createContext();

const reducer = (state , action) => {
  if(action.type === "Inc"){
    console.log(state);
   return state + 1;
  }
  if(action.type === "Dec"){
    console.log(state);
    return state - 1;
  }
}

const App = () => {
  const [userName, setUserName] = useState("Rajan");

  // const data = { userName,  setUserName };

  const [number, setNumber] = useState(0);

  const [num, dispatch] = useReducer(reducer, 0);

  return (
    <UserContext.Provider value={{ userName, setUserName, number, setNumber ,  num ,  dispatch }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contect" element={<Contect />} />
              <Route path="user/:username" element={<User />} />
              <Route path="class" element={<Class />} />
              <Route path="textarea" element={<Textarea />} />
              <Route path="card" element={<Card />} />
              <Route path="memo" element={<Memo name="rajan " />} />
              <Route path="practice" element={<Practice />} />
              <Route path="refCase" element={<Ref />} />
              <Route path="promise" element={<PromiseDemo />} />
              <Route path="reducer" element={<Reduser />} />
              <Route path="tododata" element={<TodoData />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
};

export default App;
