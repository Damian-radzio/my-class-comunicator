import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    height: 75vh;
  }
`;
export const StyledInfoSection = styled.section`
  text-align: center;
  p {
    animation: show 0.4s ease-out both;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 300;
    span {
      animation: show 0.4s 0.2s ease-out both;
      font-size: ${({ theme }) => theme.fontSize.xxl};
      font-weight: 700;
      padding: 20px;
      display: block;
      @media (max-width: 1024px) {
        padding: 8px;
      }
    }
    @media (max-width: 1024px) {
      margin-bottom: 20px;
    }
  }
`;
