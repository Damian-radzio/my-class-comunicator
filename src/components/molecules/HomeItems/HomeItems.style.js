import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
    }
  }
`;
