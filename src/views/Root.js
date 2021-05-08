import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Button } from '../components/atoms/button/Button';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button>click here</Button>
    </ThemeProvider>
  );
};

export default Root;
