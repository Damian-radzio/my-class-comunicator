import styled from 'styled-components';

export const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 15px;
`;
export const StyledSubsection = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 30px;
`;
