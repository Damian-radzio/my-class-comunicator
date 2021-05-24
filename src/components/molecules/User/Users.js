import React from 'react';
import { UserWrapper, StyledUserName, StyledIcons } from './User.style';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as FacebookIcon } from 'assets/svg/facebook.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
export const Users = ({ isOnline }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/users').then(({ data }) => setUsers(data));
  }, []);
  return (
    <>
      {console.log(users)}
      {users.map(({ name, secondName, image, isOnline = false }) => (
        <UserWrapper isOnline={isOnline} key={secondName}>
          <img src={image} alt="random" />
          <StyledUserName className="userName">
            <p>{name}</p>
            <p>{secondName}</p>
          </StyledUserName>
          <StyledIcons className="styledIcon">
            <FacebookIcon />
            <ChatIcon />
          </StyledIcons>
        </UserWrapper>
      ))}
    </>
  );
};
