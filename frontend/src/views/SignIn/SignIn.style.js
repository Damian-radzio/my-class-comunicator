import styled from 'styled-components';
export const LoginButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s ease box-shadow;
  border: none;
  &::focus{
    outline: 1px solid green;
  }

  }
`;
