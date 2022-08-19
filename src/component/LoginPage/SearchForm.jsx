import React from "react";
import "./Login.css";

const SearchForm = () => {
  return (
    <div className='All-form'>
    <form>
      <div className="form-inner">
        <img src="img/HomeLogo.png" className='HomelogoImg' />

        {/* 아이디 찾기 */}
        <h3>아이디 찾기</h3>
        <div className="form-group">
          <label> 이름 </label>
          <input type="text" maxLength="15" name="search_id_name" />
        </div>
        <div className="form-group">
          <label> 이메일 </label>
          <input type="email" name="search_id_email" />
        </div>
        <div className="form-group">
          <input type="submit" value="확인" name="search_id_submit" />
        </div>

        {/* 비밀번호 찾기 */}
        <h3>비밀번호 찾기</h3>
        <div className="form-group">
          <label> 아이디 </label>
          <input type="email" name="search_id_Id" />
        </div>
        <div className="form-group">
          <label> 이름 </label>
          <input type="text" maxLength="15" name="search_id_name" />
        </div>
        <div className="form-group">
          <label> 이메일 </label>
          <input type="email" name="search_id_email" />
        </div>
        <div className="form-group">
          <label> 휴대폰번호 </label>
          <input type="tel" maxLength="11" name="search_id_name" />
        </div>
        <div className="form-group">
          <input type="submit" value="확인" name="search_id_submit" className="button"/>
        </div>
      </div>
    </form>
    </div>
  );
};

export default SearchForm;
