import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;
export const HeadWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;
export const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  margin-top: 10%;
`;
