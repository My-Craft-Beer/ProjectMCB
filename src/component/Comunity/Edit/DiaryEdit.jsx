import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../../../App";
import DiaryEditor from "../Editor/DiaryEditor";


const Edit = () => {
  // targetDiary 저장할 state 만들기
  const [originData, setOriginData] = useState();
  // navigate 함수를 useNavigate에 담기
  const navigate = useNavigate();
  // id 받아오기
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    // 글쓰기 불러오기
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
