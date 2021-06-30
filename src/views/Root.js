import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
// import { Navigation } from 'components/organisms/Navigation/Navigation';
// import { Dashboard } from './Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Wrapper } from './Root.style';
import { SignIn } from './SignIn/SignIn';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Router>
          <SignIn />
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
