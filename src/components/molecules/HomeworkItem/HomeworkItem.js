import { ElementWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Head } from 'components/atoms/Head/Head';
import React from 'react';
import { ArticleHead } from '../NewsArticle/NewsArticle.style';
import { StyledContent, StyledSubsection } from './HomeworkItem.style';
import { StyledInfo } from 'assets/styles/ComponentStyles/Components.style';
import { InfoWrapper } from '../TestItem/TestsItem.style';

export const HomeworkItem = ({ homeworks }) => {
  return (
    <>
      {homeworks.length >= 1 ? (
        homeworks.map(
          ({ id, subjectName, homeworkInfo, homeworkPage, deadline }) => (
            <ElementWrapper key={id}>
              <ArticleHead>{subjectName}</ArticleHead>
              <InfoWrapper>
                <div>
                  {homeworkPage ? <p>strona: {homeworkPage}</p> : null}
                  <p>termin: {deadline}</p>
                </div>
                <StyledInfo>{homeworkInfo}</StyledInfo>
              </InfoWrapper>
            </ElementWrapper>
          )
        )
      ) : (
        <Head>loading...</Head>
      )}
    </>
  );
};
