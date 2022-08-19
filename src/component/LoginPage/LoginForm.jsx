import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginForm ({Login, error}) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = (e) => {
      e.preventDefault();
  
      Login(details);
    };

    return (
        <div className='All-form'>
            <form onSubmit={submitHandler}>
            <div className="form-inner">
                <img src="img/HomeLogo.png" className='HomelogoImg'></img>

                {error != "" ? <p>{error}</p> : ""}

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
                <div className="sub-find-detail">
                    <Link to="/SearchForm">아이디/비밀번호 찾기</Link>
                </div>
                <div className="sub-sign-in">
                    <Link to="/SignupForm">회원가입</Link>
                </div>
                <Link to="/">
                <input type="submit" value="LOGIN" />
                </Link>
            </div>
            </form>
        </div>
    );
};

export default LoginForm;