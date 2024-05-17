import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { graphget } from '../apis/graph/graph'; // graphget 함수를 가져오는 부분
import { Line } from '@nivo/line'; // nivo의 Line 컴포넌트

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1200px;
  font-size: 12px;
`;

const Home = () => {
  const [trayCellVolt1Data, setTrayCellVolt1Data] = useState([]);
  const [trayCellVolt2Data, setTrayCellVolt2Data] = useState([]);
  const [trayCellVolt3Data, setTrayCellVolt3Data] = useState([]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    const startTime = new Date('0000-05-18T00:00:00Z').toISOString();
    const endTime = new Date('2024-05-18T17:30:00Z').toISOString();

    graphget(startTime, endTime)
      .then((response: any) => {
        const receivedData = response;

        if (receivedData && receivedData.length > 0) {
          const trayCellVolt1 = receivedData.map((item: { time: any; data: { TrayCellVolt1: any } }) => ({
            x: item.time, // x 값으로 시간을 사용
            y: item.data.TrayCellVolt1, // y 값으로 TrayCellVolt1 데이터 사용
          }));
          setTrayCellVolt1Data(trayCellVolt1);

          const trayCellVolt2 = receivedData.map((item: { time: any; data: { TrayCellVolt2: any } }) => ({
            x: item.time, // x 값으로 시간을 사용
            y: item.data.TrayCellVolt2, // y 값으로 TrayCellVolt2 데이터 사용
          }));
          setTrayCellVolt2Data(trayCellVolt2);
          const trayCellVolt3 = receivedData.map((item: { time: any; data: { TrayCellVolt3: any } }) => ({
            x: item.time, // x 값으로 시간을 사용
            y: item.data.TrayCellVolt3, // y 값으로 TrayCellVolt2 데이터 사용
          }));
          setTrayCellVolt3Data(trayCellVolt3);
        }
      })
      .catch((error: any) => {
        console.error('데이터 가져오기 오류:', error);
      });
  };

  return (
    <Page>
      <h2>TrayCellVolt1 & TrayCellVolt2 & TrayCellVolt3 데이터 그래프</h2>
      <Line
        width={800}
        height={400}
        data={[
          {
            id: 'TrayCellVolt1',
            data: trayCellVolt1Data,
          },
          {
            id: 'TrayCellVolt2',
            data: trayCellVolt2Data,
          },
          {
            id: 'TrayCellVolt3',
            data: trayCellVolt3Data,
          },
        ]}
        xScale={{
          type: 'time', // x 축 스케일을 시간으로 설정
          format: '%Y-%m-%dT%H:%M:%S.%LZ', // 날짜 포맷 지정
          precision: 'second', // 시간의 정밀도를 초 단위로 설정
        }}
        xFormat="time:%Y-%m-%d %H:%M:%S" // x 축의 레이블 형식 지정
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        axisBottom={{
          format: '%b %d, %H:%M', // x 축 하단의 레이블 형식 지정
          tickValues: 'every 2 hours', // 2시간마다 레이블 표시
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        curve="linear"
        enableSlices="x"
        enableGridX={false}
        enablePoints={false}
        enableCrosshair={false}
        useMesh={true}
        colors={{ scheme: 'category10' }} // 컬러 스키마 변경
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
          },
        ]}
      />
    </Page>
  );
};

export default Home;
