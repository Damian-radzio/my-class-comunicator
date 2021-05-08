import styled from 'styled-components';

export const NavWrapper = styled.section`
  max-width: 400px;
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 2px solid ${({ theme }) => theme.colors.grey};
`;
export const NavLinksWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  & button {
    margin: 20px;
  }
`;
