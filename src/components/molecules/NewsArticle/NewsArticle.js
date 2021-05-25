import React from 'react';
import { Button } from 'components/atoms/button/Button';
import { ArticleHead, StyledArticle } from './NewsArticle.style';
import { ElementWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Head } from 'components/atoms/Head/Head';

export const NewsArticle = ({ articles }) => {
  return (
    <>
      {articles.length >= 1 ? (
        articles.map(({ title, date, content, image = null }) => (
          <ElementWrapper key={title}>
            <ArticleHead>
              {title} <span>{date}</span>
            </ArticleHead>

            <StyledArticle>
              <p className="max-lines">{content}</p>

              {image ? <img src={image.url} alt="img" /> : null}
            </StyledArticle>
            {content.length < 250 ? null : <Button>więcej...</Button>}
          </ElementWrapper>
        ))
      ) : (
        <Head>loading...</Head>
      )}
    </>
  );
};
