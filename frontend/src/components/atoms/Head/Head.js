import styled from 'styled-components';

export const Head = styled.h2`
  width: 40%;
  text-align: center;
  left: 30px;
  top: 20px;
  padding: 5px 30px;
  color: ${({ theme }) => theme.colors.darkGrey};
  @media (max-width: 1024px) {
    width: 100%;
  }
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

  @media (max-width: 1024px) {
    height: 90px;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    h2 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;
