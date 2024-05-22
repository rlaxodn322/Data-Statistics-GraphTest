import React from 'react';
import { Line } from '@nivo/line';

interface GraphDataItem {
  x: string; // 혹은 Date, 데이터의 형식에 따라
  y: number;
}

interface GraphProps {
  data: { [key: string]: GraphDataItem[] };
  title: string;
}

const Graph: React.FC<GraphProps> = ({ data, title }) => {
  const formattedData = Object.keys(data).map((key) => ({ id: key, data: data[key] }));
  const isEmptyData = Object.values(data).every((item) => item.length === 0);

  // 데이터가 비어있으면 null 반환
  if (isEmptyData) {
    return null;
  }
  return (
    <div>
      <h2>{title}</h2>
      <Line
        width={900}
        height={400}
        data={formattedData}
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
          tickValues: 'every 24 hours',
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

export default Graph;
