import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface Graph4Props {
  data: {
    trayCellDifVolt1: GraphDataItem[];
    trayCellDifVolt2: GraphDataItem[];
    trayCellDifVolt3: GraphDataItem[];
    trayCellDifVolt4: GraphDataItem[];
    trayCellDifVolt5: GraphDataItem[];
    trayCellDifVolt6: GraphDataItem[];
    trayCellDifVolt7: GraphDataItem[];
    trayCellDifVolt8: GraphDataItem[];
    trayCellDifVolt9: GraphDataItem[];
  };
}

const Graph3: React.FC<Graph4Props> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Volt 편차 데이터 그래프</h2>
      <Line
        width={900}
        height={400}
        data={[
          { id: 'TrayCellDifVolt1', data: data.trayCellDifVolt1 },
          { id: 'TrayCellDifVolt2', data: data.trayCellDifVolt2 },
          { id: 'TrayCellDifVolt3', data: data.trayCellDifVolt3 },
          { id: 'TrayCellDifVolt4', data: data.trayCellDifVolt4 },
          { id: 'TrayCellDifVolt5', data: data.trayCellDifVolt5 },
          { id: 'TrayCellDifVolt6', data: data.trayCellDifVolt6 },
          { id: 'TrayCellDifVolt7', data: data.trayCellDifVolt7 },
          { id: 'TrayCellDifVolt8', data: data.trayCellDifVolt8 },
          { id: 'TrayCellDifVolt9', data: data.trayCellDifVolt9 },
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
          tickValues: 'every 5 hours',
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

export default Graph3;
