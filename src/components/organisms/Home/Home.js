import { DateItem } from 'components/atoms/Date/DateItem';
import { Head, HeadWrapper } from 'components/atoms/Head/Head';
import { HomeItems } from 'components/molecules/HomeItems/HomeItems';
import { Wrapper } from 'components/organisms/news/News.style';

import React from 'react';
export const Home = (props) => {
  return (
    <Wrapper>
      <HeadWrapper>
        <Head>Welome home😉</Head>
        <Head>
          <DateItem />
        </Head>
      </HeadWrapper>
      <HomeItems />
    </Wrapper>
  );
};
