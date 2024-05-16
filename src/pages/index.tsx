import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Head from 'next/head';
import MainLayout from '../layouts';
import styled from '@emotion/styled';
import Graph from '../components/graph';

const Page = styled.section`
  text-align: center;
  margin: 0 auto;
  width: '300px';
  font-weight: 200;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>B&FCS</title>
      </Head>
      <Page>
        <Graph></Graph>
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
