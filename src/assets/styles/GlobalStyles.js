import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
    
}
body{
    background-color: ${({ theme }) => theme.colors.creameWhite};
    
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
