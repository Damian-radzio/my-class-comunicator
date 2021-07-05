import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Dashboard } from 'views/Dashboard/Dashboard';
import { LoginButton } from './SignIn.style';
export const SignIn = () => {
  const [logged, setLogged] = useState(false);
  const login = () => {
    fetch(
      'https://graph.facebook.com/v11.0/me?fields=id%2Cname&access_token=EAAFqnKe7B6ABALoLicMJi5ANo9TMZANLzjvuTgviIYAJY5T3onzh2GrLakhkdZAW12geBjpaDciIWtuIG08opc7ZAORokzxe41qp1PLGhzu6vtC9sZB1EVKnPDAkqHhGrTa5LZAXc9rtXt2LSaWsVCEEtiWeWnRC5LdRIGj4ZBKfA4CBKp1gRI9FS8qxZCMxPJhh6iJEAolrc00uCey5ZByZBzEckT5wQpAvaTY7jSxEFGhyUmYka5Bcl'
    )
      .then((response) => response.json())
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
