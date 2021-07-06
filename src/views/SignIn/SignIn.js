import React, { useState } from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Dashboard } from 'views/Dashboard/Dashboard';
import { LoginButton } from './SignIn.style';
export const SignIn = () => {
  const [logged, setLogged] = useState(false);
  const login = () => {
    fetch(
      'https://graph.facebook.com/v11.0/me?fields=id%2Cname&access_token=EAAFqnKe7B6ABAEEJWigzvMySNfXhZAXjEEZCFleFXfVzM4te2ZATZB5NRwYbhR8IaQZA2Fo4PhFKZBk0ZCoYqwGvquTT6ZA3ZCEIJzWjVvjygr2ZADUXsigLJDYJDsZBmpR603uYGh7haQfjMdjFBQuu38OZAsq7UVUd4IzD5KZBNjZC3FD9q4HojLrI9Famw0mdWVFuqsyxffid1djuiJFkypHAgM5pq4lTZBZAZAzAZBVQR9EmOZCZAIqWPmwsceS7'
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
