import React from 'react';

// 라이브러리
import styled from 'styled-components'
import { Link } from "react-router-dom";
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


function Survey6(props) {
  const [count, setCount] = useState(5);

  function add_count(){
    if (count === 6){
      setCount(5);
    }
    else{
      setCount(count + 1);
    }
  }


  return (
    <div className='backgruound-survey6'>
      <Container>
        {/*%로 부모넓이의 1/6 씩 넓어짐*/}  
        <Progress width={(count/6)*100 + "%"}/>
      </Container>
      <h2 className='backgruound-survey-name'>맥주를 먹을 때</h2>
      <div className='btn-survey-column'>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>안주는 거추장스러울 뿐</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}  >안주 없이 어떻게 맥주를?</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>관심 없어</button>
      </div>
    </div>
  );
}

export default Survey6;

