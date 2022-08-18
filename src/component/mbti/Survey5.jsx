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


function Survey5(props) {
  const [count, setCount] = useState(4);
  const navigate = useNavigate()

  function add_count(){
    if (count === 6){
      setCount(4);
    }
    else{
      setCount(count + 1);
    }
    navigate('/survey6')
  }


  return (
    <div className='backgruound-survey5'>
      <Container>
        {/*%로 부모넓이의 1/6 씩 넓어짐*/}  
        <Progress width={(count/6)*100 + "%"}/>
      </Container>
      <h2 className='backgruound-survey-name'>본인이 생각하는 맥주란</h2>
      <div className='btn-survey-column'>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>맥주는 개성이 뚜렷해야지</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}  >맥주는 시원하고 가벼워야지</button>
        <button className='btn-survey1-each' onClick={()=>{add_count()}}>관심 없어</button>
      </div>
    </div>
  );
}

export default Survey5;

