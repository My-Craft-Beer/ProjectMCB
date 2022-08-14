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
        marker.setMap(kakaoMap);
        
    },[])

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