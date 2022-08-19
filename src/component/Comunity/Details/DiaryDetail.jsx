import { useParams } from "react-router-dom"; // custom hooks
import { useContext, useEffect, useState } from "react"; //일기 가져오기
import { DiaryStateContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { emotionList, getStringDate } from "../util/date";
import MyHeader from "../util/MyHeader";
import MyButton from "../util/MyButton";
import './Detail.css';

const DiaryDetail = () => {

   // 이미지 안 뜰시
   const env = process.env;
   env.PUBLIC_URL = env.PUBLIC_URL || "";

  const { id } = useParams(); // pathVariable = id (경로의 변수 담아서 전달)
  const diaryList = useContext(DiaryStateContext); //일기 가져오기
  const navigate = useNavigate();
  const [data, setData] = useState();


  useEffect(() => {
    // 다이어리가 1개 이상 있을 때 상세페이지로 가져오기
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      //일기 존재할 때
      if (targetDiary) {
        setData(targetDiary);
      }
      // 일기 없을 때
      else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="Diarypage">로딩중입니다...</div>;
  } else {
    // 일기 이미지 가져오기
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );


    return (
      <div className="Diarypage">
        {/* 헤더부분 */}
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 일기`}
          leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
        />

        <article>
          <section>
            <h4>오늘의 날씨</h4>
            <div className="diary_img_wrapper">
              <img src={curEmotionData.emotion_img} />
              <div className="emotion_descript">
              {curEmotionData.emotion_descript}
            </div>
            </div>
            
            
          </section>

          {/* 이미지 칸 */}
          <section>
            <div className="img_box">
              <h4>사진</h4>
              <img
            src={process.env.PUBLIC_URL + `/img/1234.jpg`}
            width={"100px"}
          />
            </div>
          </section>

          {/* 다이어리 내용 */}
          <section className="dr_content">
          <h4>내용</h4>
          <div className="diary_content_wrapper">
            <p>{data.content}</p>
          </div>
          </section>

          {/* 해시태그 */}
          <section className="tag">
            <h4># 해시태그</h4>
            <p>#ㅇㅇ #ㅇㅇ</p>
          </section>
        
        </article>
        
        <div className="edit_btn">
        <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/DiaryEdit/${data.id}`)}
            />
        </div>
      </div>
    );
  }
};

export default DiaryDetail;
