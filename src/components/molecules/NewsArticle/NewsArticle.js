import React, { useState, useEffect } from 'react';
import { Button } from 'components/atoms/button/Button';
import { ArticleHead, StyledArticle, Wrapper } from './NewsArticle.style';
import axios from 'axios';
const data = [
  {
    title: 'Jaś staś i inne kurestwo',
    date: '11.05.2021',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,',
  },
  {
    title: 'Jaś staś i inne kurestwo21',
    date: '11.05.2021',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elitaritititititiit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolord, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,',
    image: 'https://picsum.photos/200',
  },
];

const API_TOKEN = 'b23463ac5b52062efe66c390c46404';

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
            authorization: `Bearer: ${API_TOKEN}`,
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
