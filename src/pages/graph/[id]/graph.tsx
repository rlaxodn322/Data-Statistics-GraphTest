import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { graphget } from '../../../components/apis/graph/graph';
import Graph3 from '../../../components/graph/tempavggraph';
import Graph4 from '../../../components/graph/voltavggraph';
import Graph5 from '../../../components/graph/tempmaxgraph';
import Graph6 from '../../../components/graph/voltmaxgraph';

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1300px;
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
interface GraphData3 {
  trayCellmaxVolt1: GraphDataItem[];
  trayCellmaxVolt2: GraphDataItem[];
  trayCellmaxVolt3: GraphDataItem[];
  trayCellmaxVolt4: GraphDataItem[];
  trayCellmaxVolt5: GraphDataItem[];
  trayCellmaxVolt6: GraphDataItem[];
  trayCellmaxVolt7: GraphDataItem[];
  trayCellmaxVolt8: GraphDataItem[];
  trayCellmaxVolt9: GraphDataItem[];
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
  const [data3, setData3] = useState<GraphData3>({
    trayCellmaxVolt1: [],
    trayCellmaxVolt2: [],
    trayCellmaxVolt3: [],
    trayCellmaxVolt4: [],
    trayCellmaxVolt5: [],
    trayCellmaxVolt6: [],
    trayCellmaxVolt7: [],
    trayCellmaxVolt8: [],
    trayCellmaxVolt9: [],
  });

  const currentDateTime = new Date(); // 현재 시간을 얻습니다.
  const koreaTime = new Date(currentDateTime.getTime() + 9 * 60 * 60 * 1000); // 현재 시간에 9시간을 더하여 한국 시간으로 설정합니다.

  const [startDate, setStartDate] = useState(koreaTime); // 초기값을 한국 시간으로 설정합니다.
  const [endDate, setEndDate] = useState(koreaTime);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  const fetchData = () => {
    const startTime = new Date(startDate.getTime() + 9 * 60 * 60 * 1000);
    const endTime = new Date(endDate.getTime() + 9 * 60 * 60 * 1000);
    graphget(startTime.toISOString(), endTime.toISOString())
      .then((response: any) => {
        const receivedData = response;

        if (receivedData && receivedData.length > 0) {
          const filterValidData = (dataArray: any[], key: string) => {
            return dataArray
              .map((item) => ({
                x: item.time,
                y: isNaN(item.data[key]) ? 0 : item.data[key], // NaN 값을 0으로 대체
              }))
              .filter((item) => item.y !== null); // null 값을 필터링
          };

          const trayCellVolt1 = filterValidData(receivedData, 'TrayCellAvgVolt1');
          const trayCellVolt2 = filterValidData(receivedData, 'TrayCellAvgVolt2');
          const trayCellVolt3 = filterValidData(receivedData, 'TrayCellAvgVolt3');
          const trayCellVolt4 = filterValidData(receivedData, 'TrayCellAvgVolt4');
          const trayCellVolt5 = filterValidData(receivedData, 'TrayCellAvgVolt5');
          const trayCellVolt6 = filterValidData(receivedData, 'TrayCellAvgVolt6');
          const trayCellVolt7 = filterValidData(receivedData, 'TrayCellAvgVolt7');
          const trayCellVolt8 = filterValidData(receivedData, 'TrayCellAvgVolt8');
          const trayCellVolt9 = filterValidData(receivedData, 'TrayCellAvgVolt9');

          const trayCellTemp1 = filterValidData(receivedData, 'TrayCellAvgTemp1');
          const trayCellTemp2 = filterValidData(receivedData, 'TrayCellAvgTemp2');
          const trayCellTemp3 = filterValidData(receivedData, 'TrayCellAvgTemp3');
          const trayCellTemp4 = filterValidData(receivedData, 'TrayCellAvgTemp4');
          const trayCellTemp5 = filterValidData(receivedData, 'TrayCellAvgTemp5');
          const trayCellTemp6 = filterValidData(receivedData, 'TrayCellAvgTemp6');
          const trayCellTemp7 = filterValidData(receivedData, 'TrayCellAvgTemp7');
          const trayCellTemp8 = filterValidData(receivedData, 'TrayCellAvgTemp8');
          const trayCellTemp9 = filterValidData(receivedData, 'TrayCellAvgTemp9');

          const trayCellmaxTemp1 = filterValidData(receivedData, 'TrayCellMaxTemp1');
          const trayCellmaxTemp2 = filterValidData(receivedData, 'TrayCellMaxTemp2');
          const trayCellmaxTemp3 = filterValidData(receivedData, 'TrayCellMaxTemp3');
          const trayCellmaxTemp4 = filterValidData(receivedData, 'TrayCellMaxTemp4');
          const trayCellmaxTemp5 = filterValidData(receivedData, 'TrayCellMaxTemp5');
          const trayCellmaxTemp6 = filterValidData(receivedData, 'TrayCellMaxTemp6');
          const trayCellmaxTemp7 = filterValidData(receivedData, 'TrayCellMaxTemp7');
          const trayCellmaxTemp8 = filterValidData(receivedData, 'TrayCellMaxTemp8');
          const trayCellmaxTemp9 = filterValidData(receivedData, 'TrayCellMaxTemp9');

          const trayCellmaxVolt1 = filterValidData(receivedData, 'TrayCellMaxVolt1');
          const trayCellmaxVolt2 = filterValidData(receivedData, 'TrayCellMaxVolt2');
          const trayCellmaxVolt3 = filterValidData(receivedData, 'TrayCellMaxVolt3');
          const trayCellmaxVolt4 = filterValidData(receivedData, 'TrayCellMaxVolt4');
          const trayCellmaxVolt5 = filterValidData(receivedData, 'TrayCellMaxVolt5');
          const trayCellmaxVolt6 = filterValidData(receivedData, 'TrayCellMaxVolt6');
          const trayCellmaxVolt7 = filterValidData(receivedData, 'TrayCellMaxVolt7');
          const trayCellmaxVolt8 = filterValidData(receivedData, 'TrayCellMaxVolt8');
          const trayCellmaxVolt9 = filterValidData(receivedData, 'TrayCellMaxVolt9');

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
          setData3({
            trayCellmaxVolt1,
            trayCellmaxVolt2,
            trayCellmaxVolt3,
            trayCellmaxVolt4,
            trayCellmaxVolt5,
            trayCellmaxVolt6,
            trayCellmaxVolt7,
            trayCellmaxVolt8,
            trayCellmaxVolt9,
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

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Graph3 data={data1} />
        <Graph5 data={data2} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Graph4 data={data} />
        <Graph6 data={data3} />
      </div>
    </Page>
  );
};

export default Home;
