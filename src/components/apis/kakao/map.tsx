import React, { useEffect } from 'react';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    kakao: any;
  }
}

export default function MapComponent() {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const map = new window.kakao.maps.Map(document.getElementById('map'), {
          center: new window.kakao.maps.LatLng(36.1498482, 127.1258551),
          level: 3,
        });

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(36.1498482, 127.1258551);

        // 마커 이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',

          new window.kakao.maps.Size(24, 35),
          { offset: new window.kakao.maps.Point(13, 35) },
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커를 지도 위에 표시합니다
        marker.setMap(map);

        // 인포윈도우를 생성합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:20px;font-family:SOGANGUNIVERSITYTTF;width:200px;"><a href="https://map.kakao.com/link/map/논산학생롤러경기장,36.1498482, 127.1258551" target="_blank">논산학생롤러경기장</a><a href="https://map.kakao.com/link/to/카카오맵,36.1498482, 127.1258551" target="_blank"></a></div>', // 인포윈도우에 표시될 내용과 링크
        });

        // 지도의 tilesloaded 이벤트를 통해 한 번만 인포윈도우를 엽니다
        window.kakao.maps.event.addListener(map, 'tilesloaded', function () {
          infowindow.open(map, marker);
        });
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, []);

  return (
    <div>
      <div id="map" style={{ borderRadius: '20px', width: '300px', height: '300px', margin: '0px 0 10px 0' }}></div>
    </div>
  );
}
