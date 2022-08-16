import React from 'react';
import './ServiceInfo.scss';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";


function ServiceInfo() {

  const IntroBlock = styled.div`
    @media (max-width: 768px) {
      padding: 0px 5px;
    }
    
    h1 {
      margin: 0;
      font-weight: 500;
      font-size: 45px;
      @media (max-width: 768px) {
        font-size: 22px;
      }
    }
    h3 {
      font-weight: 400;
      font-size: 15px;
    }
  `;

  return (
    <div className='bodyBack'>
      <div className='bodyContainer'>
        <div className='fadeContainer'>
          <div className='fadeContent'>
            <div>
              <Fade> 
                {/* 위에서 Import한 Fade모듈을 컴포넌트 형태로 감싸주면
                영역 내부의 태그들만 영향을 받게 된다. 또한 top, bottom 등 방향을 설정해줄 수 있음. */}
                <IntroBlock>
                  <h1>
                  <strong>My Craft Beer🍻</strong>는<br/>
                  수제맥주를 사랑하는 여러분들을 위해<br/>
                  수제맥주집 위치를 공유하고<br/>
                  여러분들의 취향에 맞는<br/>
                  수제맥주 <strong>Style</strong>을 추천해 드립니다.
                  </h1>
                </IntroBlock>
              </Fade>

            </div>
          </div>
        </div>
        
        <div className='fadeContainer'>
          <div className='fadeContent'>
            <Fade bottom big> 
              <IntroBlock>
                <h1>
                  <strong>맥Vigation📡</strong>은<br/>
                  수제맥주를 먹고 싶은데<br/>
                  어디로 가야 할지 모르는 당신에게<br/>
                  <strong>길잡이</strong>가 되어줄 것입니다
                </h1>
                <div className='linkbtn'>
                   맥Vigation 바로가기
                </div>
              </IntroBlock>
            </Fade>
          </div>
        </div>
      
        <div className='fadeContainer'>
          <div className='fadeContent'>
            <Bounce left big> 
              <IntroBlock>
                <h1>
                  홉? &nbsp; IPA? &nbsp; 라거?<br/>
                  생소한 수제맥주 스타일,,<br/>
                  맥주에 대해 잘 모르는 당신<br/>
                  <strong>맥BTI</strong>를 해보세요!<br/>
                  딱 맞는 스타일을 알 수 있어요😁
                </h1>
                <div className='linkbtn'>
                   맥BTI 하러가기
                </div>
              </IntroBlock>
            </Bounce>
          </div>
        </div>

        <div className='fadeContainer'>
          <div className='fadeContent'>
            <Bounce right big> 
              <IntroBlock>
                <h1>
                  <strong>이벤트</strong>하는 곳 어디없나?<br/>
                  <strong>같이 갈 사람</strong>은 어디서 구하지?<br/>
                  오늘을 <strong>기록</strong>할 공간은?<br/>
                  MCB의 <strong>커뮤니티</strong>를 이용하세요!👨‍👦‍👦
                </h1>
                <div className='linkbtn'>
                  커뮤니티 바로가기
                </div>
              </IntroBlock>
            </Bounce>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default ServiceInfo