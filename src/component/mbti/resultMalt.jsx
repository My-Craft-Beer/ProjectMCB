import React from 'react';
import './Result.module.css';




const ResultMalt = () => {

  return (
    <div>
      <div id="whole">
        <h4>당신의 맥BTI는?</h4>
        <img src={require('./kooImg/malt/wheat-sack 1.png')} alt="" />
        <h1>고소미</h1>
        <div className='text-box-black'>
          <p>저희 할아버지는 고소한 걸 드실 때면</p>
          <p>항상 '꼬신게 최고여~' 라고 하셨더랬죠</p>
          <br />
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
      </div>
    </div>
  );
};

export default ResultMalt;