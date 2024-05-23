import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Head from 'next/head';
import MainLayout from '../layouts';
import styled from '@emotion/styled';

import { Button } from 'antd';

import Link from 'next/link';
const Page = styled.section`
  text-align: center;
  margin: 0 auto;

  //font-weight: 200;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>B&FCS</title>
      </Head>
      <Page>
        <Link href={'/serach/0/serachtest'}>
          <Button>조회 페이지</Button>
        </Link>
        <Link href={'/graph/0/graph'}>
          <Button>그래프 페이지</Button>
        </Link>
        {/* <Link href={'/graph/0/graph'}>
          <Button>2호차 그래프 페이지</Button>
        </Link>
        <Link href={'/graph/0/graph'}>
          <Button>3호차 그래프 페이지</Button>
        </Link> */}
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
