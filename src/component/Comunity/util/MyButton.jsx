import "../util/Header.css";
import "../util/Button.css";


// 공통 버튼 부분

// prop 받기 text, type, onClick 버튼 타입 아무거나 설정하면 default로 고정
const MyButton = ({ text, type, onClick }) => {
const btnType = ["positive", "negative"].includes(type) ? type : "default";
  
    return (
      <button
        // 클래스를 1과 타입에따라 가지게 됨
        className={["MyButton", `MyButton_${btnType}`].join(" ")}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  

  // type prop 전달 x하면 default 전달,
  MyButton.defaultProps = {
    type: "default",
  };
  
  export default MyButton;