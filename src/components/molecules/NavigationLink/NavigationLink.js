import React from 'react';
import { Button } from 'components/atoms/button/Button';

export const NavigationLink = () => {
  const links = ['class', 'news', 'homework', 'tests'];
  return (
    <>
      {links.map((link) => (
        <Button>{link}</Button>
      ))}
    </>
  );
};
