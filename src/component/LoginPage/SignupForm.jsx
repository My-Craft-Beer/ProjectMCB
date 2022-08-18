import React from "react";

const SignupForm = () => {
  return (
    <div>
      <div className="form-inner">
        <img src={require("./img/Logo.png")} />

        <div className="form-group">
          <label htmlFor="email">아이디: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={() => console.log("아이디 입력")}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
