import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { News } from 'components/organisms/news/News';
import styled from 'styled-components';
import { Homework } from 'components/organisms/Homework/Homework';
import { Tests } from 'components/organisms/Tests/Tests';
import { Home } from 'components/organisms/Home/Home';

const Wrapper = styled.div`
  margin-left: 420px;
  width: 80%;
`;
export const Dashboard = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/homework">
          <Homework />
        </Route>
        <Route path="/tests">
          <Tests />
        </Route>
      </Switch>
    </Wrapper>
  );
};
