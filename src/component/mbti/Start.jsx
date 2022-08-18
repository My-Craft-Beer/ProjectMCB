import React from 'react';
import './Start.module.css'
import { Routes, Route, Link } from "react-router-dom";

function Start(props) {
  return (
    <div>
      <Link to="/survey1"><div className='backgruound'></div>
      </Link>
    </div>
  );
}

export default Start