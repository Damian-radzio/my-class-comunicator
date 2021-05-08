import styled from 'styled-components';

export const Button = styled.button`
  min-width: 220px;
  min-height: 40px;
  border-radius: 30px;
  border: none;
  letter-spacing: 0.8px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease box-shadow;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px 4px ${({ theme }) => theme.colors.grey};
  &:hover {
    box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.lightBlue};
  }
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  }
`;
