/* global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const MapTest = () => {
    // const [map,setMap] = useState(null);

    // 지도 그리기
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
             center: new kakao.maps.LatLng(37.584214740048225, 126.92613164230097 ), level:3 
        };
        const kakaoMap = new kakao.maps.Map(container, options);
        // 마커 생성
        const markerPosition  = new kakao.maps.LatLng(37.584214740048225, 126.92613164230097);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        const content = '<div class="wrap">' + 
        '    <div class="info">' + 
        '        <div class="title">' + 
        '            카카오 스페이스닷원' + 
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
        '        </div>' + 
        '        <div class="body">' + 
        '            <div class="img">' +
        '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
        '           </div>' + 
        '            <div class="desc">' + 
        '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
        '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
        '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>';
        const overlay = new kakao.maps.CustomOverlay({
            content: content,
            map:kakaoMap,
            position: markerPosition
        });
        kakao.maps.event.addListener(marker, 'click', () => {
            overlay.setMap(kakaoMap);
        });
        /* marker.setMap(kakaoMap); */
        const closeOverlay = () => {
            overlay.setMap(null);
        }
        
    },[]);

    return (
        <div
            style={{
                width: '100%',
                display: 'inline-block',
                // marginLeft: '5px',
                // marginRight: '5px',
                // marginTop: '10px',
            }}
        >
            <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
        </div>
    );
};

export default MapTest;