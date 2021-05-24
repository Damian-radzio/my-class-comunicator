import {
  ElementWrapper,
  StyledInfo,
} from 'assets/styles/ComponentStyles/Components.style';
import { Head } from 'components/atoms/Head/Head';
import { ArticleHead } from 'components/molecules/NewsArticle/NewsArticle.style';
import { InfoWrapper } from './TestsItem.style';

export const TestItem = ({ testArticles }) => {
  return (
    <>
      {testArticles.length >= 1 ? (
        testArticles.map(
          ({ id, subject, testType, sectionName, description, date }) => (
            <ElementWrapper key={id}>
              <ArticleHead>{subject}</ArticleHead>
              <InfoWrapper>
                <div>
                  <p>typ: {testType}</p>
                  <p>termin: {date}</p>
                  <p>dział: {sectionName}</p>
                </div>
                <StyledInfo>{description}</StyledInfo>
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
