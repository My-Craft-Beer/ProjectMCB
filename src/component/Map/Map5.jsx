/*global kakao*/ 
import React, { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Location=()=>{

    const [isOpen, setIsOpen] = useState(false)

    const markerPosition = {
        lat: 37.584214740048225,
        lng: 126.92613164230097,
    }

    return (
        <>
        <Map // 지도를 표시할 Container
            id={`map`}
            center={{
            // 지도의 중심좌표
            lat: 37.584214740048225,
            lng: 126.92613164230097,
            }}
            style={{
            // 지도의 크기
            width: "100vw",
            height: "100vh",
            }}
            level={3} // 지도의 확대 레벨
        >
            <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
                // position={{
                // // 인포윈도우가 표시될 위치입니다
                // lat: 37.584214740048225,
                // lng: 126.92613164230097,
                // }}
                position={markerPosition}
                clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                onClick={() => setIsOpen(true)}
            >
                {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                {isOpen && (
                <div style={{ minWidth: "150px", width: "300px", height: "100px"}}>
                    <img
                    alt="close"
                    width="14"
                    height="13"
                    src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                    style={{
                        position: "absolute",
                        right: "5px",
                        top: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setIsOpen(false)}
                    />
                    <div style={{ padding: "5px", color: "#000", }}>
                        멋사 비어 
                        <a href="#">홈페이지</a>
                    </div>
                </div>
                )}
            </MapMarker>
        </Map>
        </>
    );
}

export default Location;