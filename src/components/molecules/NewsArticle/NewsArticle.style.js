import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  flex: 1 0 21%;
  min-width: 400px;
  max-width: 450px;
  min-height: 250px;
  max-height: 300px;
  margin: 20px;
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
export const ArticleHead = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  span {
    min-width: 30%;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  animation: show 0.4s 0.2s ease-out both;
`;
export const StyledArticle = styled.article`
  animation: show 0.4s 0.4s ease-out both;
  @keyframes show {
    from {
      transform: translateX(-11%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  display: flex;
  align-items: start;
  text-align: center;
  padding: 10px 10px;
  max-height: 120px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.darkGrey};
  img {
    margin-left: 10px;
    max-width: 40%;
  }
`;
