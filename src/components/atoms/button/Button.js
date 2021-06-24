import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  min-width: 220px;
  padding: 10px 30px;
  border-radius: 30px;
  letter-spacing: 0.8px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease box-shadow;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px 4px ${({ theme }) => theme.colors.grey};
  &:hover {
    box-shadow: 0 0 10px -2px ${({ theme }) => theme.colors.lightBlue};
  }
  &::focus{
    outline: 1px solid green;
  }
  img {
    width: 15%;
  }
  }
`;
