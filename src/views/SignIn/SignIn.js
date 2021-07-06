import React, { useState } from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Dashboard } from 'views/Dashboard/Dashboard';
import { LoginButton } from './SignIn.style';
export const SignIn = () => {
  const [logged, setLogged] = useState(false);

  return (
    <>
      {logged === true ? (
        <>
          <Navigation />
          <Dashboard />
        </>
      ) : (
        <LoginButton>Zaloguj się przez Facebook</LoginButton>
      )}
    </>
  );
};
