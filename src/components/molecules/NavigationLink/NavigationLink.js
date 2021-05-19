import React from 'react';
import { Button } from 'components/atoms/button/Button';
import { NavLink } from 'react-router-dom';
export const NavigationLink = () => {
  const links = ['class', 'news', 'homework', 'tests'];

  return (
    <>
      {links.map((link) => (
        <div key={link}>
          <NavLink to={`/${link}`}>
            <Button>{link}</Button>
          </NavLink>
        </div>
      ))}
    </>
  );
};
