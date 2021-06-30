import { Button } from 'components/atoms/button/Button';
import styled from 'styled-components';
export const LoginButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
     border: none;
  min-width: 30%;
  padding: 20px 30px;
  border-radius: 30px;
  letter-spacing: 0.8px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease box-shadow;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.facebookBlue};
  box-shadow: 0 0 20px 4px ${({ theme }) => theme.colors.grey};
  &:hover {
    box-shadow: 0 0 10px -2px ${({ theme }) => theme.colors.lightBlue};
  }
  &::focus{
    outline: 1px solid green;
  }
  img {
    width: 15px;
  }
  
  @media(max-width: 360px){
    min-width: 50px;
  }
  @media (max-width: 1024px) {
    min-width: 60px;
    padding: 10px 25px;
  }
  
  }
`;
