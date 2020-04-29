import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import Button from '../components/Button/Button.mdx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Button} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
