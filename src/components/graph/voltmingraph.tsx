import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface Graph4Props {
  data: {
    trayCellminVolt1: GraphDataItem[];
    trayCellminVolt2: GraphDataItem[];
    trayCellminVolt3: GraphDataItem[];
    trayCellminVolt4: GraphDataItem[];
    trayCellminVolt5: GraphDataItem[];
    trayCellminVolt6: GraphDataItem[];
    trayCellminVolt7: GraphDataItem[];
    trayCellminVolt8: GraphDataItem[];
    trayCellminVolt9: GraphDataItem[];
  };
}

const Graph3: React.FC<Graph4Props> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Volt 최소 데이터 그래프</h2>
      <Line
        width={600}
        height={300}
        data={[
          { id: 'trayCellminVolt1', data: data.trayCellminVolt1 },
          { id: 'trayCellminVolt2', data: data.trayCellminVolt2 },
          { id: 'trayCellminVolt3', data: data.trayCellminVolt3 },
          { id: 'trayCellminVolt4', data: data.trayCellminVolt4 },
          { id: 'trayCellminVolt5', data: data.trayCellminVolt5 },
          { id: 'trayCellminVolt6', data: data.trayCellminVolt6 },
          { id: 'trayCellminVolt7', data: data.trayCellminVolt7 },
          { id: 'trayCellminVolt8', data: data.trayCellminVolt8 },
          { id: 'trayCellminVolt9', data: data.trayCellminVolt9 },
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

export default Graph3;
