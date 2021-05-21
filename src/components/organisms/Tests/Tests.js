import {
  ElementWrapper,
  ItemsWrapper,
  StyledInfo,
} from 'assets/styles/ComponentStyles/Components.style';
import { Head } from 'components/atoms/Head/Head';
import { ArticleHead } from 'components/molecules/NewsArticle/NewsArticle.style';
import { InfoWrapper } from './Tests.style';
import React from 'react';

export const Tests = () => {
  return (
    <ItemsWrapper>
      <ElementWrapper>
        <ArticleHead>Chemia</ArticleHead>
        <InfoWrapper>
          <div>
            <p>data: 21.09.2021</p>
            <p>dział: Budowa atomu</p>
          </div>
          <StyledInfo>
            lorem ipsum dolor sit amet consecteur ble bla lorem ipsum dolor sit
            ammmmetn
          </StyledInfo>
        </InfoWrapper>
      </ElementWrapper>
    </ItemsWrapper>
  );
};
