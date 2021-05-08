import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { ThemeProvider } from 'styled-components';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  );
};

export default Root;
