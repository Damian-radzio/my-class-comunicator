import styled from 'styled-components';

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
  @media (max-width: 1024px) {
    margin: 20px 10px;
  }
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
  padding: ${({ isBig }) => (isBig ? '30px 20px' : '10px 10px')};
  max-height: ${({ isBig }) => (isBig ? '300px' : '120px')};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.darkGrey};
  img {
    margin-left: 10px;
    max-width: 40%;
  }
`;
