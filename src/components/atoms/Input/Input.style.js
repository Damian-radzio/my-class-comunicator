import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 8px 35px;
  border: none;
  box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  margin-right: 7%;
  &:focus {
    box-shadow: 0 0 6px 1px ${({ theme }) => theme.colors.lightBlue};
  }
`;
