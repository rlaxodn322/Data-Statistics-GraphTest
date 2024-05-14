import type { Dayjs } from 'dayjs';
import React from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import dayjs from 'dayjs';

interface GlobalToken {
  borderRadiusLG: number; // string에서 number로 변경
  colorBorderSecondary: string;
}
// theme.useToken()에서 반환된 객체의 형식을 수정하여 GlobalToken 인터페이스를 사용합니다.
const App: React.FC = () => {
  const { token }: { token: GlobalToken } = theme.useToken();

  const defaultDate = dayjs(new Date(2024, 8, 21));

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} defaultValue={defaultDate} onPanelChange={onPanelChange} />
    </div>
  );
};

export default App;
