import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface Graph3Props {
  data: {
    trayCellminTemp1: GraphDataItem[];
    trayCellminTemp2: GraphDataItem[];
    trayCellminTemp3: GraphDataItem[];
    trayCellminTemp4: GraphDataItem[];
    trayCellminTemp5: GraphDataItem[];
    trayCellminTemp6: GraphDataItem[];
    trayCellminTemp7: GraphDataItem[];
    trayCellminTemp8: GraphDataItem[];
    trayCellminTemp9: GraphDataItem[];
  };
}

const Graph3: React.FC<Graph3Props> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Temp 최소 데이터 그래프</h2>
      <Line
        width={900}
        height={400}
        data={[
          { id: 'TrayCellminTemp1', data: data.trayCellminTemp1 },
          { id: 'TrayCellminTemp2', data: data.trayCellminTemp2 },
          { id: 'TrayCellminTemp3', data: data.trayCellminTemp3 },
          { id: 'TrayCellminTemp4', data: data.trayCellminTemp4 },
          { id: 'TrayCellminTemp5', data: data.trayCellminTemp5 },
          { id: 'TrayCellminTemp6', data: data.trayCellminTemp6 },
          { id: 'TrayCellminTemp7', data: data.trayCellminTemp7 },
          { id: 'TrayCellminTemp8', data: data.trayCellminTemp8 },
          { id: 'TrayCellminTemp9', data: data.trayCellminTemp9 },
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
