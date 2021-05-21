import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Class } from 'components/organisms/Class/Class';
import News from 'components/organisms/news/News';
import styled from 'styled-components';
import { Tests } from 'components/organisms/Tests/Tests';

const Wrapper = styled.div`
  margin-left: 420px;
  width: 80%;
`;
export const Dashboard = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/class">
          <Class />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/homework">
          <div>homework</div>
        </Route>
        <Route path="/tests">
          <Tests />
        </Route>
      </Switch>
    </Wrapper>
  );
};
