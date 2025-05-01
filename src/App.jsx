import React, { createContext, useState } from "react";
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

export const UserContext = createContext();

const App = () => {
  const [userName, setUserName] = useState("Rajan");

  // const data = { userName,  setUserName };

  return (
    <UserContext.Provider value={{userName,setUserName}}>
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
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
};

export default App;
