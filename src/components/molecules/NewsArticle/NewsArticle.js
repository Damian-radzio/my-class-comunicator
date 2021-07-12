import React from 'react';
import { Button } from 'components/atoms/button/Button';
import { ArticleHead, StyledArticle } from './NewsArticle.style';
import { ElementWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Head } from 'components/atoms/Head/Head';
import { ApiCall } from 'data/ApiCall';

export const NewsArticle = ({ articles, setArticles }) => {
  const showNews = (e) => {
    const selectedNews = {
      title: e.target.parentNode.children[0].firstChild.textContent,
      date: e.target.parentNode.children[0].lastChild.textContent,
      content: e.target.parentNode.children[1].textContent,
      image: null,
    };
    setArticles([selectedNews]);
  };
  const backToPreviousView = () => {
    ApiCall(setArticles, null, null);
  };
  return (
    <>
      {articles ? (
        articles.length > 1 ? (
          articles.map(({ title, date, content, image = null }) => (
            <ElementWrapper key={title}>
              <ArticleHead>
                {title} <span>{date}</span>
              </ArticleHead>

              <StyledArticle>
                {content}
                {image ? <img src={image.url} alt="img" /> : null}
              </StyledArticle>
              {content.length < 250 ? null : (
                <Button onClick={showNews}>więcej...</Button>
              )}
            </ElementWrapper>
          ))
        ) : (
          articles.map(({ title, date, content, image = null }) => (
            <>
              <ElementWrapper key={title} isBig>
                <Button className="back" onClick={backToPreviousView}>
                  back
                </Button>
                <ArticleHead>
                  {title} <span>{date}</span>
                </ArticleHead>

                <StyledArticle isBig>
                  {content}
                  {image ? <img src={image.url} alt="img" /> : null}
                </StyledArticle>
              </ElementWrapper>
            </>
          ))
        )
      ) : (
        <Head>Loading...</Head>
      )}
    </>
  );
};
