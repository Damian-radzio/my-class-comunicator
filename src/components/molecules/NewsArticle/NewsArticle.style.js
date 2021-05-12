import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  flex: 1 0 21%;
  min-width: 400px;
  max-width: 450px;
  min-height: 250px;
  max-height: 300px;
  margin: 20px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  button {
    margin-top: 30px;
  }
`;
export const ArticleHead = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  span {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
export const StyledArticle = styled.article`
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
