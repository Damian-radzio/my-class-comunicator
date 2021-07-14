import { StyledInfoSection, Wrapper } from './HomeItems.style';
import { LessonsPlan } from 'data/LessonPlan/LessonPlan';
import React from 'react';
const date = new Date().getDay();

export const HomeItems = () => {
  return (
    <Wrapper>
      <StyledInfoSection>
        {LessonsPlan.map(({ day, start }) => (
          <p>
            {day === date ? (
              <p>
                {' '}
                you start your lessons at:<span>{start}</span>
              </p>
            ) : null}
          </p>
        ))}
      </StyledInfoSection>
      <StyledInfoSection>
        {LessonsPlan.map(({ day, amount }) => (
          <p>
            {day === date ? (
              <p>
                you have <span>{amount}</span> lessons today
              </p>
            ) : null}
          </p>
        ))}
      </StyledInfoSection>

      <StyledInfoSection>
        {LessonsPlan.map(({ day, end }) => (
          <p>
            {day === date ? (
              <p>
                you finish your lessons at:<span>{end}</span>
              </p>
            ) : null}
          </p>
        ))}
      </StyledInfoSection>
    </Wrapper>
  );
};
