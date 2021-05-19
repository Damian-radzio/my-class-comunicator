import { ElementWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Head } from 'components/atoms/Head/Head';
import React from 'react';
import { ArticleHead } from '../NewsArticle/NewsArticle.style';
import {
  StyledContent,
  StyledSubsection,
  StyledInfo,
} from './HomeworkItem.style';

export const HomeworkItem = ({ homeworks }) => {
  return (
    <>
      {homeworks.length >= 1 ? (
        homeworks.map(
          ({ id, subjectName, homeworkInfo, homeworkPage, deadline }) => (
            <ElementWrapper key={id}>
              <ArticleHead>{subjectName}</ArticleHead>
              <StyledContent>
                <StyledSubsection>
                  zadanie
                  <StyledInfo>{homeworkInfo}</StyledInfo>
                </StyledSubsection>
                {homeworkPage ? (
                  <StyledSubsection>
                    strona
                    <StyledInfo>{homeworkPage}</StyledInfo>
                  </StyledSubsection>
                ) : null}
                <StyledSubsection>
                  termin wykonania <StyledInfo>{deadline}</StyledInfo>
                </StyledSubsection>
              </StyledContent>
            </ElementWrapper>
          )
        )
      ) : (
        <Head>loading...</Head>
      )}
    </>
  );
};
