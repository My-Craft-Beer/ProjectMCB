import React from 'react';

import './Result.module.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { restart } from "../../store";




const ResultHop = () => {
  
  const navigate = useNavigate();
  let dispatch = useDispatch()
  const goHome = () => {
    navigate('/MaBTI')
  }


  return (
    <div>
      <div id="whole">
        <h4>당신의 맥BTI는?</h4>
        <img src={require('./kooImg/hop/hops 1.png')} alt="" />
        <h1>홉휴먼</h1>
        <div className='text-box'>
          <p>홉에서 나는 상큼한 향들을</p>
          <p>사랑하시는 군요!</p>
          <br />
          <p>씁쓸한 맛이 뒤따르지만</p>
          <p>그것마저도 즐길 줄 아는 당신</p>
          <p>어서 빨리 IPA를 집으세요</p>
        </div>

        <br />

        <h3>추천 맥주</h3>

        <div className='mart'>
          <img src={require('./kooImg/hop/구스ipa.png')} alt="구스ipa" />
          <img className="margin" src={require('./kooImg/hop/구미호.jpg')}  alt="구미호" />
          <img
            className="margin"
            src={require('./kooImg/hop/덕덕구스.png')}
            alt="덕덕구스"
          />
        </div>
        <h3>추천 수제맥주집</h3>
        <div className="pub">
          <img src={require('./kooImg/hop/대도양조장.jpg')} alt="대도양조장" />
          <img
            className="margin"
            src={require('./kooImg/hop/에일크루.jpg')}
            alt="에일크루"
          />
          <img
            className="margin"
            src={require('./kooImg/hop/craftbros.jpeg')}
            alt="크래프트브로스"
          />
        </div>
      <button className='restart' onClick={() => {goHome()
        dispatch(restart())}}>다시 하기</button>
      </div>
    </div>
  );
};

export default ResultHop;