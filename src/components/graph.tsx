import React, { useState, useEffect } from 'react';
import { graphget } from './apis/graph/graph';

const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2024-05-14T00:00:00Z'));
  const [endDate, setEndDate] = useState(new Date('2024-05-16T17:30:00Z'));

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  const fetchData = () => {
    const startTime = startDate.toISOString();
    const endTime = endDate.toISOString();

    graphget(startTime, endTime)
      .then((response) => {
        const receivedData = response;
        if (receivedData && receivedData.length > 0) {
          const formattedData = receivedData.map((item) => ({
            TrayCellVolt1: item.data.TrayCellVolt1,
            TrayCellVolt2: item.data.TrayCellVolt2,
            TrayCellVolt3: item.data.TrayCellVolt3,
            TrayCellTemp1: item.data.TrayCellTemp1,
            TrayCellTemp2: item.data.TrayCellTemp2,
            TrayCellTemp3: item.data.TrayCellTemp3,
          }));
          setTableData(formattedData);
        } else {
          setTableData([]);
        }
      })
      .catch((error) => console.error('데이터 가져오기 오류:', error));
  };

  const handleDateChange = (event) => {
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
            <th>TrayCellVolt1</th>
            <th>TrayCellVolt2</th>
            <th>TrayCellVolt3</th>
            <th>TrayCellTemp1</th>
            <th>TrayCellTemp2</th>
            <th>TrayCellTemp3</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.TrayCellVolt1}</td>
              <td>{data.TrayCellVolt2}</td>
              <td>{data.TrayCellVolt3}</td>
              <td>{data.TrayCellTemp1}</td>
              <td>{data.TrayCellTemp2}</td>
              <td>{data.TrayCellTemp3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      <div className="date-picker">
        <label>시작 날짜:</label>
        <input type="date" name="startDate" value={startDate.toISOString().slice(0, 10)} onChange={handleDateChange} />
      </div>
      <div className="date-picker">
        <label>종료 날짜:</label>
        <input type="date" name="endDate" value={endDate.toISOString().slice(0, 10)} onChange={handleDateChange} />
      </div>
      <div className="table-container">{renderTable()}</div>
    </div>
  );
};

export default Home;
