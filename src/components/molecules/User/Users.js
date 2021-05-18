import React from 'react';
import { UserWrapper, StyledUserName, StyledIcons } from './User.style';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as FacebookIcon } from 'assets/svg/facebook.svg';
import { UsersList } from 'data/UsersList';
export const Users = ({ isOnline }) => {
  return (
    <>
      {UsersList.map(({ name, secondName, image, isOnline = false }) => (
        <UserWrapper isOnline={isOnline} key={name}>
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
