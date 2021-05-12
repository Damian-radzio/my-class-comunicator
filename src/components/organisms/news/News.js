import { Head } from 'components/atoms/Head/Head';
import React from 'react';
import { Wrapper, Articles } from './News.style';
import { NewsArticle } from 'components/molecules/NewsArticle/NewsArticle';
export const News = () => {
  return (
    <Wrapper>
      <Head>Classmates news</Head>
      <Articles>
        <NewsArticle />
      </Articles>
    </Wrapper>
  );
};

export default News;
