import styled from 'styled-components';

export const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 15px;
`;
export const StyledSubsection = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 30px;
`;
export const StyledInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: lighter;
  margin-top: 5px;
  display: block;
`;
