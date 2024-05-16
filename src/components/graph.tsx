import React, { useState, useEffect } from 'react';
import { graphget } from './apis/graph/graph';
import styled from '@emotion/styled';

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1360px;
`;

const Home = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [startDate, setStartDate] = useState(new Date('0000-05-14T00:00:00Z'));
  const [endDate, setEndDate] = useState(new Date('2024-05-16T17:30:00Z'));
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState('car001');
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 100000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  const fetchData = () => {
    const startTime = startDate.toISOString();
    const endTime = endDate.toISOString();

    graphget(startTime, endTime)
      .then((response) => {
        const receivedData = response;

        console.log(receivedData);
        if (receivedData && receivedData.length > 0) {
          const formattedData = receivedData.map(
            (item: {
              clientId: any;
              time: any;
              RackNumber: any;
              data: {
                TrayCellVolt1: any;
                TrayCellTemp1: any;
                TrayCellVolt2: any;
                TrayCellTemp2: any;
                TrayCellVolt3: any;
                TrayCellTemp3: any;
                TrayCellAvgVolt1: any;
                TrayCellMaxVolt1: any;
                TrayCellMinVolt1: any;
                TrayCellDifVolt1: any;
                TrayCellAvgVolt2: any;
                TrayCellMaxVolt2: any;
                TrayCellMinVolt2: any;
                TrayCellDifVolt2: any;
                TrayCellAvgVolt3: any;
                TrayCellMaxVolt3: any;
                TrayCellMinVolt3: any;
                TrayCellDifVolt3: any;
                TrayCellAvgTemp1: any;
                TrayCellMaxTemp1: any;
                TrayCellMinTemp1: any;
                TrayDifTemp1: any;
                TrayCellAvgTemp2: any;
                TrayCellMaxTemp2: any;
                TrayCellMinTemp2: any;
                TrayCellDifTemp2: any;
                TrayCellAvgTemp3: any;
                TrayCellMaxTemp3: any;
                TrayCellMinTemp3: any;
                TrayCellDifTemp3: any;
              };
            }) => ({
              time: item.time,
              RackNumber: item.RackNumber,
              Title: item.clientId,
              TrayCellAvgVolt1: item.data.TrayCellAvgVolt1,
              TrayCellMaxVolt1: item.data.TrayCellMaxVolt1,
              TrayCellMinVolt1: item.data.TrayCellMinVolt1,
              TrayCellDifVolt1: item.data.TrayCellDifVolt1,
              TrayCellAvgVolt2: item.data.TrayCellAvgVolt2,
              TrayCellMaxVolt2: item.data.TrayCellMaxVolt2,
              TrayCellMinVolt2: item.data.TrayCellMinVolt2,
              TrayCellDifVolt2: item.data.TrayCellDifVolt2,
              TrayCellAvgVolt3: item.data.TrayCellAvgVolt3,
              TrayCellMaxVolt3: item.data.TrayCellMaxVolt3,
              TrayCellMinVolt3: item.data.TrayCellMinVolt3,
              TrayCellDifVolt3: item.data.TrayCellDifVolt3,
              TrayCellAvgTemp1: item.data.TrayCellAvgTemp1,
              TrayCellMaxTemp1: item.data.TrayCellMaxTemp1,
              TrayCellMinTemp1: item.data.TrayCellMinTemp1,
              TrayCellDifTemp1: item.data.TrayDifTemp1,
              TrayCellAvgTemp2: item.data.TrayCellAvgTemp2,
              TrayCellMaxTemp2: item.data.TrayCellMaxTemp2,
              TrayCellMinTemp2: item.data.TrayCellMinTemp2,
              TrayCellDifTemp2: item.data.TrayCellDifTemp2,
              TrayCellAvgTemp3: item.data.TrayCellAvgTemp3,
              TrayCellMaxTemp3: item.data.TrayCellMaxTemp3,
              TrayCellMinTemp3: item.data.TrayCellMinTemp3,
              TrayCellDifTemp3: item.data.TrayCellDifTemp3,
            }),
          );
          setTableData(formattedData);
        } else {
          setTableData([]);
        }
      })
      .catch((error) => console.error('데이터 가져오기 오류:', error));
  };

  const handleDateChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(new Date(value));
    } else if (name === 'endDate') {
      setEndDate(new Date(value));
    }
  };

  const renderTable = () => {
    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>time</th>
            <th>RackNumber</th>
            <th>1번 cell Volt 평균</th>
            <th>1번 cell Volt 최대</th>
            <th>1번 cell Volt 최저</th>
            <th>1번 cell Volt 편차</th>
            <th>2번 cell Volt 평균</th>
            <th>2번 cell Volt 최대</th>
            <th>2번 cell Volt 최저</th>
            <th>2번 cell Volt 편차</th>
            <th>3번 cell Volt 평균</th>
            <th>3번 cell Volt 최대</th>
            <th>3번 cell Volt 최저</th>
            <th>3번 cell Volt 편차</th>
            <th>1번 cell Temp 평균</th>
            <th>1번 cell Temp 최대</th>
            <th>1번 cell Temp 최저</th>
            <th>1번 cell Temp 편차</th>
            <th>2번 cell Temp 평균</th>
            <th>2번 cell Temp 최대</th>
            <th>2번 cell Temp 최저</th>
            <th>2번 cell Temp 편차</th>
            <th>3번 cell Temp 평균</th>
            <th>3번 cell Temp 최대</th>
            <th>3번 cell Temp 최저</th>
            <th>3번 cell Temp 편차</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.time}</td>
              <td>{data.RackNumber}</td>
              <td>{data.TrayCellAvgVolt1}</td>
              <td>{data.TrayCellMaxVolt1}</td>
              <td>{data.TrayCellMinVolt1}</td>
              <td>{data.TrayCellDifVolt1}</td>
              <td>{data.TrayCellAvgVolt2}</td>
              <td>{data.TrayCellMaxVolt2}</td>
              <td>{data.TrayCellMinVolt2}</td>
              <td>{data.TrayCellDifVolt2}</td>
              <td>{data.TrayCellAvgVolt3}</td>
              <td>{data.TrayCellMaxVolt3}</td>
              <td>{data.TrayCellMinVolt3}</td>
              <td>{data.TrayCellDifVolt3}</td>
              <td>{data.TrayCellAvgTemp1}</td>
              <td>{data.TrayCellMaxTemp1}</td>
              <td>{data.TrayCellMinTemp1}</td>
              <td>{data.TrayCellDifTemp1}</td>
              <td>{data.TrayCellAvgTemp2}</td>
              <td>{data.TrayCellMaxTemp2}</td>
              <td>{data.TrayCellMinTemp2}</td>
              <td>{data.TrayCellDifTemp2}</td>
              <td>{data.TrayCellAvgTemp3}</td>
              <td>{data.TrayCellMaxTemp3}</td>
              <td>{data.TrayCellMinTemp3}</td>
              <td>{data.TrayCellDifTemp3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Page>
      <h1>{title}</h1>
      <div className="container">
        <div className="date-picker">
          <label>시작 날짜:</label>
          <input
            type="date"
            name="startDate"
            value={startDate.toISOString().slice(0, 10)}
            onChange={handleDateChange}
          />
        </div>
        <div className="date-picker">
          <label>종료 날짜:</label>
          <input type="date" name="endDate" value={endDate.toISOString().slice(0, 10)} onChange={handleDateChange} />
        </div>
        <div className="table-container">{renderTable()}</div>
      </div>
    </Page>
  );
};

export default Home;
