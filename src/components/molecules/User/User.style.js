import styled from 'styled-components';

export const UserWrapper = styled.div`
  margin: 20px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 75%;
  border-radius: 20px;
  box-shadow: 0 0 7px 0px
    ${({ isOnline, theme }) =>
      isOnline ? theme.colors.green : theme.colors.red};
      img {
        animation: show 0.4s 0.4s ease-out both;
        margin-right: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      div {
        flex-grow: 2;
      }
 
  }
 
`;
export const StyledUserName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  align-self: center;
  padding: 0 20px;
  width: 40%;
  p:nth-of-type(1) {
    animation: show 0.4s 0.1s ease-out both;
  }
  p:nth-of-type(2) {
    animation: show 0.4s 0.2s ease-out both;
  }
`;
export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  svg {
    cursor: pointer;
    height: auto;
    width: 20%;
    animation: show 0.4s 0.3s ease-out both;
  }
`;
