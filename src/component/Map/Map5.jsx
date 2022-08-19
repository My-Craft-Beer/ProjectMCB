/*global kakao*/
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Icon from '@mui/material/Icon';
import AddIcon from "@material-ui/icons/Add";

import './Map.scss'

const Location = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isClose, setIsClose] = useState(false)

    const markerPosition = [
        {
            id: 1,
            lat: 37.584214740048225,
            lng: 126.92613164230097,
        },

        {

            //         title: "크레프트 루",
            id: 2,
            lat: 37.5730532,
            lng: 126.989429,
        },
        {
            //         title: "실낙원",
            id: 3,
            lat: 37.5727467,
            lng: 126.987878,
        },
        {
            //         title: "더랜치브루잉(맥주덕후)",
            id: 4,
            lat: 37.5656292,
            lng: 126.991241,
        },
        {
            id: 5,
            //         title: "더테이블 청진탭룸",
            lat: 37.5744496,
            lng: 126.988172,
        },
        {
            //         title: "독립맥주공장",
            id: 6,
            lat: 37.5671843,
            lng: 126.970640,
        },
        {
            id: 7,
            //         title: "브루어리304",
            lat: 37.5691912,
            lng: 126.962591,
        },
        {
            //         title: "남산케미스트리 인디펜던트 서울/사워퐁당",
            id: 8,
            lat: 37.5397887,
            lng: 126.990396,
        },
        {
            // title: "브루독 이태원",
            id: 9,
            lat: 37.5349778,
            lng: 126.996880,
        },
        {
            // title: "더테이블",
            id: 10,
            lat: 37.5509163,
            lng: 126.954826,
        },
        {
            // title: "미스터리 양조장(양조장 겸 펍)",
            id: 11,
            lat: 37.5439755,
            lng: 126.947509,
        },
        {
            id: 12,
            // title: "가로수브루잉",
            lat: 37.5195150,
            lng: 127.021959,
        },
        {
            id: 13,
            // title: "구월당 압구정(낙타브루잉)",
            lat: 37.5262333,
            lng: 127.035491,
        },
        {
            id: 14,
            // title: "카브루 브루펍",
            lat: 37.5253547,
            lng: 127.048760,
        },
        {
            id: 15,
            // title: "Jafa Brewery",
            lat: 37.5414970,
            lng: 127.056951,
        },
        {
            id: 16,
            // title: "아트몬스터(성수점)",
            lat: 37.5462654,
            lng: 127.052180,
        },
        {
            id: 17,
            // title: "옥토버훼스트",
            lat: 37.5710157,
            lng: 126.980441,
        },
        {
            id: 18,
            // title: "데블스도어(센트럴시티점)",
            lat: 37.5033257,
            lng: 127.004866,
        },
    ];

    // function Insert_data(Marker) {

    //     for (var i = 0; i < markerPosition.length; i++) {
    //         const Marker = [];
    //         <MapMarker
    //             position={markerPosition[i]}

    //             clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    //             onClick={() => setIsOpen(true)}
    //         >
    //             {isOpen && (
    //                 <div className = 'InfoWindow'>
    //                     <img
    //                         alt="close"
    //                         width="14"
    //                         height="13"
    //                         src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
    //                         style={{
    //                             position: "absolute",
    //                             right: "5px",
    //                             top: "5px",
    //                             cursor: "pointer",
    //                         }}
    //                         onClick={() => setIsOpen(false)}
    //                     />
    //                     <div style={{ padding: "5px", color: "#000", }}>
    //                         멋사 비어
    //                         <a href="#">홈페이지</a>
    //                     </div>
    //                 </div>
    //             )}
    //         </MapMarker>
    //         Marker.push(<MapMarker positions />)
    //         return Marker;
    //     }
    // }
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
                {/* {Insert_data()}; */}

                <MapMarker position={markerPosition[1]}
                    clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={(key = markerPosition.id[1]) => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                크래프트 루<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[2]}
                    clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                실낙원<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>

                <MapMarker position={markerPosition[3]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                더랜치브루잉(맥주덕후)
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[4]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                더테이블 청진탭룸<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[5]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                독립맥주공장<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[6]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                브루어리304<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[7]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                남산케미스트리 인디펜던트<br />
                                서울 / 사워퐁당
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[8]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                브루독 이태원<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[9]} // 마커이미지의 크기입니다}
                 clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                더테이블<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[10]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                미스터리 양조장
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[11]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                가로수브루잉<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[12]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                구월당 압구정<br />
                                (낙타브루잉)<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[13]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                카브루 브루펍<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[14]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                Jafa Brewery<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[15]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                아트몬스터(성수점)<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[16]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                옥토버훼스트<br />
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
                <MapMarker position={markerPosition[17]} clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    onClick={() => setIsOpen(true)}
                >
                    {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                    {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                    {isOpen && (
                        <div className='InfoWindow'>
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
                            <div style={{ padding: "5px", color: "#000", fontSize: "14px" }}>
                                데블스도어 (센트럴시티점)
                                <a href="#"></a>
                            </div>
                        </div>
                    )}
                </MapMarker>
            </Map>

            {/* <Icon
                style={{
                    fontsize: "large",
                    position: "absolute",
                    right: "10px",
                    bottom: "10px"
                }}
            >
            <div className='Plus_Button_container'>
                <div className='Plus_Button'>
                    <Link to="/PlusPage" >
                        <p>추가</p>
                        <AddIcon />
                    </Link>
                </div>
            </div>
            </Icon> */}

        </>
    )
}
export default Location;