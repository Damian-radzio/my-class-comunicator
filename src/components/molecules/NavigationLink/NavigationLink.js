import React, { useEffect, useState } from 'react';
import { Button } from 'components/atoms/button/Button';
import { NavLink } from 'react-router-dom';
import News from 'assets/svg/News.png';
import Home from 'assets/svg/Home.png';
import Homework from 'assets/svg/Homework.png';
import Tests from 'assets/svg/Test.png';
export const NavigationLink = (e) => {
  const mobileLinks = [
    { img: Home, id: 'Home' },
    { img: News, id: 'News' },
    { img: Homework, id: 'Homework' },
    { img: Tests, id: 'Tests' },
  ];
  const desktopLinks = ['Home', 'News', 'Homework', 'Tests'];
  const [Links, UseLinks] = useState(mobileLinks);
  const changeLinks = () => {
    if (document.body.clientWidth > 1024) {
      UseLinks(desktopLinks);
    } else {
      UseLinks(mobileLinks);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', changeLinks);
  });
  return (
    <>
      {document.body.clientWidth > 1024
        ? Links.map((link) =>
            link.length < 12 ? (
              <div key={link}>
                <NavLink activeClassName="active-link" to={`/${link}`}>
                  <Button className={link}>{link}</Button>
                </NavLink>
              </div>
            ) : (
              UseLinks(['Home', 'News', 'Homework', 'Tests'])
            )
          )
        : Links.map(({ img, id }) => (
            <div key={id}>
              <NavLink activeClassName="active-link" to={id}>
                <Button isMobile className={id}>
                  <img src={img} alt={id} />
                </Button>
              </NavLink>
            </div>
          ))}
    </>
  );
};
