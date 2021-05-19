import styled from 'styled-components';

export const Head = styled.h2`
  width: 40%;
  text-align: center;
  left: 30px;
  top: 20px;
  padding: 5px 30px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const HeadWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;
