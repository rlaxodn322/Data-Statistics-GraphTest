// import { Button, Input } from 'antd';
import styled from '@emotion/styled';
import Head from 'next/head';

const Page = styled.section`
  // display: inline-flex;

  /* display: flex;
  justify-content: space-between; */
  width: 300px;
  margin: 0 auto;
  margin-top: 30px;
  /* justify-content: center; */
`;
const PhoneContainer = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
`;
const MyPage = () => {
  return (
    <>
      <Head>
        <title>TigerHouse</title>
        <meta name="description" content="Service" />
      </Head>
      <Page>
        <PhoneContainer>
          <h4 style={{ width: '75%', marginTop: '15px', marginRight: '10px' }}>정홍래(인라인 스케이트)</h4>
          <div style={{ marginTop: '0px', width: '25%', display: 'flex', justifyContent: 'space-between' }}>
            <a href="tel:01080092109">
              <img style={{ width: '25px' }} src="/images/phone-svgrepo-com (1).svg" alt="전화" />
            </a>
            <a href="sms:01080092109">
              <img style={{ width: '25px' }} src="/images/comment-message-svgrepo-com (1).svg" alt="문자" />
            </a>
          </div>
        </PhoneContainer>
      </Page>
    </>
  );
};

export default MyPage;
