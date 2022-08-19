import React from 'react';
import './Result.module.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { restart } from "../../store";



const ResultMalt = () => {

  const navigate = useNavigate();
  let dispatch = useDispatch()
  const goHome = () => {
    navigate('/MaBTI')
  }

  return (
    <div>
      <div id="whole">
        <h4>당신의 맥BTI는?</h4>
        <img src={require('./kooImg/malt/wheat-sack 1.png')} alt="" />
        <h1>고소미</h1>
        <div className='text-box-black'>
          <p>곡물에서 나는 고소한 맛과</p> 
          <p>향을 즐기는 당신</p>
          <br />
          <p>일단 맥주 색이 갈색이다 싶으면</p>
          <p>집으시고 보는 겁니다</p>
        </div>

        <br />

        <h3>추천 맥주</h3>

        <div className='mart'>
          <img src={require('./kooImg/malt/진라거.png')} alt="진라거" />
          <img className="margin" src={require('./kooImg/malt/맥아더.png')}  alt="맥아더" />
          <img
            className="margin"
            src={require('./kooImg/malt/파울라너 헬.png')}
            alt="파울라너 헬"
          />
        </div>
        <h3>추천 수제맥주집</h3>
        <div className="pub">
          <img src={require('./kooImg/malt/툼브로이.png')} alt="툼브로이" />
          <img
            className="margin"
            src={require('./kooImg/malt/맥파이.jpg')}
            alt="맥파이"
          />
          <img
            className="margin"
            src={require('./kooImg/malt/퍼센트펍.jpg')}
            alt="퍼센트펍"
          />
        </div>
        <button className='restart' onClick={() => {goHome()
        dispatch(restart())}}>다시 하기</button>
      </div>
    </div>
  );
};

export default ResultMalt;