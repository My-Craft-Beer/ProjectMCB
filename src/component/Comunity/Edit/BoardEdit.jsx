import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../../../App";
import BoardEditor from "../Editor/BoardEditor";
import '../Editor/Editor.css';

const BoardEdit = () => {
  // targetDiary 저장할 state 만들기
  const [originData, setOriginData] = useState();
  // navigate 함수를 useNavigate에 담기
  const navigate = useNavigate();
  // id 받아오기
  const { id } = useParams();

  const boardList = useContext(DiaryStateContext);

  useEffect(() => {
    if (boardList.length >= 1) {
      const targetDiary = boardList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/BoardHome", { replace: true });
      }
    }
  }, [id, boardList]);

  return (
    // 글쓰기 불러오기
    <div>
      {originData && <BoardEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default BoardEdit;
