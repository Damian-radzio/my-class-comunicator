import styled from 'styled-components';

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  margin-top: 5%;
`;
export const ElementWrapper = styled.div`
  overflow: hidden;
  position: relative;
  flex: 1 0 21%;
  min-width: ${({ isBig }) => (isBig ? '650px' : '400px')};
  max-width: ${({ isBig }) => (isBig ? '650px' : '450px')};
  min-height: ${({ isBig }) => (isBig ? '350px' : '250px')};
  max-height: ${({ isBig }) => (isBig ? '400px' : '300px')};
  margin: ${({ isBig }) => (isBig ? '0 20%' : '20px')};
  border-radius: 20px;
  box-shadow: 0 0 10px 3px ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  button {
    margin-top: 30px;
  }
  animation: show 0.4s 0.1s ease-out both;
  @keyframes show {
    from {
      transform: translateX(11%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;
export const StyledInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: lighter;
  margin-top: 5px;
  display: block;
`;
