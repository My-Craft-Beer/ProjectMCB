import React, { useState } from "react";
import "./Login.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <img src={require("../img/Logo.png")}></img>

          {error != "" ? <p>{error}</p> : ""}

          {/* 아이디 */}
          <div className="form-group">
            <label htmlFor="email">ID: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <div className="sub-find-detail">아이디/비밀번호 찾기</div>
          <div className="sub-sign-in">회원가입</div>
          <input type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
