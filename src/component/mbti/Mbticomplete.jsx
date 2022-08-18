import React from 'react';
import Mbti from "./components/mbti/Mbti";
import Survey1 from "./components/mbti/Survey1";
import Survey2 from "./components/mbti/Survey2";
import Survey3 from "./components/mbti/Survey3";
import Survey4 from "./components/mbti/Survey4";
import Survey5 from "./components/mbti/Survey5";
import Survey6 from "./components/mbti/Survey6";
import ResultHop from "./components/mbti/resultHop";
import ResultBlack from "./components/mbti/resultBlack";
import ResultMalt from "./components/mbti/resultMalt";
import ResultBacteria from "./components/mbti/resultBacteria";
import { Routes, Route } from "react-router-dom";


const Mbticomplete = () => {
  return (
    <div>
      <Routes>
        <Route path="/mbti" element={<Mbti />}></Route>        
        <Route path="/survey1" element={<Survey1 />}></Route>
        <Route path="/survey2" element={<Survey2 />}></Route>
        <Route path="/survey3" element={<Survey3 />}></Route>
        <Route path="/survey4" element={<Survey4 />}></Route>
        <Route path="/survey5" element={<Survey5 />}></Route>
        <Route path="/survey6" element={<Survey6 />}></Route>
        <Route path="/resulthop" element={<ResultHop />}></Route>
        <Route path="/resultblack" element={<ResultBlack />}></Route>
        <Route path="/resultmalt" element={<ResultMalt />}></Route>
        <Route path="/resultbacteria" element={<ResultBacteria />}></Route>
      </Routes>
    </div>
  );
};

export default Mbticomplete;