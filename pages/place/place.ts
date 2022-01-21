


/* place1의 지도 */

var mapContainer1 = document.getElementById('map1'),
    mapOption1 = {  
        center: new kakao.maps.LatLng(37.44948704416566, 126.70029129756904),
        level: 3
    };
var map1 = new kakao.maps.Map(mapContainer1, mapOption1);
var markerPosition1  = new kakao.maps.LatLng(37.44948704416566, 126.70029129756904); 
var marker1 = new kakao.maps.Marker({
    position: markerPosition1
});
marker1.setMap(map1);

/* place2의 지도 */
    
var mapContainer2 = document.getElementById('map2'),
    mapOption2 = { 
        center: new kakao.maps.LatLng(37.44948704416566, 126.70029129756904),
        level: 3
    };
var map2 = new kakao.maps.Map(mapContainer2, mapOption2);
var markerPosition2  = new kakao.maps.LatLng(37.44948704416566, 126.70029129756904); 
var marker2 = new kakao.maps.Marker({
    position: markerPosition2
});
marker2.setMap(map2);

/* place3의 지도 */

var mapContainer3 = document.getElementById('map3'),
    mapOption3 = { 
        center: new kakao.maps.LatLng(37.44948704416566, 126.70029129756904),
        level: 3
    };
var map3 = new kakao.maps.Map(mapContainer3, mapOption3);
var markerPosition3  = new kakao.maps.LatLng(37.44948704416566, 126.70029129756904); 
var marker3 = new kakao.maps.Marker({
    position: markerPosition3
});
marker3.setMap(map3);

/* place4의 지도 */

var mapContainer4 = document.getElementById('map4'),
    mapOption4 = { 
        center: new kakao.maps.LatLng(37.44948704416566, 126.70029129756904),
        level: 3
    };
var map4 = new kakao.maps.Map(mapContainer4, mapOption4);
var markerPosition4  = new kakao.maps.LatLng(37.44948704416566, 126.70029129756904); 
var marker4 = new kakao.maps.Marker({
    position: markerPosition4
});
marker4.setMap(map4);