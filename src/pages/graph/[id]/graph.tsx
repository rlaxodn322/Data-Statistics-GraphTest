import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { graphget } from '../../../components/apis/graph/graph';
import Graph3 from '../../../components/graph/tempavggraph';
import Graph4 from '../../../components/graph/voltavggraph';
import Graph5 from '../../../components/graph/tempmaxgraph';
const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1200px;
  font-size: 12px;
`;

const DatePickers = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const DatePickerWrapper = styled.div`
  margin: 0 10px;
`;

interface GraphDataItem {
  x: string;
  y: number;
}

interface GraphData {
  trayCellVolt1: GraphDataItem[];
  trayCellVolt2: GraphDataItem[];
  trayCellVolt3: GraphDataItem[];
  trayCellVolt4: GraphDataItem[];
  trayCellVolt5: GraphDataItem[];
  trayCellVolt6: GraphDataItem[];
  trayCellVolt7: GraphDataItem[];
  trayCellVolt8: GraphDataItem[];
  trayCellVolt9: GraphDataItem[];
}

interface GraphData1 {
  trayCellTemp1: GraphDataItem[];
  trayCellTemp2: GraphDataItem[];
  trayCellTemp3: GraphDataItem[];
  trayCellTemp4: GraphDataItem[];
  trayCellTemp5: GraphDataItem[];
  trayCellTemp6: GraphDataItem[];
  trayCellTemp7: GraphDataItem[];
  trayCellTemp8: GraphDataItem[];
  trayCellTemp9: GraphDataItem[];
}
interface GraphData2 {
  trayCellmaxTemp1: GraphDataItem[];
  trayCellmaxTemp2: GraphDataItem[];
  trayCellmaxTemp3: GraphDataItem[];
  trayCellmaxTemp4: GraphDataItem[];
  trayCellmaxTemp5: GraphDataItem[];
  trayCellmaxTemp6: GraphDataItem[];
  trayCellmaxTemp7: GraphDataItem[];
  trayCellmaxTemp8: GraphDataItem[];
  trayCellmaxTemp9: GraphDataItem[];
}

const Home = () => {
  const [data, setData] = useState<GraphData>({
    trayCellVolt1: [],
    trayCellVolt2: [],
    trayCellVolt3: [],
    trayCellVolt4: [],
    trayCellVolt5: [],
    trayCellVolt6: [],
    trayCellVolt7: [],
    trayCellVolt8: [],
    trayCellVolt9: [],
  });
  const [data1, setData1] = useState<GraphData1>({
    trayCellTemp1: [],
    trayCellTemp2: [],
    trayCellTemp3: [],
    trayCellTemp4: [],
    trayCellTemp5: [],
    trayCellTemp6: [],
    trayCellTemp7: [],
    trayCellTemp8: [],
    trayCellTemp9: [],
  });
  const [data2, setData2] = useState<GraphData2>({
    trayCellmaxTemp1: [],
    trayCellmaxTemp2: [],
    trayCellmaxTemp3: [],
    trayCellmaxTemp4: [],
    trayCellmaxTemp5: [],
    trayCellmaxTemp6: [],
    trayCellmaxTemp7: [],
    trayCellmaxTemp8: [],
    trayCellmaxTemp9: [],
  });

  const currentDateTime = new Date(); // 현재 시간을 얻습니다.
  const koreaTime = new Date(currentDateTime.getTime() + 9 * 60 * 60 * 1000); // 현재 시간에 9시간을 더하여 한국 시간으로 설정합니다.

  const [startDate, setStartDate] = useState(koreaTime); // 초기값을 한국 시간으로 설정합니다.
  const [endDate, setEndDate] = useState(koreaTime);

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  const fetchData = () => {
    const startTime = new Date(startDate.getTime() + 9 * 60 * 60 * 1000);
    const endTime = new Date(endDate.getTime() + 9 * 60 * 60 * 1000);
    graphget(startTime.toISOString(), endTime.toISOString())
      .then((response: any) => {
        const receivedData = response;

        if (receivedData && receivedData.length > 0) {
          const trayCellVolt1 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt1: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt1,
          }));
          const trayCellVolt2 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt2: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt2,
          }));
          const trayCellVolt3 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt3: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt3,
          }));
          const trayCellVolt4 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt4: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt4,
          }));
          const trayCellVolt5 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt5: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt5,
          }));
          const trayCellVolt6 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt6: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt6,
          }));
          const trayCellVolt7 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt7: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt7,
          }));
          const trayCellVolt8 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt8: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt8,
          }));
          const trayCellVolt9 = receivedData.map((item: { time: any; data: { TrayCellAvgVolt9: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgVolt9,
          }));

          const trayCellTemp1 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp1: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp1,
          }));
          const trayCellTemp2 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp2: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp2,
          }));
          const trayCellTemp3 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp3: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp3,
          }));
          const trayCellTemp4 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp4: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp4,
          }));
          const trayCellTemp5 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp5: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp5,
          }));
          const trayCellTemp6 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp6: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp6,
          }));
          const trayCellTemp7 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp7: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp7,
          }));
          const trayCellTemp8 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp8: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp8,
          }));
          const trayCellTemp9 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp9: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp9,
          }));
          const trayCellmaxTemp1 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp1: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp1,
          }));
          const trayCellmaxTemp2 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp2: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp2,
          }));
          const trayCellmaxTemp3 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp3: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp3,
          }));
          const trayCellmaxTemp4 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp4: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp4,
          }));
          const trayCellmaxTemp5 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp5: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp5,
          }));
          const trayCellmaxTemp6 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp6: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp6,
          }));
          const trayCellmaxTemp7 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp7: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp7,
          }));
          const trayCellmaxTemp8 = receivedData.map((item: { time: any; data: { TrayCellAvgTemp8: any } }) => ({
            x: item.time,
            y: item.data.TrayCellAvgTemp8,
          }));
          const trayCellmaxTemp9 = receivedData.map((item: { time: any; data: { TrayCellMaxTemp9: any } }) => ({
            x: item.time,
            y: item.data.TrayCellMaxTemp9,
          }));
          setData({
            trayCellVolt1,
            trayCellVolt2,
            trayCellVolt3,
            trayCellVolt4,
            trayCellVolt5,
            trayCellVolt6,
            trayCellVolt7,
            trayCellVolt8,
            trayCellVolt9,
          });
          setData1({
            trayCellTemp1,
            trayCellTemp2,
            trayCellTemp3,
            trayCellTemp4,
            trayCellTemp5,
            trayCellTemp6,
            trayCellTemp7,
            trayCellTemp8,
            trayCellTemp9,
          });
          setData2({
            trayCellmaxTemp1,
            trayCellmaxTemp2,
            trayCellmaxTemp3,
            trayCellmaxTemp4,
            trayCellmaxTemp5,
            trayCellmaxTemp6,
            trayCellmaxTemp7,
            trayCellmaxTemp8,
            trayCellmaxTemp9,
          });
        }
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Page>
      <DatePickers>
        <DatePickerWrapper>
          <label>Start Date: </label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </DatePickerWrapper>
        <DatePickerWrapper>
          <label>End Date: </label>
          <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} showTimeSelect dateFormat="Pp" />
        </DatePickerWrapper>
      </DatePickers>
      {/* <Graph1 data={data} />
      <Graph2 data={data} /> */}
      <Graph3 data={data1} />
      <Graph4 data={data} />
      <Graph5 data={data2} />
    </Page>
  );
};

export default Home;
