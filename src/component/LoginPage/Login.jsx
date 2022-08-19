// import React from 'react';
// import { Link } from "react-router-dom";
// import { useState } from 'react';
// import LoginForm from './LoginForm';



// function Login() {
//   // const programUser = {
//   //   name: "김서현",
//   //   email: "july8560@naver.com",
//   //   password: "july8560",
//   // };

//   // const [user, setUser] =useState({email:""});
//   // const [error, setError] = useState("");

//   // const Login = (details) => {
//   //   console.log();
//   //   if (
//   //     details.email === programUser.email &&
//   //     details.password === programUser.password
//   //   ) {
//   //     console.log("logged in");

//   //     setUser({
//   //       email: details.email,
//   //     });
//   //   } else {
//   //     console.log("detail do not match");

//   //     setError("아이디와 비밀번호를 다시 확인하십시오.");
//   //   }
//   // }
//   // const Logout = () => {
//   //   console.log("logged out");

//   //   setUser({email: ""});
//   // }

//   return (
//     <div className='All-form'>
//       <div>
//         {user.email !== "" ? (
//           <div>홈페이지</div>
//         ) : (
//           <LoginForm Login={Login} error={error} />
//         )}
//       </div>
//     </div>
//   )
// }

// export default Login;