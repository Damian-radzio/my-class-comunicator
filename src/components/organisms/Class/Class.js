import { Head } from 'components/atoms/Head/Head';
import { Users } from 'components/molecules/User/Users';
import React from 'react';
import { Wrapper, UsersWrapper } from './Class.style';
export const Class = () => {
  return (
    <Wrapper>
      <Head>search for your classmates</Head>
      <UsersWrapper>
        <Users />
      </UsersWrapper>
    </Wrapper>
  );
};
