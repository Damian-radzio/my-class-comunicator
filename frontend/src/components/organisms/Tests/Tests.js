import { TestItem } from 'components/molecules/TestItem/TestItem';
import { ItemsWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Head, HeadWrapper } from 'components/atoms/Head/Head';
import React, { useState, useEffect } from 'react';
import { ApiCall } from 'data/ApiCall';
import { Wrapper } from 'components/organisms/news/News.style';

export const Tests = () => {
  const [testArticles, setTestArticles] = useState([]);

  useEffect(() => {
    ApiCall(null, null, setTestArticles);
  }, []);

  return (
    <Wrapper>
      <HeadWrapper>
        <Head>Your tests</Head>
      </HeadWrapper>
      <ItemsWrapper>
        <TestItem testArticles={testArticles} />
      </ItemsWrapper>
    </Wrapper>
  );
};
