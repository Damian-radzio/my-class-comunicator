import styled from 'styled-components';

export const Head = styled.h2`
  position: absolute;
  left: 30px;
  top: 20px;
  padding: 5px 30px;
  color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;
