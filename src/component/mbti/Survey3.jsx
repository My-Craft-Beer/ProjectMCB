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


function Survey3(props) {
  const [count, setCount] = useState(2);
  const navigate = useNavigate()

  function add_count(){
    if (count === 6){
      setCount(0);
    }
    else{
      setCount(count + 1);
    }
    navigate('/survey4')
  }


  return (
    <div className='backgruound-survey3'>
      <Container>
        {/*%로 부모넓이의 1/6 씩 넓어짐*/}  
        <Progress width={(count/6)*100 + "%"}/>
      </Container>
      <h2 className='backgruound-survey-name'>선호하는 맥주 맛은</h2>
      <div className='btn-survey-column'>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>상큼하고 달달한 맛</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}  >강렬한 맛</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>곡물의 고소한 맛</button>
      </div>
    </div>
  );
}

export default Survey3;

