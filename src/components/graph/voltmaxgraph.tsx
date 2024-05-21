import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface Graph4Props {
  data: {
    trayCellmaxVolt1: GraphDataItem[];
    trayCellmaxVolt2: GraphDataItem[];
    trayCellmaxVolt3: GraphDataItem[];
    trayCellmaxVolt4: GraphDataItem[];
    trayCellmaxVolt5: GraphDataItem[];
    trayCellmaxVolt6: GraphDataItem[];
    trayCellmaxVolt7: GraphDataItem[];
    trayCellmaxVolt8: GraphDataItem[];
    trayCellmaxVolt9: GraphDataItem[];
  };
}

const Graph3: React.FC<Graph4Props> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Volt 최대 데이터 그래프</h2>
      <Line
        width={600}
        height={300}
        data={[
          { id: 'TrayCellmaxVolt1', data: data.trayCellmaxVolt1 },
          { id: 'TrayCellmaxVolt2', data: data.trayCellmaxVolt2 },
          { id: 'TrayCellmaxVolt3', data: data.trayCellmaxVolt3 },
          { id: 'TrayCellmaxVolt4', data: data.trayCellmaxVolt4 },
          { id: 'TrayCellmaxVolt5', data: data.trayCellmaxVolt5 },
          { id: 'TrayCellmaxVolt6', data: data.trayCellmaxVolt6 },
          { id: 'TrayCellmaxVolt7', data: data.trayCellmaxVolt7 },
          { id: 'TrayCellmaxVolt8', data: data.trayCellmaxVolt8 },
          { id: 'TrayCellmaxVolt9', data: data.trayCellmaxVolt9 },
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
