import { TestItem } from 'components/molecules/TestItem/TestItem';
import { ItemsWrapper } from 'assets/styles/ComponentStyles/Components.style';
import React, { useState, useEffect } from 'react';
import { ApiCall } from 'data/ApiCall';

export const Tests = () => {
  const [testArticles, setTestArticles] = useState([]);

  useEffect(() => {
    ApiCall(null, null, setTestArticles);
  }, []);

  return (
    <ItemsWrapper>
      <TestItem testArticles={testArticles} />
    </ItemsWrapper>
  );
};
