import React from 'react';

export const DateItem = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = `${day}.${month}.${year}`;
  return <div>{fullDate}</div>;
};
