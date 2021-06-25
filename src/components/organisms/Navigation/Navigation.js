import { NavigationLink } from 'components/molecules/NavigationLink/NavigationLink';
import React from 'react';
import { NavWrapper, NavLinksWrapper } from './Navigation.style';

export const Navigation = () => {
  return (
    <>
      {document.body.clientWidth < 1024 ? (
        <NavWrapper isMobile>
          <NavLinksWrapper isMobile>
            <NavigationLink />
          </NavLinksWrapper>
        </NavWrapper>
      ) : (
        <NavWrapper>
          <NavLinksWrapper>
            <NavigationLink />
          </NavLinksWrapper>
        </NavWrapper>
      )}
    </>
  );
};
