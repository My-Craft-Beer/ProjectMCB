import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../../../App"; 
import MyHeader from "../util/MyHeader";
import MyButton from "../util/MyButton";
import BoardList from "../Editor/BoardList";

const BoardHome = () => {
  const navigate = useNavigate();

  const boardList = useContext(DiaryStateContext);
  const [data,setData] = useState([]);

  // 년, 월 가져오기
  const [curDate, setCurDate] = useState(new Date());

  // 해당 월에 해당하는 일기만 뜨게 하기
  useEffect(() => {
    if (boardList.length >= 1) {
      // 해당월의 1일
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      // 해당 월의 마지막 일
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      // diaryList를 전달 안하면 바뀌면 동작 안하기때문에 넣어줘야함. + 바뀌었다는 것은 추가 삭제 변경의 의미
      setData(
        boardList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [boardList, curDate])

  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <div>
        <MyHeader
        leftChild={
          <MyButton text={"<"} onClick={() => navigate(`/ComuMainHome`)} />
        }
      />
      <BoardList boardList={data}/>
    </div>
  );
};

export default BoardHome;
