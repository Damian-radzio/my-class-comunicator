import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './Dashboard/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './Root.style';
import { FormField } from 'components/atoms/FormField/FormField';
import { Button } from 'components/atoms/button/Button';
const AuthenticatedApp = () => {
  return (
    <Router>
      <Navigation />
      <Dashboard />
    </Router>
  );
};
const UnauthenticatedApp = () => {
  return (
    <form
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <FormField name="login" id="login" placeholder="login" type="text" />
      <FormField
        name="password"
        id="password"
        placeholder="password"
        type="password"
      />
      <Button>Sign in</Button>
    </form>
  );
};
const Root = () => {
  const user = null;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Wrapper>
    </ThemeProvider>
  );
};

export default Root;
