import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Dashboard } from 'views/Dashboard/Dashboard';
import { LoginButton } from './SignIn.style';
export const SignIn = () => {
  const [logged, setLogged] = useState(false);
  const login = () => {
    setLogged(true);
  };
  return (
    <>
      {logged === true ? (
        <>
          <Navigation />
          <Dashboard />
        </>
      ) : (
        <LoginButton onClick={login}>Zaloguj się przez Facebook</LoginButton>
      )}
    </>
  );
};
