import React, { useState } from "react";
import "./ImgUpload.css";

function ImageUpload() {
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <div className="Img_Upload">
      <h1>이미지 미리보기</h1>
      <div>
        {fileImage && (
          <img alt="sample" src={fileImage} style={{ width: "150px" }} />
        )}
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            className="imgUpload"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
          />

          <button className="delete_btn"
            style={{
              
            }}
            onClick={() => deleteFileImage()}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
