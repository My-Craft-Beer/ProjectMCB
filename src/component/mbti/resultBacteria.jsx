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
        <img src={require('./kooImg/bacteria/yeast 1.png')} alt="" />
        <h1>효모러버</h1>
        <div className='text-box-black'>
          <p>때로는 열대과일과 같은 상큼한 향이,</p>
          <p>때로는 바나나와 같은 달큰한 향이</p>
          <p>나는 효모 기반의 맥주들</p>
          <br />
          <p>당신은 진정으로</p>
          <p>맥주를 사랑하는군요</p>

        </div>

        <br />

        <h3>추천 맥주</h3>

        <div className='mart'>
          <img src={require('./kooImg/bacteria/파울라너.png')} alt="파울라너" />
          <img className="margin" src={require('./kooImg/bacteria/블루문.png')}  alt="블루문" />
          <img
            className="margin"
            src={require('./kooImg/bacteria/호가든.png')}
            alt="호가든"
          />
        </div>
        <h3>추천 수제맥주집</h3>
        <div className="pub">
          <img src={require('./kooImg/bacteria/툼브로이.png')} alt="툼브로이" />
          <img
            className="margin"
            src={require('./kooImg/bacteria/제주맥주.png')}
            alt="제주맥주"
          />
          <img
            className="margin"
            src={require('./kooImg/bacteria/바이젠하우스.jpg')}
            alt="바이젠하우스"
          />
        </div>
        <button className='restart' onClick={() => {goHome()
        dispatch(restart())}}>다시 하기</button>
      </div>
    </div>
  );
};

export default ResultMalt;