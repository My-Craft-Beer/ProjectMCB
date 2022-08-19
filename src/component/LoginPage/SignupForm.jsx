import React, {useState, useEffect} from "react";
import './Login.css';
// 로그인 관련 함수
import {
  createUserWithEmailAndPassword,

} from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../../firebase";
import { Link } from "react-router-dom";

//앞서 생성한 config파일과 Firebase/auth로 부터 함수들을 import

const SignupForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
          authService,
          registerEmail,
          registerPassword
      );
      console.log(user);
    } catch (error) {
        console.log(error.message);
    }
  };


  return (
    <div className='All-form'>
      <div className="form-inner">
        <img src="img/HomeLogo.png" className='HomelogoImg' />

        <div className="form-group">
          <label className="signupForm-label" htmlFor="email">아이디: </label>
          <input className="signupForm-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => { setRegisterEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="signupForm-label" htmlFor="password">비밀번호: </label>
          <input className="signupForm-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </div>
        {/* <div className="form-group">
          <label className="signupForm-label" htmlFor="password">비밀번호 확인: </label>
          <input className="signupForm-input"
            type="password"
            name="password"
            id="password"
            onChange={() => console.log("비밀번호 확인")}
          />
        </div>
        <div className="form-group">
          <label className="signupForm-label" htmlFor="name">이름: </label>
          <input className="signupForm-input"
            type="text"
            name="name"
            id="name"
            onChange={() => console.log("이름 입력")}
          />
        </div>
        <div className="form-group">
          <label className="signupForm-label" htmlFor="name">생년월일: </label>
          <input className="signupForm-input"
            type="text"
            name="birth"
            id="birth"
            onChange={() => console.log("생년월일 입력")}
          />
        </div>
        <div className="form-group">
          <label className="signupForm-label" htmlFor="name">휴대전화: </label>
          <input className="signupForm-input"
            type="tel"
            name="tel"
            id="tel"
            onChange={() => console.log("휴대전화 입력")}
          />
        </div> */}
        <div className="form-group">
          {/* <input className="button" type="submit" value="확인" name="search_id_submit" /> */}
          <button className="button" onClick={register}>
            <Link to = "/Login">
              확인
            </Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;