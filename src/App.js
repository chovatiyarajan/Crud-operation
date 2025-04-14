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
import Practice from "./Components/Practice"

const UserContext = createContext();

const App = () => {

  const [userName,setUserName] = useState();

  return (
    <div>
      <Context.Provider value={userName}>
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
            <Route path="practice" element={<Practice  />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
