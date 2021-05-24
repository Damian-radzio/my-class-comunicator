import React from 'react';
import { Button } from 'components/atoms/button/Button';
import { NavLink } from 'react-router-dom';
export const NavigationLink = (e) => {
  const links = ['home', 'class', 'news', 'homework', 'tests'];

  return (
    <>
      {links.map((link) => (
        <div key={link}>
          <NavLink activeClassName="active-link" to={`/${link}`}>
            <Button className={link}>{link}</Button>
          </NavLink>
        </div>
      ))}
    </>
  );
};
