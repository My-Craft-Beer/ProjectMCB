import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.584214740048225, 126.92613164230097),
      level: 3
    };
    // 지도를 생성합니다.

    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    const Lists = [
      {
        title: "크레프트 루",
        address: "서울특별시 종로구 익선동 166-57",
      },
      {
        title: "실낙원",
        address: "서울특별시 종로구 낙원동 288",
      },
      {
        title: "더랜치브루잉(맥주덕후)",
        address: "서울특별시 중구 을지로3가 320",
      },
      {
        title: "더테이블 청진탭룸",
        address: "서울특별시 종로구 종로1.2.3.4가동 23",
      },
      {
        title: "독립맥주공장",
        address: "서울특별시 중구 정동길 17",
      },
      {
        title: "브루어리304",
        address: "서울특별시 서대문구 통일로11길 7",
      },
      {
        title: "남산케미스트리 인디펜던트 서울/사워퐁당",
        address: "서울특별시 용산구 이태원2동 225-5",
      },
      {
        title: "브루독 이태원",
        address: "서울특별시 용산구 이태원로27나길 40",
      },
      {
        title: "더테이블",
        address: "서울특별시 마포구 마포대로 183-6",
      },
      {
        title: "미스터리 양조장(양조장 겸 펍)",
        address: "서울특별시 마포구 독막로 311",
      },
      {
        title: "가로수브루잉",
        address: "서울특별시 강남구 신사동 518-12",
      },
      {
        title: "구월당 압구정(낙타브루잉)",
        address: "서울특별시 강남구 언주로168길 23",
      },
      {
        title: "카브루 브루펍",
        address: "서울특별시 강남구 청담동 121-28",
      },
      {
        title: "Jafa Brewery",
        address: "서울특별시 성동구 성수동2가 성수이로14길 14",
      },
      {
        title: "아트몬스터(성수점)",
        address: "서울특별시 성동구 성수동2가 300-15",
      },
      {
        title: "옥토버훼스트",
        address: "서울특별시 강남구 대치동",
      },
      {
        title: "데블스도어(센트럴시티점)",
        address: "서울특별시 서초구 사평대로 205 센트럴시티 반포천",
      },
    ];

    geocoder.addressSearch(Lists.address, function (result, status) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: Map,
          position: coords
        });
      }
      for (var i = 0; i < Lists.length; i++) {

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: Map, // 마커를 표시할 지도
          position: Lists[i].latlng, // 마커를 표시할 위치
          title: Lists[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage // 마커 이미지 
        });
      }
    })
  }, []);

  return (
    <div id='myMap' style={{
      width: '100vw',
      height: '100vh'
    }}></div>
  );
}

export default MapContainer;