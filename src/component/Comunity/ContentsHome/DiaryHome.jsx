import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../../../App"; 
import MyHeader from "../util/MyHeader";
import MyButton from "../util/MyButton";
import DiaryList from "../Editor/DiaryList";

const DiaryHome = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data,setData] = useState([]);

  // 년, 월 가져오기
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 해당 월에 해당하는 일기만 뜨게 하기
  useEffect(() => {
    if (diaryList.length >= 1) {
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
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate])

  useEffect(() => {
    console.log(data);
  }, [data]);


  // 화살표 입력시 1달씩 증가
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  // 화살표 누를시 1달씩 감소
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data}/>
    </div>
  );
};

export default DiaryHome;
