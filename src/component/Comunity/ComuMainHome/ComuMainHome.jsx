import MyHeader from "../util/MyHeader";
import MyButton from "../util/MyButton";
import { useNavigate } from "react-router-dom";
import "./ComuMainHome.css";

const ComuMainHome = () => {
  const navigate = useNavigate();

  return (
    <div className="Main">
      <MyHeader
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />

      {/* 컨텐츠 제목 */}
      <div className="content_title">
        <img
          src={process.env.PUBLIC_URL + `img/icon.png`}
          className="icon"
        />
        <h2>Contents</h2>
      </div>

      {/* 컨텐츠들 */}
      <div className="content_box">
        <div className="content">
          <div className="content_item" onClick={() => navigate(-1)}>
            <h2>이벤트 공유</h2>
            <img
              src={process.env.PUBLIC_URL + `img/contents1.png`}
              className="icon"
            />
            <p>치맥페스티벌과 더불어 맥주 이벤트를 찾는 수고를 덜어드립니다!</p>
          </div>

          <div className="content_item" onClick={() => navigate(`/DiaryHome`)}>
            <h2>일기장</h2>
            <img
              src={process.env.PUBLIC_URL + `img/contents2.png`}
              className="icon"
            />
            <p>기억하고, 기록하고 ! 내가 만드는 나만의 다이어리! !</p>
          </div>
        </div>

        <div className="content">
          <div className="content_item" onClick={() => navigate(`/BoardHome`)}>
            <h2>소모임</h2>
            <img
              src={process.env.PUBLIC_URL + `img/contents3.png`}
              className="icon"
            />
            <p>
            관리자 주관 + 이용자가 주관하는 맥주 소모임
              컨텐츠! 다양하게 맥주를 즐기세요!
            </p>
          </div>
          <div className="content_item">
          <h2>게시판</h2>
            <img
              src={process.env.PUBLIC_URL + `img/contents4.png` }
              className="img4"
            />
            <p>
            자유롭게 게시판을 드나들며 건의하고! 질문하고! 맥bti 공유합시다!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComuMainHome;
