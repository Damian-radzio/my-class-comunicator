import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <p>hej</p>
      </div>
    </ThemeProvider>
  );
};

export default Root;
