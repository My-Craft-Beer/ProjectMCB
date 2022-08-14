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
    geocoder.addressSearch('서울특별시 서대문구 가좌로 134', function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
  
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });
  
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;color:red;text-align:center;padding:6px 0;">내가 썼지롱</div>'
        });
        infowindow.open(map, marker);
  
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
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