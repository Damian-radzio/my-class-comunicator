import React, { useState, useEffect } from 'react';
import { Head } from 'components/atoms/Head/Head';
import { HeadWrapper, Wrapper, Articles } from './News.style';
import { NewsArticle } from 'components/molecules/NewsArticle/NewsArticle';
import { Input } from 'components/atoms/Input/Input';
import { ApiCall } from 'data/ApiCall';

export const News = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    ApiCall(setArticles);
  }, []);
  return (
    <Wrapper>
      <HeadWrapper>
        <Head>Classmates news</Head>
        <Input articles={articles} setArticles={setArticles} />
      </HeadWrapper>
      <Articles>
        <NewsArticle articles={articles} />
      </Articles>
    </Wrapper>
  );
};

export default News;
