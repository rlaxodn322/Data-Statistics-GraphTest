import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface Graph3Props {
  data: {
    trayCellmaxTemp1: GraphDataItem[];
    trayCellmaxTemp2: GraphDataItem[];
    trayCellmaxTemp3: GraphDataItem[];
    trayCellmaxTemp4: GraphDataItem[];
    trayCellmaxTemp5: GraphDataItem[];
    trayCellmaxTemp6: GraphDataItem[];
    trayCellmaxTemp7: GraphDataItem[];
    trayCellmaxTemp8: GraphDataItem[];
    trayCellmaxTemp9: GraphDataItem[];
  };
}

const Graph3: React.FC<Graph3Props> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Temp 최대 데이터 그래프</h2>
      <Line
        width={800}
        height={400}
        data={[
          { id: 'trayCellmaxTemp1', data: data.trayCellmaxTemp1 },
          { id: 'trayCellmaxTemp2', data: data.trayCellmaxTemp2 },
          { id: 'trayCellmaxTemp3', data: data.trayCellmaxTemp3 },
          { id: 'trayCellmaxTemp4', data: data.trayCellmaxTemp4 },
          { id: 'trayCellmaxTemp5', data: data.trayCellmaxTemp5 },
          { id: 'trayCellmaxTemp6', data: data.trayCellmaxTemp6 },
          { id: 'trayCellmaxTemp7', data: data.trayCellmaxTemp7 },
          { id: 'trayCellmaxTemp8', data: data.trayCellmaxTemp8 },
          { id: 'trayCellmaxTemp9', data: data.trayCellmaxTemp9 },
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
