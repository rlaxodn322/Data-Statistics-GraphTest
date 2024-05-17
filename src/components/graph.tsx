import React, { useState, useEffect } from 'react';
import { graphget } from './apis/graph/graph';
import styled from '@emotion/styled';
import { Input } from 'antd';

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1300px;
  font-size: 12px;
`;

const Home = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [startDate, setStartDate] = useState(new Date('0000-05-14T00:00:00Z'));
  const [endDate, setEndDate] = useState(new Date('2024-05-16T17:30:00Z'));
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState('car001');
  const [rackNumberSearch, setRackNumberSearch] = useState('');
  const [columnSearch, setColumnSearch] = useState('');
  const [noDataMessage, setNoDataMessage] = useState('');
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 3000);
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
          setNoDataMessage(''); // 데이터가 있으면 메시지 초기화
        } else {
          setTableData([]);
          setNoDataMessage('해당 날짜 및 검색어는 존재하지 않습니다.');
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

  const handleRackNumberSearchChange = (event: { target: { value: string } }) => {
    setRackNumberSearch(event.target.value);
  };

  const handleColumnSearchChange = (event: { target: { value: string } }) => {
    setColumnSearch(event.target.value);
  };

  const renderTable = () => {
    const filteredData = tableData.filter((data) => {
      const rackNumberMatches =
        rackNumberSearch === '' || (data.RackNumber && data.RackNumber.includes(rackNumberSearch));
      return rackNumberMatches;
    });
    if (filteredData.length === 0) {
      return <p>{noDataMessage}</p>;
    }

    const allColumns = [
      'time',
      'RackNumber',
      'TrayCellAvgVolt1',
      'TrayCellMaxVolt1',
      'TrayCellMinVolt1',
      'TrayCellDifVolt1',
      // 'TrayCellAvgVolt2',
      // 'TrayCellMaxVolt2',
      // 'TrayCellMinVolt2',
      // 'TrayCellDifVolt2',
      // 'TrayCellAvgVolt3',
      // 'TrayCellMaxVolt3',
      // 'TrayCellMinVolt3',
      // 'TrayCellDifVolt3',
      'TrayCellAvgTemp1',
      'TrayCellMaxTemp1',
      'TrayCellMinTemp1',
      'TrayCellDifTemp1',
      // 'TrayCellAvgTemp2',
      // 'TrayCellMaxTemp2',
      // 'TrayCellMinTemp2',
      // 'TrayCellDifTemp2',
      // 'TrayCellAvgTemp3',
      // 'TrayCellMaxTemp3',
      // 'TrayCellMinTemp3',
      // 'TrayCellDifTemp3',
    ];

    const columnsToDisplay = columnSearch ? ['time', 'RackNumber', columnSearch] : allColumns;

    return (
      <table className="data-table">
        <thead>
          <tr>
            {columnsToDisplay.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              {columnsToDisplay.map((column) => (
                <td key={column}>{data[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <Page>
      <h2>{title}</h2>
      <div className="container">
        <div className="date-picker">
          <label style={{ fontSize: '15px' }}>시작 날짜: </label>
          <Input
            style={{ width: '20%', marginBottom: '10px' }}
            type="date"
            name="startDate"
            value={startDate.toISOString().slice(0, 10)}
            onChange={handleDateChange}
          />
        </div>
        <div className="date-picker">
          <label style={{ fontSize: '15px' }}>종료 날짜: </label>
          <Input
            style={{ width: '20%', marginBottom: '10px' }}
            type="date"
            name="endDate"
            value={endDate.toISOString().slice(0, 10)}
            onChange={handleDateChange}
          />
        </div>
        <div className="search">
          <label style={{ fontSize: '15px' }}>Rack 검색: </label>
          <Input
            style={{ width: '20%', marginBottom: '10px' }}
            type="text"
            value={rackNumberSearch}
            onChange={handleRackNumberSearchChange}
          />
        </div>
        <div className="search">
          <label style={{ fontSize: '15px' }}>Cell 검색: </label>
          <Input
            style={{ width: '20%', marginBottom: '10px' }}
            type="text"
            value={columnSearch}
            onChange={handleColumnSearchChange}
          />
        </div>
        <div className="table-container">{renderTable()}</div>
      </div>
    </Page>
  );
};

export default Home;
