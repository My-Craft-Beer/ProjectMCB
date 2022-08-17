import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function Login() {
  const programUser = {
    name: "김서현",
    email: "july8560@naver.com",
    password: "july8560",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    //콘솔창에 로그인 정보 뜨도록 함
    console.log();
    //로그인 됐을 때
    if (
      details.email == programUser.email &&
      details.password == programUser.password
    ) {
      console.log("logged in");

      setUser({
        email: details.email,
      });
    }
    //로그인 실패했을 때
    else {
      console.log("detail do not match");

      setError("아이디와 비밀번호를 다시 확인하십시오.");
    }
  };
  //로그아웃
  const Logout = () => {
    console.log("logged out");

    setUser({ email: "" });
  };

  return (
    <div>
      <div className="profile">
        {user.email != "" ? (
          //로그인 됐을 때
          <div>홈페이지 연결</div>
        ) : (
          //로그인 실패했을 때
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </div>
  );
}

export default Login;
