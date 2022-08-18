import React from 'react';

// 라이브러리
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
// 함수
import { useState } from 'react';
// CSS
import './Survey.module.css';

const Container = styled.div`
  margin: 25% auto 10%;
  background-color: #eee;
  width: 86%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Progress = styled.div`
  background-color: #FDE466;
  width: ${props => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;


function Survey4(props) {
  const [count, setCount] = useState(3);
  const navigate = useNavigate()

  function add_count(){
    if (count === 6){
      setCount(3);
    }
    else{
      setCount(count + 1);
    }
    navigate('/survey5')
  }


  return (
    <div className='backgruound-survey4'>
      <Container>
        {/*%로 부모넓이의 1/6 씩 넓어짐*/}  
        <Progress width={(count/6)*100 + "%"}/>
      </Container>
      <h2 className='backgruound-survey-name'>선호하는 맥주 색은</h2>
      <div className='btn-survey1'>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>선명한 황금빛</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}  >불투명한 오렌지주스 색</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>짙은 갈색</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>검은색</button>
      </div>
    </div>
  );
}

export default Survey4;

