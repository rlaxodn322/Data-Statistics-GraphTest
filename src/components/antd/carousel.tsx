import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',

  margin: 0,
  padding: 0,
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img style={{ width: '100%', height: '350px' }} src="images/1.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/3.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/4.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/5.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/6.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/7.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/8.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/9.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/10.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {' '}
        <img style={{ width: '100%', height: '350px' }} src="images/2.jpg" alt="" />
      </h3>
    </div>
  </Carousel>
);

export default App;
