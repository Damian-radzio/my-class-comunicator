import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
    
}
body{
    background-color: ${({ theme }) => theme.colors.creameWhite};
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
}
*, *::after, *::before{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    
}
input, textarea{
    outline: none;
    resize: none;
    ::focus{
        box-shadow: 0 0 20px -10px red;
    }
}
a, button{
    font-family: 'Roboto', sans-serif;
}
`;
