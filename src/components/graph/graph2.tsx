import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { graphget } from '../apis/graph/graph'; // graphget 함수를 가져오는 부분가져오는 부분
import { Line } from '@nivo/line'; // nivo의 Line 컴포넌트

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1200px;
  font-size: 12px;
`;

const Home = () => {
  const [trayCellTemp1Data, setTrayCellTemp1Data] = useState([]);
  const [trayCellTemp2Data, setTrayCellTemp2Data] = useState([]);
  const [trayCellTemp3Data, setTrayCellTemp3Data] = useState([]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    const startTime = new Date('0000-05-16T00:00:00Z').toISOString();
    const endTime = new Date('2024-05-18T17:30:00Z').toISOString();

    graphget(startTime, endTime)
      .then((response) => {
        const receivedData = response;

        if (receivedData && receivedData.length > 0) {
          const trayCellTemp1 = receivedData.map((item: { time: any; data: { TrayCellTemp1: any } }) => ({
            x: item.time,
            y: item.data.TrayCellTemp1,
          }));
          setTrayCellTemp1Data(trayCellTemp1);

          const trayCellTemp2 = receivedData.map((item: { time: any; data: { TrayCellTemp2: any } }) => ({
            x: item.time,
            y: item.data.TrayCellTemp2,
          }));
          setTrayCellTemp2Data(trayCellTemp2);

          const trayCellTemp3 = receivedData.map((item: { time: any; data: { TrayCellTemp3: any } }) => ({
            x: item.time,
            y: item.data.TrayCellTemp3,
          }));
          setTrayCellTemp3Data(trayCellTemp3);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Page>
      <h2>TrayCellTemp1 & TrayCellTemp1 & TrayCellTemp3 데이터 그래프</h2>
      <Line
        width={800}
        height={400}
        data={[
          { id: 'TrayCellTemp1', data: trayCellTemp1Data },
          { id: 'TrayCellTemp2', data: trayCellTemp2Data },
          { id: 'TrayCellTemp3', data: trayCellTemp3Data },
        ]}
        xScale={{
          type: 'time',
          format: '%Y-%m-%dT%H:%M:%S.%LZ',
          precision: 'second',
        }}
        xFormat="time:%Y-%m-%d %H:%M:%S"
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        axisBottom={{
          format: '%b %d, %H:%M',
          tickValues: 'every 2 hours',
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
        colors={{ scheme: 'category10' }}
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
