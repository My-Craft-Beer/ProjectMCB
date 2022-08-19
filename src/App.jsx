import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import React, { useReducer, useRef } from "react";
import Map5 from './component/Map/Map5';
import ModalContainer from './component/ModalMenu/Modalcontainer';
import ServiceInfo from './component/ServiceInfo/ServiceInfo';
// import LogIn from './component/LoginPage/Login';

// Mbti
import Mbti from "./component/mbti/Mbti";
import Survey1 from "./component/mbti/Survey1";
import Survey2 from "./component/mbti/Survey2";
import Survey3 from "./component/mbti/Survey3";
import Survey4 from "./component/mbti/Survey4";
import Survey5 from "./component/mbti/Survey5";
import Survey6 from "./component/mbti/Survey6";
import ResultHop from "./component/mbti/resultHop";
import ResultBlack from "./component/mbti/resultBlack";
import ResultMalt from "./component/mbti/resultMalt";
import ResultBacteria from "./component/mbti/resultBacteria";

import Login from "./component/LoginPage/LoginForm";
import SignupForm from "./component/LoginPage/SignupForm";
import SearchForm from "./component/LoginPage/SearchForm";
import Mypage from './component/LoginPage/Mypage';

// 4개 페이지 import
import DiaryHome from "./component/Comunity/ContentsHome/DiaryHome";
import DiaryNew from "./component/Comunity/New/DiaryNew";
import DiaryEdit from "./component/Comunity/Edit/DiaryEdit";
import DiaryDetail from "./component/Comunity/Details/DiaryDetail";
import ComuMainHome from "./component/Comunity/ComuMainHome/ComuMainHome";

// 게시판
import BoardHome from "./component/Comunity/ContentsHome/BoardHome";
import BoardNew from "./component/Comunity/New/BoardNew";
import BoardEdit from "./component/Comunity/Edit/BoardEdit";
import BoardDetail from "./component/Comunity/Details/BoardDetail";

// 게시판 CRUD
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetID);
      break;
    }

    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }

    case "BoardCREATE": {
      newState = [action.data, ...state];
      break;
    }

    case "BoardEDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }

    default:
      return state;
  }
  return newState;
};
// REMOVE, EDIT, CREATE 를 컨텍스트 생성해서 공급하기
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

// 더미데이터 활용해서 일기 만들기
const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1번",
    date: 1660197970161,
    boardcontent: "게시물1",
    livearea: 1,
  },

  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2번",
    date: 1660197970162,
    boardcontent: "게시물2",
    livearea: 2,
  },

  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3번",
    date: 1660197970163,
    boardcontent: "게시물3",
    livearea: 3,
  },

  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4번",
    date: 1660197970164,
    boardcontent: "게시물4",
    livearea: 4,
  },

  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5번",
    date: 1660197970165,
    boardcontent: "게시물5",
    livearea: 5,
  },

  // {
  //   id: 6,
  //   emotion: 1,
  //   content: "오늘의 일기 6번",
  //   date: 1660197970166,
  //   boardcontent: "게시물6",
  //   livearea: 6,
  // },

  // {
  //   id: 7,
  //   emotion: 2,
  //   content: "오늘의 일기 7번",
  //   date: 1660197970167,
  //   boardcontent: "게시물7",
  //   livearea: 7,
  // },

  // {
  //   id: 8,
  //   emotion: 3,
  //   content: "오늘의 일기 8번",
  //   date: 1660197970168,
  //   boardcontent: "게시물8",
  //   livearea: 8,
  // },

  // {
  //   id: 9,
  //   emotion: 4,
  //   content: "오늘의 일기 9번",
  //   date: 1660197970169,
  //   boardcontent: "게시물9",
  //   livearea: 9,
  // },

  // {
  //   id: 10,
  //   emotion: 5,
  //   content: "오늘의 일기 10번",
  //   date: 1660197970170,
  //   boardcontent: "게시물10",
  //   livearea: 10,
  // },

];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  // Date의 밀리세컨즈 구하기
  console.log(new Date().getTime());

  const dataId = useRef(11);

  //CREATE
  // 파라미터로 date도 받는 이유는 날짜확인 목적
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  const onboardCreate = (date, boardcontent, livearea) => {
    dispatch({
      type: "BoardCREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        boardcontent,
        livearea,
      },
    });
    dataId.current += 1;
  };

  //EDIT
  const onboardEdit = (targetId, date, boardcontent, livearea) => {
    dispatch({
      type: "BoardEDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        boardcontent,
        livearea,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      {/* REMOVE, CREATE, EDIT 기능 컨텍스트, value로 onCreate, onRemove, onEdit 전달 */}
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
          onboardCreate,
          onboardEdit,
        }}
      >
          <div className="App">
            <Router>
              <ModalContainer />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/MacVigation" element={<Map5 />} />
                <Route exact path="/serviceInfo" element={<ServiceInfo />} />

                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/SearchForm" element={<SearchForm />} />
                <Route exact path="/SignupForm" element={<SignupForm />} />
                <Route exact path="/serviceInfo" element={<ServiceInfo />} />
                <Route exact path="/mypage" element={<Mypage />} />
                
                {/* 일기장 */}
                <Route path="/DiaryHome" element={<DiaryHome />} />
                <Route path="/new" element={<DiaryNew />} />
                <Route path="/edit/:id" element={<DiaryEdit />} />
                <Route path="/diary/:id" element={<DiaryDetail />} />

                {/* mbti */}
                <Route path="/MaBTI" element={<Mbti />}/>
                <Route path="/survey1" element={<Survey1 />}/>
                <Route path="/survey2" element={<Survey2 />}/>
                <Route path="/survey3" element={<Survey3 />}/>
                <Route path="/survey4" element={<Survey4 />}/>
                <Route path="/survey5" element={<Survey5 />}/>
                <Route path="/survey6" element={<Survey6 />}/>
                <Route path="/resulthop" element={<ResultHop />}/>
                <Route path="/resultblack" element={<ResultBlack />}/>
                <Route path="/resultmalt" element={<ResultMalt />}/>
                <Route path="/resultbacteria" element={<ResultBacteria />}/>

                {/* 메인 홈 */}
                <Route path="/ComuMainHome" element={<ComuMainHome />} />

                {/*게시판 */}
                <Route path="/BoardHome" element={<BoardHome />} />
                <Route path="/BoardNew" element={<BoardNew />} />
                <Route path="/BoardEdit/:id" element={<BoardEdit />} />
                <Route path="/BoardDetail/:id" element={<BoardDetail />} />
              </Routes>
            </Router>
          </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
