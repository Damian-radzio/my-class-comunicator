import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  height: 75%;
  color: ${({ theme }) => theme.colors.darkGrey};
  & div {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    height: 30%;
    align-self: start;
    & p {
      padding: 3px 0;
    }
  }
`;
