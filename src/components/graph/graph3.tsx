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
  const [trayCellTemp4Data, setTrayCellTemp4Data] = useState([]);
  const [trayCellTemp5Data, setTrayCellTemp5Data] = useState([]);
  const [trayCellTemp6Data, setTrayCellTemp6Data] = useState([]);
  const [trayCellTemp7Data, setTrayCellTemp7Data] = useState([]);
  const [trayCellTemp8Data, setTrayCellTemp8Data] = useState([]);
  const [trayCellTemp9Data, setTrayCellTemp9Data] = useState([]);

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
          const trayCellTemp1 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp1: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp1,
          }));
          setTrayCellTemp1Data(trayCellTemp1);

          const trayCellTemp2 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp2: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp2,
          }));
          setTrayCellTemp2Data(trayCellTemp2);

          const trayCellTemp3 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp3: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp3,
          }));
          setTrayCellTemp3Data(trayCellTemp3);
          const trayCellTemp4 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp4: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp4,
          }));
          setTrayCellTemp4Data(trayCellTemp4);
          const trayCellTemp5 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp5: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp5,
          }));
          setTrayCellTemp5Data(trayCellTemp5);
          const trayCellTemp6 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp6: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp6,
          }));
          setTrayCellTemp6Data(trayCellTemp6);
          const trayCellTemp7 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp7: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp7,
          }));
          setTrayCellTemp7Data(trayCellTemp7);
          const trayCellTemp8 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp8: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp8,
          }));
          setTrayCellTemp8Data(trayCellTemp8);
          const trayCellTemp9 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp9: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp9,
          }));
          setTrayCellTemp9Data(trayCellTemp9);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Page>
      <h2>Tray Cell Temp Avg 데이터 그래프</h2>
      <Line
        width={800}
        height={400}
        data={[
          { id: 'TrayCellTemp1', data: trayCellTemp1Data },
          { id: 'TrayCellTemp2', data: trayCellTemp2Data },
          { id: 'TrayCellTemp3', data: trayCellTemp3Data },
          { id: 'TrayCellTemp4', data: trayCellTemp4Data },
          { id: 'TrayCellTemp5', data: trayCellTemp5Data },
          { id: 'TrayCellTemp6', data: trayCellTemp6Data },
          { id: 'TrayCellTemp7', data: trayCellTemp7Data },
          { id: 'TrayCellTemp8', data: trayCellTemp8Data },
          { id: 'TrayCellTemp9', data: trayCellTemp9Data },
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
