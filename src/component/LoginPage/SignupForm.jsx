import React, {useState, useEffect} from "react";
import './Login.css';

const SignupForm = () => {


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
            onChange={() => console.log("아이디 입력")}
          />
        </div>
        <div className="form-group">
          <label className="signupForm-label" htmlFor="password">비밀번호: </label>
          <input className="signupForm-input"
            type="password"
            name="password"
            id="password"
            onChange={() => console.log("비밀번호 입력")}
          />
        </div>
        <div className="form-group">
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
        </div>
        <div className="form-group">
          <input className="button" type="submit" value="확인" name="search_id_submit" />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;