import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface Graph3Props {
  data: {
    trayCellTemp1: GraphDataItem[];
    trayCellTemp2: GraphDataItem[];
    trayCellTemp3: GraphDataItem[];
    trayCellTemp4: GraphDataItem[];
    trayCellTemp5: GraphDataItem[];
    trayCellTemp6: GraphDataItem[];
    trayCellTemp7: GraphDataItem[];
    trayCellTemp8: GraphDataItem[];
    trayCellTemp9: GraphDataItem[];
  };
}

const Graph3: React.FC<Graph3Props> = ({ data }) => {
  return (
    <div>
      <h2>Tray Cell Temp 평균 데이터 그래프</h2>
      <Line
        width={800}
        height={400}
        data={[
          { id: 'TrayCellTemp1', data: data.trayCellTemp1 },
          { id: 'TrayCellTemp2', data: data.trayCellTemp2 },
          { id: 'TrayCellTemp3', data: data.trayCellTemp3 },
          { id: 'TrayCellTemp4', data: data.trayCellTemp4 },
          { id: 'TrayCellTemp5', data: data.trayCellTemp5 },
          { id: 'TrayCellTemp6', data: data.trayCellTemp6 },
          { id: 'TrayCellTemp7', data: data.trayCellTemp7 },
          { id: 'TrayCellTemp8', data: data.trayCellTemp8 },
          { id: 'TrayCellTemp9', data: data.trayCellTemp9 },
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
