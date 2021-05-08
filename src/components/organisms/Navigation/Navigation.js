import { NavigationLink } from 'components/molecules/NavigationLink/NavigationLink';
import React from 'react';
import { NavWrapper, NavLinksWrapper } from './Navigation.style';
export const Navigation = () => {
  return (
    <NavWrapper>
      <NavLinksWrapper>
        <NavigationLink />
      </NavLinksWrapper>
    </NavWrapper>
  );
};
