var mapContainer = document.getElementById('map1'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(37.44871224480417, 126.6985289391815), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 

// var mapContainer1 = document.getElementById('map1'), mapOption1 = {
//     center: new kakao.maps.LatLng(37.44948704416566, 126.70029129756904),
//     level: 3
// };
// var map1 = new kakao.maps.Map(mapContainer1, mapOption1);
// var markerPosition1 = new kakao.maps.LatLng(37.44948704416566, 126.70029129756904);
// var marker1 = new kakao.maps.Marker({
//     position: markerPosition1
// });
// marker1.setMap(map1);


