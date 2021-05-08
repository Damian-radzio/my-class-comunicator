import styled from 'styled-components';

export const NavWrapper = styled.section`
  max-width: 400px;
  min-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 2px solid ${({ theme }) => theme.colors.grey};
`;
export const NavLinksWrapper = styled.div`
  position: relative;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  & button {
    margin: 20px 0;
  }
  &::after {
    content: '';
    position: absolute;
    left: -15%;
    bottom: -10px;
    width: 130%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
