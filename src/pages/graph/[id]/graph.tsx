import React from 'react';
import styled from '@emotion/styled';

import Graph1 from '../../../components/graph/graph1';
import Graph2 from '../../../components/graph/graph2';
import Graph3 from '../../../components/graph/graph3';
const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: 1200px;
  font-size: 12px;
`;

const Home = () => {
  return (
    <Page>
      <Graph1></Graph1>
      <Graph2></Graph2>
      <Graph3></Graph3>
    </Page>
  );
};

export default Home;
