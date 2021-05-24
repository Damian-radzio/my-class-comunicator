import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './Dashboard/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './Root.style';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Router>
          <Navigation />
          <Dashboard />
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
