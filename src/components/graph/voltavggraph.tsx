import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
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

const Graph1: React.FC<{ data: GraphData }> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Volt 평균 데이터 그래프</h2>
      <Line
        width={800}
        height={400}
        data={[
          { id: 'TrayCellVolt1', data: data.trayCellVolt1 },
          { id: 'TrayCellVolt2', data: data.trayCellVolt2 },
          { id: 'TrayCellVolt3', data: data.trayCellVolt3 },
          { id: 'TrayCellVolt4', data: data.trayCellVolt4 },
          { id: 'TrayCellVolt5', data: data.trayCellVolt5 },
          { id: 'TrayCellVolt6', data: data.trayCellVolt6 },
          { id: 'TrayCellVolt7', data: data.trayCellVolt7 },
          { id: 'TrayCellVolt8', data: data.trayCellVolt8 },
          { id: 'TrayCellVolt9', data: data.trayCellVolt9 },
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
        enableGridX={true}
        enablePoints={true}
        enableCrosshair={false}
        useMesh={true}
        colors={{ scheme: 'category10' }}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 80,
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
    </div>
  );
};

export default Graph1;
