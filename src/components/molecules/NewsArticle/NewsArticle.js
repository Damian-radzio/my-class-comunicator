import React, { useState, useEffect } from 'react';
import { Button } from 'components/atoms/button/Button';
import { ArticleHead, StyledArticle, Wrapper } from './NewsArticle.style';
import axios from 'axios';

export const NewsArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allArticles{
            id
            title
            date
            content
            image{
              url
            }
          }
        }`,
        },
        {
          headers: {
            authorization: `Bearer: ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {articles.map(({ title, date, content, image = null }) => (
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
      ))}
    </>
  );
};
