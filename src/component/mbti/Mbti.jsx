import React from 'react';
import './Start.module.css'
import { Link } from "react-router-dom";

function Mbti(props) {
  return (
    <div>
      {/* <img className='test' src="img/kooImg/맥bti-start.png" alt="" /> */}
      <Link to="/survey1"><div className='backgruound'></div>
      </Link>
      {/* <h1>fdsafsdaf</h1> */}
    </div>
  );
}

export default Mbti