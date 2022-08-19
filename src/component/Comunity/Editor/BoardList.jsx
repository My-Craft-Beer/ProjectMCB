// 필터 정렬기능 최신순, 등등
// props value는 select가 어떤거 선택하는지 역할, onChange select가 선택했을 떄 변화, option은 들어갈 option
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyButton from "../util/MyButton";
import BoardItem from "../Item/BoardItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 날" },
  { value: "bad", name: "안좋은 날" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const BoardList = ({ boardList }) => {
  // 새 일기쓰기 이동을 위해 네비게이트 import 후 선언!
  const navigate = useNavigate();

  // 정렬기능
  const [sortType, setSortType] = useState("latest");
  //   감정별 분류
  const [filter, setFilter] = useState("all");

  // 최신순이나, 오래된 순 클릭 했을 떄 값이 정렬되는 기능
  const getProcessDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.livearea) <= 1;
      } else {
        return parseInt(item.livearea) > 1;
      }
    };

    // 객체 배열은 비교함수 만들기
    //비교함수
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    // stringify -> 괄호 안 문자열로 바꿈 , parse -> 다시 배열로 복호화
    const copyList = JSON.parse(JSON.stringify(boardList));
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
    // 비교함수 반환
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          {/* 정렬기능 */}
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>

        <div className="right_col">
          {/* 글쓰기 공간으로 이동 navigate 선언 후 이동경로 설정 */}
          <MyButton
            type={"positive"}
            text={"글쓰기"}
            onClick={() => navigate("/BoardNew")}
          />
        </div>
      </div>

      {getProcessDiaryList().map((it) => (
        // 밑에 쌓일 부분 DiaryItem
        <BoardItem key={it.id} {...it}/>
        
      ))}
      <div className="home_btn" onClick={() => navigate("/ComuMainhome")}><h3>홈으로 돌아가기</h3></div>
    </div>
  );
};

BoardList.defaultProps = {
  boardList: [],
};

export default BoardList;
