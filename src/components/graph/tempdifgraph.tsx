import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface Graph3Props {
  data: {
    trayCellDifTemp1: GraphDataItem[];
    trayCellDifTemp2: GraphDataItem[];
    trayCellDifTemp3: GraphDataItem[];
    trayCellDifTemp4: GraphDataItem[];
    trayCellDifTemp5: GraphDataItem[];
    trayCellDifTemp6: GraphDataItem[];
    trayCellDifTemp7: GraphDataItem[];
    trayCellDifTemp8: GraphDataItem[];
    trayCellDifTemp9: GraphDataItem[];
  };
}

const Graph3: React.FC<Graph3Props> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Temp 편차 데이터 그래프</h2>
      <Line
        width={900}
        height={400}
        data={[
          { id: 'TrayCellDifTemp1', data: data.trayCellDifTemp1 },
          { id: 'TrayCellDifTemp2', data: data.trayCellDifTemp2 },
          { id: 'TrayCellDifTemp3', data: data.trayCellDifTemp3 },
          { id: 'TrayCellDifTemp4', data: data.trayCellDifTemp4 },
          { id: 'TrayCellDifTemp5', data: data.trayCellDifTemp5 },
          { id: 'TrayCellDifTemp6', data: data.trayCellDifTemp6 },
          { id: 'TrayCellDifTemp7', data: data.trayCellDifTemp7 },
          { id: 'TrayCellDifTemp8', data: data.trayCellDifTemp8 },
          { id: 'TrayCellDifTemp9', data: data.trayCellDifTemp9 },
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
