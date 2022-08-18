import React from "react";

const SearchForm = () => {
  return (
    <form>
      <div className="form-inner">
        <img src={require("./img/Logo.png")} />

        {/* 아이디 찾기 */}
        <h2>아이디 찾기</h2>
        <div className="form-group">
          <label> 이름 </label>
          <input type="text" maxLength="15" name="search_id_name" />
        </div>

        {/* 비밀번호 찾기 */}
        <h2>비밀번호 찾기</h2>
        <div className="form-group">
          <input type="submit" value="확인" name="search_id_submit" />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
