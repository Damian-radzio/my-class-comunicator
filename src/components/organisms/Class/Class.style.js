import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  height: 85vh;
  min-width: 450px;
  margin: 7.5vh auto;
  border-radius: 20px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 0 10px 3px ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  h2 {
    width: 100%;
    text-align: center;
    padding: 30px 0;
  }
  animation: show 0.3s ease-out both;
`;
export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 500px;
  height: 90%;
  overflow-y: scroll;
  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.creameWhite};
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.grey};
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
  }
`;
