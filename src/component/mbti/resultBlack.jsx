import React from 'react';
import './Result.module.css';




const ResultBlack = () => {

  return (
    <div>
      <div id="whole">
        <h4>당신의 맥BTI는?</h4>
        <img src={require('./kooImg/black/master 1.png')} alt="" />
        <h1>고인물</h1>
        <div className='text-box-black'>
          <p>당신이 왜 여기에 있을까요?</p>
          <br />
          <p>맥덕의 재능을 가진 당신</p>
          <p>초콜렛과 커피 향을 즐기며</p>
          <p>맥주가 흐르는 빵이라 외치는 당신에게</p>
          <br />
          <p>제가 더 무슨 말을 하겠습니까</p>
          <p>지나가시지요.</p>
        </div>

        <br />

        <h3>추천 맥주</h3>

        <div className='mart'>
          <img src={require('./kooImg/black/기네스_드래프트.png')} alt="기네스 드래프트" />
          <img className="margin" src={require('./kooImg/black/기네스_오리지날.png')}  alt="기네스 오리지날" />
          <img
            className="margin"
            src={require('./kooImg/black/말표.png')}
            alt="말표"
          />
        </div>
        <h3>추천 수제맥주집</h3>
        <div className="pub">
          <img src={require('./kooImg/black/플레이그라운드.jpg')} alt="플레이그라운드" />
          <img
            className="margin"
            src={require('./kooImg/black/맥파이.jpg')}
            alt="맥파이"
          />
          <img
            className="margin"
            src={require('./kooImg/black/서울브루어리.png')}
            alt="서울 브루어리"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultBlack;