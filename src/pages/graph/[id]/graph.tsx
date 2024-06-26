// (can data RackNumber filter 후)

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { graphget2 } from '../../../components/apis/graph/graphtest';
import TestGraph from '../../../components/graph/test';

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1300px;
  margin-bottom: 100px;
  font-size: 12px;
`;

// const DatePickers = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
//   margin-top: 30px;
// `;

// const DatePickerWrapper = styled.div`
//   margin: 0 10px;
// `;
// // const InputWrapper = styled.div`
// //   margin: 0 10px;
// // `;
const DropBox = styled.select`
  width: 210px;
  height: 40px;
  border: solid 1px lightgray;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 15px;
  text-indent: 5px;
  & option {
    font-size: 16px;
  }
`;
interface GraphDataItem {
  x: string;
  y: number;
}
const DatePickers = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 4px;
    font-size: 16px;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: 100px;
  }
`;
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
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
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
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
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
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
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
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
}
interface GraphData4 {
  trayCellminTemp1: GraphDataItem[];
  trayCellminTemp2: GraphDataItem[];
  trayCellminTemp3: GraphDataItem[];
  trayCellminTemp4: GraphDataItem[];
  trayCellminTemp5: GraphDataItem[];
  trayCellminTemp6: GraphDataItem[];
  trayCellminTemp7: GraphDataItem[];
  trayCellminTemp8: GraphDataItem[];
  trayCellminTemp9: GraphDataItem[];
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
}
interface GraphData5 {
  trayCellminVolt1: GraphDataItem[];
  trayCellminVolt2: GraphDataItem[];
  trayCellminVolt3: GraphDataItem[];
  trayCellminVolt4: GraphDataItem[];
  trayCellminVolt5: GraphDataItem[];
  trayCellminVolt6: GraphDataItem[];
  trayCellminVolt7: GraphDataItem[];
  trayCellminVolt8: GraphDataItem[];
  trayCellminVolt9: GraphDataItem[];
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
}
interface GraphData6 {
  trayCellDifTemp1: GraphDataItem[];
  trayCellDifTemp2: GraphDataItem[];
  trayCellDifTemp3: GraphDataItem[];
  trayCellDifTemp4: GraphDataItem[];
  trayCellDifTemp5: GraphDataItem[];
  trayCellDifTemp6: GraphDataItem[];
  trayCellDifTemp7: GraphDataItem[];
  trayCellDifTemp8: GraphDataItem[];
  trayCellDifTemp9: GraphDataItem[];
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
}
interface GraphData7 {
  trayCellDifVolt1: GraphDataItem[];
  trayCellDifVolt2: GraphDataItem[];
  trayCellDifVolt3: GraphDataItem[];
  trayCellDifVolt4: GraphDataItem[];
  trayCellDifVolt5: GraphDataItem[];
  trayCellDifVolt6: GraphDataItem[];
  trayCellDifVolt7: GraphDataItem[];
  trayCellDifVolt8: GraphDataItem[];
  trayCellDifVolt9: GraphDataItem[];
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
}
interface GraphData8 {
  batteryData: GraphDataItem[];
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
}
interface GraphData9 {
  pratemp: GraphDataItem[];
  [key: string]: GraphDataItem[]; // 인덱스 시그니처 추가
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
  const [data4, setData4] = useState<GraphData4>({
    trayCellminTemp1: [],
    trayCellminTemp2: [],
    trayCellminTemp3: [],
    trayCellminTemp4: [],
    trayCellminTemp5: [],
    trayCellminTemp6: [],
    trayCellminTemp7: [],
    trayCellminTemp8: [],
    trayCellminTemp9: [],
  });
  const [data5, setData5] = useState<GraphData5>({
    trayCellminVolt1: [],
    trayCellminVolt2: [],
    trayCellminVolt3: [],
    trayCellminVolt4: [],
    trayCellminVolt5: [],
    trayCellminVolt6: [],
    trayCellminVolt7: [],
    trayCellminVolt8: [],
    trayCellminVolt9: [],
  });
  const [data6, setData6] = useState<GraphData6>({
    trayCellDifTemp1: [],
    trayCellDifTemp2: [],
    trayCellDifTemp3: [],
    trayCellDifTemp4: [],
    trayCellDifTemp5: [],
    trayCellDifTemp6: [],
    trayCellDifTemp7: [],
    trayCellDifTemp8: [],
    trayCellDifTemp9: [],
  });
  const [data7, setData7] = useState<GraphData7>({
    trayCellDifVolt1: [],
    trayCellDifVolt2: [],
    trayCellDifVolt3: [],
    trayCellDifVolt4: [],
    trayCellDifVolt5: [],
    trayCellDifVolt6: [],
    trayCellDifVolt7: [],
    trayCellDifVolt8: [],
    trayCellDifVolt9: [],
  });
  const [battery, setBattery] = useState<GraphData8>({
    batteryData: [],
  });
  const [pra, setPRA] = useState<GraphData9>({
    pratemp: [],
  });

  const [rackNumber, setRackNumber] = useState<string>(''); // RackNumber 상태 추가

  //const currentDateTime = new Date(); // 현재 시간을 얻습니다.
  //const koreaTime = new Date(currentDateTime.getTime() + 9 * 60 * 60 * 1000); // 현재 시간에 9시간을 더하여 한국 시간으로 설정합니다.

  // const [startDate, setStartDate] = useState(''); // 초기값을 한국 시간으로 설정합니다.
  // const [endDate, setEndDate] = useState(koreaTime);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   if (startDate && endDate) {
  //     fetchData1();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [startDate, endDate, rackNumber, title]); // rackNumber 상태에 의존
  useEffect(() => {
    if (startDate && endDate && rackNumber && title) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, rackNumber, title]); // rackNumber 상태에 의존

  const fetchData = () => {
    setLoading(true);
    if (startDate && endDate && rackNumber && title) {
      const startTime = new Date(startDate.getTime() + 9 * 60 * 60 * 1000);
      const endTime = new Date(endDate.getTime() + 9 * 60 * 60 * 1000);

      graphget2(startTime.toISOString(), endTime.toISOString(), rackNumber, title)
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

            const trayCellminTemp1 = filterValidData(receivedData, 'TrayCellMinTemp1');
            const trayCellminTemp2 = filterValidData(receivedData, 'TrayCellMinTemp2');
            const trayCellminTemp3 = filterValidData(receivedData, 'TrayCellMinTemp3');
            const trayCellminTemp4 = filterValidData(receivedData, 'TrayCellMinTemp4');
            const trayCellminTemp5 = filterValidData(receivedData, 'TrayCellMinTemp5');
            const trayCellminTemp6 = filterValidData(receivedData, 'TrayCellMinTemp6');
            const trayCellminTemp7 = filterValidData(receivedData, 'TrayCellMinTemp7');
            const trayCellminTemp8 = filterValidData(receivedData, 'TrayCellMinTemp8');
            const trayCellminTemp9 = filterValidData(receivedData, 'TrayCellMinTemp9');

            const trayCellminVolt1 = filterValidData(receivedData, 'TrayCellMinVolt1');
            const trayCellminVolt2 = filterValidData(receivedData, 'TrayCellMinVolt2');
            const trayCellminVolt3 = filterValidData(receivedData, 'TrayCellMinVolt3');
            const trayCellminVolt4 = filterValidData(receivedData, 'TrayCellMinVolt4');
            const trayCellminVolt5 = filterValidData(receivedData, 'TrayCellMinVolt5');
            const trayCellminVolt6 = filterValidData(receivedData, 'TrayCellMinVolt6');
            const trayCellminVolt7 = filterValidData(receivedData, 'TrayCellMinVolt7');
            const trayCellminVolt8 = filterValidData(receivedData, 'TrayCellMinVolt8');
            const trayCellminVolt9 = filterValidData(receivedData, 'TrayCellMinVolt9');

            const trayCellDifTemp1 = filterValidData(receivedData, 'TrayDifTemp1');
            const trayCellDifTemp2 = filterValidData(receivedData, 'TrayCellDifTemp2');
            const trayCellDifTemp3 = filterValidData(receivedData, 'TrayCellDifTemp3');
            const trayCellDifTemp4 = filterValidData(receivedData, 'TrayCellDifTemp4');
            const trayCellDifTemp5 = filterValidData(receivedData, 'TrayCellDifTemp5');
            const trayCellDifTemp6 = filterValidData(receivedData, 'TrayCellDifTemp6');
            const trayCellDifTemp7 = filterValidData(receivedData, 'TrayCellDifTemp7');
            const trayCellDifTemp8 = filterValidData(receivedData, 'TrayCellDifTemp8');
            const trayCellDifTemp9 = filterValidData(receivedData, 'TrayCellDifTemp9');

            const trayCellDifVolt1 = filterValidData(receivedData, 'TrayCellDifVolt1');
            const trayCellDifVolt2 = filterValidData(receivedData, 'TrayCellDifVolt2');
            const trayCellDifVolt3 = filterValidData(receivedData, 'TrayCellDifVolt3');
            const trayCellDifVolt4 = filterValidData(receivedData, 'TrayCellDifVolt4');
            const trayCellDifVolt5 = filterValidData(receivedData, 'TrayCellDifVolt5');
            const trayCellDifVolt6 = filterValidData(receivedData, 'TrayCellDifVolt6');
            const trayCellDifVolt7 = filterValidData(receivedData, 'TrayCellDifVolt7');
            const trayCellDifVolt8 = filterValidData(receivedData, 'TrayCellDifVolt8');
            const trayCellDifVolt9 = filterValidData(receivedData, 'TrayCellDifVolt9');
            const batteryData = filterValidData(receivedData, 'Battery');
            const pratemp = filterValidData(receivedData, 'PRATemp');

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
            setData4({
              trayCellminTemp1,
              trayCellminTemp2,
              trayCellminTemp3,
              trayCellminTemp4,
              trayCellminTemp5,
              trayCellminTemp6,
              trayCellminTemp7,
              trayCellminTemp8,
              trayCellminTemp9,
            });
            setData5({
              trayCellminVolt1,
              trayCellminVolt2,
              trayCellminVolt3,
              trayCellminVolt4,
              trayCellminVolt5,
              trayCellminVolt6,
              trayCellminVolt7,
              trayCellminVolt8,
              trayCellminVolt9,
            });
            setData6({
              trayCellDifTemp1,
              trayCellDifTemp2,
              trayCellDifTemp3,
              trayCellDifTemp4,
              trayCellDifTemp5,
              trayCellDifTemp6,
              trayCellDifTemp7,
              trayCellDifTemp8,
              trayCellDifTemp9,
            });
            setData7({
              trayCellDifVolt1,
              trayCellDifVolt2,
              trayCellDifVolt3,
              trayCellDifVolt4,
              trayCellDifVolt5,
              trayCellDifVolt6,
              trayCellDifVolt7,
              trayCellDifVolt8,
              trayCellDifVolt9,
            });

            setBattery({
              batteryData,
            });
            setPRA({
              pratemp,
            });
          }
        })
        .catch((error: any) => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.error('startDate와 endDate가 필요합니다.');
    }
  };

  const selectList = [
    { value: '', name: 'Car 번호를 입력해주세요.' },
    { value: 'car001', name: '1호' },
    { value: 'car002', name: '2호' },
    { value: 'car003', name: '3호' },
  ];
  const selectList1 = [
    { value: '', name: 'Rack 번호를 입력해주세요.' },
    { value: '01', name: '1번랙' },
    { value: '02', name: '2번랙' },
    { value: '03', name: '3번랙' },
    { value: '04', name: '4번랙' },
    { value: '05', name: '5번랙' },
    { value: '06', name: '6번랙' },
    { value: '07', name: '7번랙' },
    { value: '08', name: '8번랙' },
    { value: '09', name: '9번랙' },
  ];
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
      <label>CarNumber: </label>
      <DropBox value={title} onChange={(e) => setTitle(e.target.value)}>
        {selectList.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </DropBox>
      <label style={{ marginLeft: '10px' }}>RackNumber: </label>
      <DropBox value={rackNumber} onChange={(e) => setRackNumber(e.target.value)}>
        {selectList1.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </DropBox>
      {loading ? (
        <h2>잠시만 기다려주세요...</h2>
      ) : (
        <>
          <TestGraph data={battery} title="배터리 데이터 그래프" />
          <TestGraph data={pra} title="PRA 방전 Temp 그래프" />
          <TestGraph data={data1} title="Tray Cell Temp 평균 데이터 그래프"></TestGraph>
          <TestGraph data={data} title="Tray Cell Volt 평균 데이터 그래프"></TestGraph>
          <TestGraph data={data2} title="Tray Cell Temp 최대 데이터 그래프"></TestGraph>
          <TestGraph data={data3} title="Tray Cell Volt 최대 데이터 그래프"></TestGraph>
          <TestGraph data={data4} title="Tray Cell Temp 최소 데이터 그래프"></TestGraph>
          <TestGraph data={data5} title="Tray Cell Volt 최소 데이터 그래프"></TestGraph>
          <TestGraph data={data6} title="Tray Cell Temp 편차 데이터 그래프"></TestGraph>
          <TestGraph data={data7} title="Tray Cell Volt 편차 데이터 그래프"></TestGraph>
        </>
      )}
    </Page>
  );
};

export default Home;
