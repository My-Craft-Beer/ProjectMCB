import MyButton from "../util/MyButton";
import { useNavigate } from "react-router";

const BoardItem = ({ id, livearea, boardcontent, date }) => {
  // 이미지 안 뜰시
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  //   날짜 끌고오기
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  //   수정 버튼과 일기 눌렀을 때 상세페이지 이동
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/BoardDetail/${id}`);
  };

  const goEdit = () => {
    navigate(`/BoardEdit/${id}`);
  }

  return (
    <div className="DiaryItem">
      {/* 클래스 더 만들기, 배열로 묶고 원래 클래스명, `원하는 클래스명` */}
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${livearea}`,
        ].join(" ")}
      >
        {/* 이미지 선택 */}
        <img src={process.env.PUBLIC_URL + `img/livearea${livearea}.jpg`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        {/* 날짜 들고오기 */}
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{boardcontent}</div>
      </div>
      {/* 수정버튼 */}
      <div className="btn_wrapper">
        <MyButton 
        onClick = {goEdit}
        text={"수정하기"} />
      </div>
    </div>
  );
};

export default BoardItem;
