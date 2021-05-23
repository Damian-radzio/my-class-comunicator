import { DateItem } from 'components/atoms/Date/DateItem';
import { Head, HeadWrapper } from 'components/atoms/Head/Head';
import { HomeItems } from 'components/molecules/HomeItems/HomeItems';
import React from 'react';
export const Home = (props) => {
  return (
    <>
      <HeadWrapper>
        <Head>Welome home😉</Head>
        <Head>
          <DateItem />
        </Head>
      </HeadWrapper>
      <HomeItems />
    </>
  );
};
