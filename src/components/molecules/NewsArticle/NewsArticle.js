import React from 'react';
import { Button } from 'components/atoms/button/Button';
import { ArticleHead, StyledArticle, Wrapper } from './NewsArticle.style';

export const NewsArticle = ({ articles }) => {
  return (
    <>
      {articles.length >= 1 ? (
        articles.map(({ title, date, content, image = null }) => (
          <Wrapper key={title}>
            <ArticleHead>
              {title} <span>{date}</span>
            </ArticleHead>

            <StyledArticle>
              {content}
              {image ? <img src={image.url} alt="img" /> : null}
            </StyledArticle>
            {content.length < 250 ? null : <Button>więcej...</Button>}
          </Wrapper>
        ))
      ) : (
        <h3>loading...</h3>
      )}
    </>
  );
};
