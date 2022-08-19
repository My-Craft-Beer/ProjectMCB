// 오늘 날짜 형태 설정
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

// 감정 배열
export const liveareaList = [
  {
    livearea_id: 1,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea1.jpg`,
    livearea_descript: "경남",
  },

  {
    livearea_id: 2,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea2.jpg`,
    livearea_descript: "경북",
  },

  {
    livearea_id: 3,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea3.jpg`,
    livearea_descript: "서울",
  },

  {
    livearea_id: 4,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea4.jpg`,
    livearea_descript: "대전",
  },

  {
    livearea_id: 5,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea5.jpg`,
    livearea_descript: "인천",
  },
  {
    livearea_id: 6,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea6.jpg`,
    livearea_descript: "경기",
  },
  {
    livearea_id: 7,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea7.jpg`,
    livearea_descript: "전남",
  },
  {
    livearea_id: 8,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea8.jpg`,
    livearea_descript: "전북",
  },
  {
    livearea_id: 9,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea9.jpg`,
    livearea_descript: "강원",
  },
  {
    livearea_id: 10,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea10.jpg`,
    livearea_descript: "제주",
  },

  {
    livearea_id: 11,
    livearea_img: process.env.PUBLIC_URL + `/img/livearea11.jpg`,
    livearea_descript: "부산",
  },
];

export const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/img/emotion1.png`,
    emotion_descript: "햇빛",
  },

  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/img/emotion2.png`,
    emotion_descript: "구름 낌",
  },

  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/img/emotion3.png`,
    emotion_descript: "비",
  },

  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/img/emotion4.png`,
    emotion_descript: "천둥",
  },

  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/img/emotion5.png`,
    emotion_descript: "눈",
  },
];

