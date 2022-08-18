import React from 'react';
import Start from "./Start";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import Survey3 from "./Survey3";
import Survey4 from "./Survey4";
import Survey5 from "./Survey5";
import Survey6 from "./Survey6";
import { Routes, Route } from "react-router-dom";
import "../../App.css";

const MbtiApp = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/survey1" element={<Survey1 />}></Route>
        <Route path="/survey2" element={<Survey2 />}></Route>
        <Route path="/survey3" element={<Survey3 />}></Route>
        <Route path="/survey4" element={<Survey4 />}></Route>
        <Route path="/survey5" element={<Survey5 />}></Route>
        <Route path="/survey6" element={<Survey6 />}></Route>
      </Routes>
    </div>
  );
};

export default MbtiApp;