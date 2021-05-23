import { TestItem } from 'components/molecules/TestItem/TestItem';
import { ItemsWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Head, HeadWrapper } from 'components/atoms/Head/Head';
import React, { useState, useEffect } from 'react';
import { ApiCall } from 'data/ApiCall';

export const Tests = () => {
  const [testArticles, setTestArticles] = useState([]);

  useEffect(() => {
    ApiCall(null, null, setTestArticles);
  }, []);

  return (
    <>
      <HeadWrapper>
        <Head>Your tests</Head>
      </HeadWrapper>
      <ItemsWrapper>
        <TestItem testArticles={testArticles} />
      </ItemsWrapper>
    </>
  );
};
