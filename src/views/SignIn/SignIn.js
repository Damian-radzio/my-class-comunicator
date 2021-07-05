import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Dashboard } from 'views/Dashboard/Dashboard';
import { LoginButton } from './SignIn.style';
export const SignIn = () => {
  const [logged, setLogged] = useState(false);
  const login = () => {
    fetch(
      'https://graph.facebook.com/v11.0/me?fields=id%2Cname&access_token=EAAFqnKe7B6ABAA4iO2GcCStqxYkskzITyIFUZCBEUSM5dazBV9PgLzfKAN6JTCqZAOMlhqgBRZCniJXVcEgzX4x7r8KZA2NINGeVMVjdpiwKzZAf61lkdHknxOg4MTS01yvS7tjS6emfZC8nhm9Pv8vfwfwg9JoEfcRFNc4JI02FGeYPJeORncZAlDVEEj9JqcAMLsZARkybaff1LPtqu8AY'
    )
      .then((response) => response.json)
      .then((data) => console.log(data));
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
