import styled from 'styled-components';

export const NavWrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  min-width: 400px;
  max-width: 420px;
  height: 10vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.creameWhite};
  border-right: 2px solid ${({ theme }) => theme.colors.grey};
  @media (max-width: 1024px) {
    position: static;
    min-width: 100%;
    max-width: 100%;
    border-right: none;
  }
`;
export const NavLinksWrapper = styled.div`
  position: relative;
  width: 65%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  outline: none;
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

  .active-link button {
    outline: none;
    box-shadow: 0px 0px 8px 1px ${({ theme }) => theme.colors.lightBlue};
  }
  @media (max-width: 1024px) {
    width: 85%;
    flex-direction: row;
  }
  @media (max-width: 300px) {
    width: 98%;
  }
`;
