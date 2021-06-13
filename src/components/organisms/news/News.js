import React, { useState, useEffect } from 'react';
import { Head, HeadWrapper } from 'components/atoms/Head/Head';
import { ItemsWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Wrapper } from './News.style';
import { NewsArticle } from 'components/molecules/NewsArticle/NewsArticle';
import { Input } from 'components/atoms/Input/Input';
import { ApiCall } from 'data/ApiCall';

export const News = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    ApiCall(setArticles, null, null);
  }, []);
  return (
    <Wrapper>
      <HeadWrapper>
        <Head>Classmates news</Head>
        <Input articles={articles} setArticles={setArticles} />
      </HeadWrapper>
      <ItemsWrapper>
        <NewsArticle articles={articles} setArticles={setArticles} />
      </ItemsWrapper>
    </Wrapper>
  );
};
