import { ItemsWrapper } from 'assets/styles/ComponentStyles/Components.style';
import { Head, HeadWrapper } from 'components/atoms/Head/Head';
import { HomeworkItem } from 'components/molecules/HomeworkItem/HomeworkItem';
import { ApiCall } from 'data/NewsApiCall';
import React, { useState, useEffect } from 'react';

export const Homework = () => {
  const [homeworks, setHomeworks] = useState([]);
  useEffect(() => {
    ApiCall(null, setHomeworks);
  }, []);
  return (
    <>
      <HeadWrapper>
        <Head>Your homeworks</Head>
      </HeadWrapper>
      <ItemsWrapper>
        <HomeworkItem homeworks={homeworks} />
      </ItemsWrapper>
    </>
  );
};
