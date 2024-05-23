// (can data RackNumber filter 후)
import React, { useState, useEffect } from 'react';
import { graphget2 } from '../../../components/apis/graph/graphtest';
import styled from '@emotion/styled';
import { Button, Input } from 'antd';

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1300px;
  font-size: 12px;
`;
const ButtonContainer = styled.div`
  width: 400px;
  margin: 0 auto;

  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
`;
// const InputWrapper = styled.div`
//   margin: 0 10px;
// `;
const DropBox = styled.select`
  width: 250px;
  height: 40px;
  border: solid 1px lightgray;
  border-radius: 8px;
  margin-left: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 15px;
  text-indent: 5px;
  & option {
    font-size: 16px;
  }
`;
const Home = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [startDate, setStartDate] = useState(new Date('0000-01-01T00:00:00Z'));
  const [endDate, setEndDate] = useState(new Date('0000-01-02T00:00:00Z'));
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState<string>('');
  const [rackNumberSearch, setRackNumberSearch] = useState('');
  // const [columnSearch, setColumnSearch] = useState('');
  const [noDataMessage, setNoDataMessage] = useState('');
  const [selectedTray, setSelectedTray] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (rackNumberSearch) {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, rackNumberSearch, title]);

  const fetchData = () => {
    setLoading(true);
    const startTime = startDate.toISOString();
    const endTime = endDate.toISOString();

    graphget2(startTime, endTime, rackNumberSearch, title)
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
                FalutWarning: any;
              };
            }) => ({
              time: item.time,
              RackNumber: item.RackNumber,
              Title: item.clientId,
              Battery: item.data.Battery,
              CellAvgVolt1: item.data.TrayCellAvgVolt1,
              CellMaxVolt1: item.data.TrayCellMaxVolt1,
              CellMinVolt1: item.data.TrayCellMinVolt1,
              CellDifVolt1: item.data.TrayCellDifVolt1,
              CellAvgVolt2: item.data.TrayCellAvgVolt2,
              CellMaxVolt2: item.data.TrayCellMaxVolt2,
              CellMinVolt2: item.data.TrayCellMinVolt2,
              CellDifVolt2: item.data.TrayCellDifVolt2,
              CellAvgVolt3: item.data.TrayCellAvgVolt3,
              CellMaxVolt3: item.data.TrayCellMaxVolt3,
              CellMinVolt3: item.data.TrayCellMinVolt3,
              CellDifVolt3: item.data.TrayCellDifVolt3,
              CellAvgTemp1: item.data.TrayCellAvgTemp1,
              CellMaxTemp1: item.data.TrayCellMaxTemp1,
              CellMinTemp1: item.data.TrayCellMinTemp1,
              CellDifTemp1: item.data.TrayDifTemp1,
              CellAvgTemp2: item.data.TrayCellAvgTemp2,
              CellMaxTemp2: item.data.TrayCellMaxTemp2,
              CellMinTemp2: item.data.TrayCellMinTemp2,
              CellDifTemp2: item.data.TrayCellDifTemp2,
              CellAvgTemp3: item.data.TrayCellAvgTemp3,
              CellMaxTemp3: item.data.TrayCellMaxTemp3,
              CellMinTemp3: item.data.TrayCellMinTemp3,
              CellDifTemp3: item.data.TrayCellDifTemp3,
              CellAvgTemp4: item.data.TrayCellAvgTemp4,
              CellMaxTemp4: item.data.TrayCellMaxTemp4,
              CellMinTemp4: item.data.TrayCellMinTemp4,
              CellDifTemp4: item.data.TrayCellDifTemp4,
              CellAvgVolt4: item.data.TrayCellAvgVolt4,
              CellMaxVolt4: item.data.TrayCellMaxVolt4,
              CellMinVolt4: item.data.TrayCellMinVolt4,
              CellDifVolt4: item.data.TrayCellDifVolt4,
              CellAvgTemp5: item.data.TrayCellAvgTemp5,
              CellMaxTemp5: item.data.TrayCellMaxTemp5,
              CellMinTemp5: item.data.TrayCellMinTemp5,
              CellDifTemp5: item.data.TrayCellDifTemp5,
              CellAvgVolt5: item.data.TrayCellAvgVolt5,
              CellMaxVolt5: item.data.TrayCellMaxVolt5,
              CellMinVolt5: item.data.TrayCellMinVolt5,
              CellDifVolt5: item.data.TrayCellDifVolt5,
              CellAvgTemp6: item.data.TrayCellAvgTemp6,
              CellMaxTemp6: item.data.TrayCellMaxTemp6,
              CellMinTemp6: item.data.TrayCellMinTemp6,
              CellDifTemp6: item.data.TrayCellDifTemp6,
              CellAvgVolt6: item.data.TrayCellAvgVolt6,
              CellMaxVolt6: item.data.TrayCellMaxVolt6,
              CellMinVolt6: item.data.TrayCellMinVolt6,
              CellDifVolt6: item.data.TrayCellDifVolt6,
              CellAvgTemp7: item.data.TrayCellAvgTemp7,
              CellMaxTemp7: item.data.TrayCellMaxTemp7,
              CellMinTemp7: item.data.TrayCellMinTemp7,
              CellDifTemp7: item.data.TrayCellDifTemp7,
              CellAvgVolt7: item.data.TrayCellAvgVolt7,
              CellMaxVolt7: item.data.TrayCellMaxVolt7,
              CellMinVolt7: item.data.TrayCellMinVolt7,
              CellDifVolt7: item.data.TrayCellDifVolt7,
              CellAvgTemp8: item.data.TrayCellAvgTemp8,
              CellMaxTemp8: item.data.TrayCellMaxTemp8,
              CellMinTemp8: item.data.TrayCellMinTemp8,
              CellDifTemp8: item.data.TrayCellDifTemp8,
              CellAvgVolt8: item.data.TrayCellAvgVolt8,
              CellMaxVolt8: item.data.TrayCellMaxVolt8,
              CellMinVolt8: item.data.TrayCellMinVolt8,
              CellDifVolt8: item.data.TrayCellDifVolt8,
              CellAvgTemp9: item.data.TrayCellAvgTemp9,
              CellMaxTemp9: item.data.TrayCellMaxTemp9,
              CellMinTemp9: item.data.TrayCellMinTemp9,
              CellDifTemp9: item.data.TrayCellDifTemp9,
              CellAvgVolt9: item.data.TrayCellAvgVolt9,
              CellMaxVolt9: item.data.TrayCellMaxVolt9,
              CellMinVolt9: item.data.TrayCellMinVolt9,
              CellDifVolt9: item.data.TrayCellDifVolt9,
              FalutWarning: item.data.FalutWarning,
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleButtonClick = (rackNumber: string) => {
    setRackNumberSearch(rackNumber);
    fetchData();
  };
  const handleTrayButtonClick = (trayNumber: number) => {
    setSelectedTray(trayNumber);
  };

  const handleDateChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(new Date(value));
    } else if (name === 'endDate') {
      setEndDate(new Date(value));
    }
  };
  const selectList = [
    { value: '', name: '' },
    { value: 'car001', name: '1호' },
    { value: 'car002', name: '2호' },
    { value: 'car003', name: '3호' },
  ];
  const renderTable = () => {
    const filteredData = tableData.filter((data) => {
      const rackNumberMatches =
        rackNumberSearch === '' || (data.RackNumber && data.RackNumber.includes(rackNumberSearch));
      return rackNumberMatches;
    });
    if (filteredData.length === 0) {
      return <p style={{ marginRight: '10px' }}>{noDataMessage}</p>;
    }
    const trayColumns: Record<number, string[]> = {
      1: [
        'CellAvgVolt1',
        'CellMaxVolt1',
        'CellMinVolt1',
        'CellDifVolt1',
        'CellAvgTemp1',
        'CellMaxTemp1',
        'CellMinTemp1',
        'CellDifTemp1',
        'FalutWarning',
      ],
      2: [
        'CellAvgVolt2',
        'CellMaxVolt2',
        'CellMinVolt2',
        'CellDifVolt2',
        'CellAvgTemp2',
        'CellMaxTemp2',
        'CellMinTemp2',
        'CellDifTemp2',
        'FalutWarning',
      ],
      3: [
        'CellAvgVolt3',
        'CellMaxVolt3',
        'CellMinVolt3',
        'CellDifVolt3',
        'CellAvgTemp3',
        'CellMaxTemp3',
        'CellMinTemp3',
        'CellDifTemp3',
        'FalutWarning',
      ],
      4: [
        'CellAvgVolt4',
        'CellMaxVolt4',
        'CellMinVolt4',
        'CellDifVolt4',
        'CellAvgTemp4',
        'CellMaxTemp4',
        'CellMinTemp4',
        'CellDifTemp4',
        'FalutWarning',
      ],
      5: [
        'CellAvgVolt5',
        'CellMaxVolt5',
        'CellMinVolt5',
        'CellDifVolt5',
        'CellAvgTemp5',
        'CellMaxTemp5',
        'CellMinTemp5',
        'CellDifTemp5',
        'FalutWarning',
      ],
      6: [
        'CellAvgVolt6',
        'CellMaxVolt6',
        'CellMinVolt6',
        'CellDifVolt6',
        'CellAvgTemp6',
        'CellMaxTemp6',
        'CellMinTemp6',
        'CellDifTemp6',
        'FalutWarning',
      ],
      7: [
        'CellAvgVolt7',
        'CellMaxVolt7',
        'CellMinVolt7',
        'CellDifVolt7',
        'CellAvgTemp7',
        'CellMaxTemp7',
        'CellMinTemp7',
        'CellDifTemp7',
        'FalutWarning',
      ],
      8: [
        'CellAvgVolt8',
        'CellMaxVolt8',
        'CellMinVolt8',
        'CellDifVolt8',
        'CellAvgTemp8',
        'CellMaxTemp8',
        'CellMinTemp8',
        'CellDifTemp8',
        'FalutWarning',
      ],
      9: [
        'CellAvgVolt9',
        'CellMaxVolt9',
        'CellMinVolt9',
        'CellDifVolt9',
        'CellAvgTemp9',
        'CellMaxTemp9',
        'CellMinTemp9',
        'CellDifTemp9',
        'FalutWarning',
      ],
      // Add remaining tray mappings here
    };

    const selectedColumns = selectedTray ? trayColumns[selectedTray as number] : [];

    return (
      <table style={{ borderCollapse: 'collapse', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>Time</th>
            <th>RackNumber</th>
            <th>Title</th>
            <th>Battery</th>
            {selectedColumns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.time}</td>
              <td>{data.RackNumber}</td>
              <td>{data.Title}</td>
              <td>{data.Battery}</td>
              {selectedColumns.map((col) => (
                <td key={col}>{data[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Page>
      <div style={{ marginTop: '20px' }} className="container">
        <label>CarNumber: </label>
        <DropBox value={title} onChange={(e) => setTitle(e.target.value)}>
          {selectList.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </DropBox>
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
        <h3>Rack 번호 클릭 </h3>
        <ButtonContainer>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleButtonClick('01')}
          >
            Rack1
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleButtonClick('02')}
          >
            Rack2
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleButtonClick('03')}
          >
            Rack3
          </Button>
        </ButtonContainer>
        <ButtonContainer style={{ marginBottom: '10px' }}>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleButtonClick('04')}
          >
            Rack4
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleButtonClick('05')}
          >
            Rack5
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleButtonClick('06')}
          >
            Rack6
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleButtonClick('07')}
          >
            Rack7
          </Button>
        </ButtonContainer>

        <h3>Tray 번호 클릭 </h3>
        <ButtonContainer>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(1)}
          >
            Tray1
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(2)}
          >
            Tray2
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(3)}
          >
            Tray3
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(4)}
          >
            Tray4
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(5)}
          >
            Tray5
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(6)}
          >
            Tray6
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(7)}
          >
            Tray7
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(8)}
          >
            Tray8
          </Button>
          <Button
            style={{ width: '60px', height: '60px', marginRight: '10px', marginBottom: '10px' }}
            onClick={() => handleTrayButtonClick(9)}
          >
            Tray9
          </Button>
        </ButtonContainer>
        {loading ? <p>잠시만 기다려 주세요...</p> : renderTable()}
      </div>
      <div className="table-container">{renderTable()}</div>
    </Page>
  );
};

export default Home;
