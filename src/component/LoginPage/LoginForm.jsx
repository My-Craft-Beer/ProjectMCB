import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import {
    onAuthStateChanged, // 코드 추가
    signInWithEmailAndPassword, // 코드 추가
    signOut, // 코드추가
  } from "firebase/auth";
  import { authService } from "../../firebase";

function LoginForm () {
    const [loginEmail, setLoginEmail] = useState(""); // 코드 추가
    const [loginPassword, setLoginPassword] = useState(""); // 코드 추가
    const [user, setUser] = useState({}); // 코드 추가
    const [loginAuth, setLoginAuth] = useState(false);
  
    onAuthStateChanged(authService, (currentUser) => {
        setUser(currentUser);
    });

  
    //로그인
    const login = async () => {
      try {
          const user = await signInWithEmailAndPassword(
              authService,
              loginEmail,
              loginPassword
          );
          console.log(user);
      } catch (error) {
          console.log(error.message);
      }
    };
  
    //로그아웃
    const logout = async () => {
      await signOut(authService);
    };

    // const [details, setDetails] = useState({ email: "", password: "" });

    // const submitHandler = (e) => {
    //   e.preventDefault();
  
    //   Login(details);
    // };

    return (
        <div className='All-form'>
            <form >
            <div className="form-inner">
                <img src="img/HomeLogo.png" className='HomelogoImg'></img>

                {/* {error != "" ? <p>{error}</p> : ""} */}

                <div className="form-group">
                    <label htmlFor="email">ID: </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Email'
                    onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}
                    />
                    {/* value={details.email} input 안 내용 */}
                </div>
                <div className="form-group">
                    <label htmlFor="password">password: </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='Password'
                    onChange={(e) =>{
                        setLoginPassword(e.target.value);
                    }}
                    />
                    {/* value={details.password} */}
                </div>
                <div className="sub-find-detail">
                    <Link to="/SearchForm">아이디/비밀번호 찾기</Link>
                </div>
                <div className="sub-sign-in">
                    <Link to="/SignupForm">회원가입</Link>
                </div>
                <button className='loginbtn' onClick={login}><Link to="/">LogIn</Link></button>
                {/* <div>User Logged In:</div>
                <div>{user?.email}</div>
                <button onClick={logout}>로그아웃</button> */}
            </div>
            </form>
        </div>
    );
};

export default LoginForm;