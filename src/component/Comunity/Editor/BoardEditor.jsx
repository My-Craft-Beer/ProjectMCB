import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../../../App";
import MyHeader from "../util/MyHeader";
import MyButton from "../util/MyButton";
import AreaItem from "../Item/AreaItem";
import { liveareaList, getStringDate } from "../util/date";
import HashTag from "../Details/HashTag";
import ImgUpload from "../Editor/ImgUpload";


const BoardEditor = ({ isEdit, originData }) => {

  const { onboardCreate, onboardEdit } = useContext(DiaryDispatchContext);


  // focus
  const contentRef = useRef();

  // 어떤 감정선택 했는지 state 나타내기
  const [livearea, setLiveArea] = useState(10);

  // input에 들어갈 값 설정, 오늘날짜 설정하기
  const [date, setDate] = useState(getStringDate(new Date()));
  //   일기쓰기 공간을 위한 state 나타내기
  const [boardcontent, setBoardContent] = useState("");


  //   클릭 발생 함수 만들기
  const handleClickEmote = (livearea) => {
    setLiveArea(livearea);
  };
  // 작성완료 버튼 onCreate 받아오기
  

  // 경로 이동을 위한 Navigate 부르기
  const navigate = useNavigate();
  //   적정길이 되면 onCreate 실행
  const handleSubmit = () => {
    if (boardcontent.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?")) {
      if (!isEdit) {
        onboardCreate(date, boardcontent, livearea);
      } else {
        onboardEdit(originData.id, date, boardcontent, livearea);
      }
    }
    
    navigate("/BoardHome", { replace: true });
  };

  //  값 받아오기 Editor꺼..
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setLiveArea(originData.livearea);
      setBoardContent(originData.boardcontent);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      {/* 헤더 */}
      <MyHeader
        headText={isEdit ? "수정하기" : "새 글쓰기"}
        // 뒤로가기 버튼
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />

      {/* 달력 */}
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>

        {/* 이미지 */}
        <section>
          <div className="livearea_list_wrapper">
            {liveareaList.map((it) => (
              <AreaItem
                key={it.livearea_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.livearea_id === livearea}
              />
            ))}
          </div>
        </section>
        
        <section>
        <ImgUpload/>
        </section>

        {/* 글쓰기 */}
        <section>
          <h4>내용</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="내용을 입력하세요."
              ref={contentRef}
              value={boardcontent}
              onChange={(e) => setBoardContent(e.target.value)}
            />
          </div>
        </section>

        <section>
          <h4>#해시태그</h4>
          <HashTag/>
        </section>

        {/* 취소 버튼 */}
        <section>
          <div className="control_box">
            <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type="positive"
              onClick={handleSubmit}
            />
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default BoardEditor;
