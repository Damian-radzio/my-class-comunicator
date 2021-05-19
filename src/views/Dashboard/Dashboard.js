import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Class } from 'components/organisms/Class/Class';
import News from 'components/organisms/news/News';
import styled from 'styled-components';
import { Homework } from 'components/organisms/Homework/Homework';

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
          <Homework />
        </Route>
        <Route path="/tests">
          <div>tests</div>
        </Route>
      </Switch>
    </Wrapper>
  );
};
