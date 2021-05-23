import { Head, HeadWrapper } from 'components/atoms/Head/Head';
import { Users } from 'components/molecules/User/Users';
import React from 'react';
import { Wrapper, UsersWrapper } from './Class.style';
export const Class = () => {
  return (
    <>
      <HeadWrapper>
        <Head>Search for your classmates</Head>
      </HeadWrapper>
      <Wrapper>
        <UsersWrapper>
          <Users />
        </UsersWrapper>
      </Wrapper>
    </>
  );
};
