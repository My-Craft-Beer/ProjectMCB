import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../../../App";
import MyHeader from "../util/MyHeader";
import MyButton from "../util/MyButton";
import  "./Editor.css";
import EmotionItem from "../Item/EmotionItem";
import { emotionList } from "../util/date";
import { getStringDate } from "../util/date";
import HashTag from "../Details/HashTag";
import ImgUpload from "../Editor/ImgUpload";


const DiaryEditor = ({ isEdit, originData }) => {



  // focus
  const contentRef = useRef();

  // 어떤 감정선택 했는지 state 나타내기
  const [emotion, setEmotion] = useState(3);
  // input에 들어갈 값 설정, 오늘날짜 설정하기
  const [date, setDate] = useState(getStringDate(new Date()));
  //   일기쓰기 공간을 위한 state 나타내기
  const [content, setContent] = useState("");


  //   클릭 발생 함수 만들기
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };
  // 작성완료 버튼 onCreate 받아오기
  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  // 경로 이동을 위한 Navigate 부르기
  const navigate = useNavigate();

  //   적정길이 되면 onCreate 실행
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?")) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }
    
    navigate("/", { replace: true });
  };

  //  값 받아오기 Editor꺼..
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      {/* 헤더 */}
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
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
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        
        <section>
        <ImgUpload/>
        </section>

        {/* 일기쓰기 */}
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="내용을 입력하세요."
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>

        <div>
          <h4>#해시태그</h4>
          <HashTag/>
        </div>

        {/* 취소 버튼 */}
          <div className="control_box">
            <MyButton
            className="left_btn" 
            text={"취소하기"} 
            onClick={() => navigate(-1)} />
            <MyButton
              className="right_btn"
              text={"작성완료"}
              type="positive"
              onClick={handleSubmit}
            />
          </div>

        
      </div>
    </div>
  );
};

export default DiaryEditor;
