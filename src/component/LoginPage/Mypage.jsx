import React from 'react'

function Mypage() {
  return (
    <>
    <div className='All-form'>
      <div className="form-inner">
        <img src="img/HomeLogo.png" className='HomelogoImg' />

        <h2>회원정보</h2>

        <img src={ require('./img/account_circle.png') } />

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
          <label className="signupForm-label" htmlFor="name">이메일: </label>
          <input className="signupForm-input"
            type="email"
            name="email"
            id="email"
            onChange={() => console.log("이메일")}
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
    </>
  )
}

export default Mypage