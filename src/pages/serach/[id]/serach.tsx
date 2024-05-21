// (can data RackNumber filter 후)
import React, { useState, useEffect } from 'react';
import { graphget } from '../../../components/apis/graph/graphtest';
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
  const [startDate, setStartDate] = useState(new Date('0000-01-01T00:00:00Z'));
  const [endDate, setEndDate] = useState(new Date('0000-01-02T00:00:00Z'));
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState('car001');
  const [rackNumberSearch, setRackNumberSearch] = useState('');
  const [columnSearch, setColumnSearch] = useState('');
  const [noDataMessage, setNoDataMessage] = useState('');

  useEffect(() => {
    if (rackNumberSearch) {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, rackNumberSearch]);

  const fetchData = () => {
    const startTime = startDate.toISOString();
    const endTime = endDate.toISOString();

    graphget(startTime, endTime, rackNumberSearch)
      .then((response) => {
        const receivedData = response;

        if (receivedData && receivedData.length > 0) {
          const formattedData = receivedData.map(
            (item: {
              clientId: any;
              time: any;
              RackNumber: any;
              data: {
                Battery: any;
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
                TrayCellAvgTemp4: any;
                TrayCellMaxTemp4: any;
                TrayCellMinTemp4: any;
                TrayCellDifTemp4: any;
                TrayCellAvgVolt4: any;
                TrayCellMaxVolt4: any;
                TrayCellMinVolt4: any;
                TrayCellDifVolt4: any;
                TrayCellAvgTemp5: any;
                TrayCellMaxTemp5: any;
                TrayCellMinTemp5: any;
                TrayCellDifTemp5: any;
                TrayCellAvgVolt5: any;
                TrayCellMaxVolt5: any;
                TrayCellMinVolt5: any;
                TrayCellDifVolt5: any;
                TrayCellAvgTemp6: any;
                TrayCellMaxTemp6: any;
                TrayCellMinTemp6: any;
                TrayCellDifTemp6: any;
                TrayCellAvgVolt6: any;
                TrayCellMaxVolt6: any;
                TrayCellMinVolt6: any;
                TrayCellDifVolt6: any;
                TrayCellAvgTemp7: any;
                TrayCellMaxTemp7: any;
                TrayCellMinTemp7: any;
                TrayCellDifTemp7: any;
                TrayCellAvgVolt7: any;
                TrayCellMaxVolt7: any;
                TrayCellMinVolt7: any;
                TrayCellDifVolt7: any;
                TrayCellAvgTemp8: any;
                TrayCellMaxTemp8: any;
                TrayCellMinTemp8: any;
                TrayCellDifTemp8: any;
                TrayCellAvgVolt8: any;
                TrayCellMaxVolt8: any;
                TrayCellMinVolt8: any;
                TrayCellDifVolt8: any;
                TrayCellAvgTemp9: any;
                TrayCellMaxTemp9: any;
                TrayCellMinTemp9: any;
                TrayCellDifTemp9: any;
                TrayCellAvgVolt9: any;
                TrayCellMaxVolt9: any;
                TrayCellMinVolt9: any;
                TrayCellDifVolt9: any;
              };
            }) => ({
              time: item.time,
              RackNumber: item.RackNumber,
              Title: item.clientId,
              Battery: item.data.Battery,
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
              TrayCellAvgTemp4: item.data.TrayCellAvgTemp4,
              TrayCellMaxTemp4: item.data.TrayCellMaxTemp4,
              TrayCellMinTemp4: item.data.TrayCellMinTemp4,
              TrayCellDifTemp4: item.data.TrayCellDifTemp4,
              TrayCellAvgVolt4: item.data.TrayCellAvgVolt4,
              TrayCellMaxVolt4: item.data.TrayCellMaxVolt4,
              TrayCellMinVolt4: item.data.TrayCellMinVolt4,
              TrayCellDifVolt4: item.data.TrayCellDifVolt4,
              TrayCellAvgTemp5: item.data.TrayCellAvgTemp5,
              TrayCellMaxTemp5: item.data.TrayCellMaxTemp5,
              TrayCellMinTemp5: item.data.TrayCellMinTemp5,
              TrayCellDifTemp5: item.data.TrayCellDifTemp5,
              TrayCellAvgVolt5: item.data.TrayCellAvgVolt5,
              TrayCellMaxVolt5: item.data.TrayCellMaxVolt5,
              TrayCellMinVolt5: item.data.TrayCellMinVolt5,
              TrayCellDifVolt5: item.data.TrayCellDifVolt5,
              TrayCellAvgTemp6: item.data.TrayCellAvgTemp6,
              TrayCellMaxTemp6: item.data.TrayCellMaxTemp6,
              TrayCellMinTemp6: item.data.TrayCellMinTemp6,
              TrayCellDifTemp6: item.data.TrayCellDifTemp6,
              TrayCellAvgVolt6: item.data.TrayCellAvgVolt6,
              TrayCellMaxVolt6: item.data.TrayCellMaxVolt6,
              TrayCellMinVolt6: item.data.TrayCellMinVolt6,
              TrayCellDifVolt6: item.data.TrayCellDifVolt6,
              TrayCellAvgTemp7: item.data.TrayCellAvgTemp7,
              TrayCellMaxTemp7: item.data.TrayCellMaxTemp7,
              TrayCellMinTemp7: item.data.TrayCellMinTemp7,
              TrayCellDifTemp7: item.data.TrayCellDifTemp7,
              TrayCellAvgVolt7: item.data.TrayCellAvgVolt7,
              TrayCellMaxVolt7: item.data.TrayCellMaxVolt7,
              TrayCellMinVolt7: item.data.TrayCellMinVolt7,
              TrayCellDifVolt7: item.data.TrayCellDifVolt7,
              TrayCellAvgTemp8: item.data.TrayCellAvgTemp8,
              TrayCellMaxTemp8: item.data.TrayCellMaxTemp8,
              TrayCellMinTemp8: item.data.TrayCellMinTemp8,
              TrayCellDifTemp8: item.data.TrayCellDifTemp8,
              TrayCellAvgVolt8: item.data.TrayCellAvgVolt8,
              TrayCellMaxVolt8: item.data.TrayCellMaxVolt8,
              TrayCellMinVolt8: item.data.TrayCellMinVolt8,
              TrayCellDifVolt8: item.data.TrayCellDifVolt8,
              TrayCellAvgTemp9: item.data.TrayCellAvgTemp9,
              TrayCellMaxTemp9: item.data.TrayCellMaxTemp9,
              TrayCellMinTemp9: item.data.TrayCellMinTemp9,
              TrayCellDifTemp9: item.data.TrayCellDifTemp9,
              TrayCellAvgVolt9: item.data.TrayCellAvgVolt9,
              TrayCellMaxVolt9: item.data.TrayCellMaxVolt9,
              TrayCellMinVolt9: item.data.TrayCellMinVolt9,
              TrayCellDifVolt9: item.data.TrayCellDifVolt9,
            }),
          );
          setTableData(formattedData);
          setNoDataMessage('');
        } else {
          setTableData([]);
          setNoDataMessage('해당 날짜 및 검색어는 존재하지 않습니다.');
        }
      })
      .catch((error) => {
        console.error('데이터 가져오기 오류:', error);
        setTableData([]);
        setNoDataMessage('데이터 가져오기 오류가 발생했습니다.');
      });
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
      'Battery',
      'TrayCellAvgVolt1',
      'TrayCellMaxVolt1',
      'TrayCellMinVolt1',
      'TrayCellDifVolt1',
      'TrayCellAvgTemp1',
      'TrayCellMaxTemp1',
      'TrayCellMinTemp1',
      'TrayCellDifTemp1',
      'TrayCellAvgVolt2',
      'TrayCellMaxVolt2',
      'TrayCellMinVolt2',
      'TrayCellDifVolt2',
      'TrayCellAvgTemp2',
      'TrayCellMaxTemp2',
      'TrayCellMinTemp2',
      'TrayCellDifTemp2',
      'TrayCellAvgVolt3',
      'TrayCellMaxVolt3',
      'TrayCellMinVolt3',
      'TrayCellDifVolt3',
      'TrayCellAvgTemp3',
      'TrayCellMaxTemp3',
      'TrayCellMinTemp3',
      'TrayCellDifTemp3',
      'TrayCellAvgVolt4',
      'TrayCellMaxVolt4',
      'TrayCellMinVolt4',
      'TrayCellDifVolt4',
      'TrayCellAvgTemp4',
      'TrayCellMaxTemp4',
      'TrayCellMinTemp4',
      'TrayCellDifTemp4',
      'TrayCellAvgVolt5',
      'TrayCellMaxVolt5',
      'TrayCellMinVolt5',
      'TrayCellDifVolt5',
      'TrayCellAvgTemp5',
      'TrayCellMaxTemp5',
      'TrayCellMinTemp5',
      'TrayCellDifTemp5',
      'TrayCellAvgVolt6',
      'TrayCellMaxVolt6',
      'TrayCellMinVolt6',
      'TrayCellDifVolt6',
      'TrayCellAvgTemp6',
      'TrayCellMaxTemp6',
      'TrayCellMinTemp6',
      'TrayCellDifTemp6',
      'TrayCellAvgVolt7',
      'TrayCellMaxVolt7',
      'TrayCellMinVolt7',
      'TrayCellDifVolt7',
      'TrayCellAvgTemp7',
      'TrayCellMaxTemp7',
      'TrayCellMinTemp7',
      'TrayCellDifTemp7',
      'TrayCellAvgVolt8',
      'TrayCellMaxVolt8',
      'TrayCellMinVolt8',
      'TrayCellDifVolt8',
      'TrayCellAvgTemp8',
      'TrayCellMaxTemp8',
      'TrayCellMinTemp8',
      'TrayCellDifTemp8',
      'TrayCellAvgVolt9',
      'TrayCellMaxVolt9',
      'TrayCellMinVolt9',
      'TrayCellDifVolt9',
      'TrayCellAvgTemp9',
      'TrayCellMaxTemp9',
      'TrayCellMinTemp9',
      'TrayCellDifTemp9',
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
          <label style={{ fontSize: '15px', marginRight: '10px' }}>시작 날짜 : </label>
          <Input
            style={{ width: '20%', marginBottom: '10px' }}
            type="date"
            name="startDate"
            value={startDate.toISOString().slice(0, 10)}
            onChange={handleDateChange}
          />
        </div>
        <div className="date-picker">
          <label style={{ fontSize: '15px', marginRight: '10px' }}>종료 날짜 : </label>
          <Input
            style={{ width: '20%', marginBottom: '10px' }}
            type="date"
            name="endDate"
            value={endDate.toISOString().slice(0, 10)}
            onChange={handleDateChange}
          />
        </div>
        <div className="search-bar">
          <label style={{ fontSize: '15px', marginRight: '25px' }}>랙 번호 : </label>
          <Input
            type="text"
            value={rackNumberSearch}
            style={{ width: '20%', marginBottom: '10px' }}
            placeholder="랙 번호 검색"
            onChange={handleRackNumberSearchChange}
          />
        </div>
        <div className="search-bar">
          <label style={{ fontSize: '15px' }}>Tray name : </label>
          <Input
            style={{ width: '20%', marginBottom: '10px' }}
            placeholder="Tray name 검색"
            onChange={handleColumnSearchChange}
          />
        </div>
      </div>
      <div className="table-container">{renderTable()}</div>
    </Page>
  );
};

export default Home;
