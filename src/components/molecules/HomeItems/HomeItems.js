import { StyledInfoSection, Wrapper } from './HomeItems.style';
import React from 'react';

export const HomeItems = () => {
  return (
    <Wrapper>
      <StyledInfoSection>
        <p>
          you start your lessons at: <span>8:45</span>
        </p>
      </StyledInfoSection>
      <StyledInfoSection>
        <p>
          you have <span>7</span> lessons today
        </p>
      </StyledInfoSection>

      <StyledInfoSection>
        <p>
          You finish your lessons at:<span>15:50</span>
        </p>
      </StyledInfoSection>
    </Wrapper>
  );
};
