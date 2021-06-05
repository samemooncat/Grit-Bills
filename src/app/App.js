import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../store/store';
import Login from '../views/login/index';
import Dashboard from '../views/dashboard';
import PageNotFound from '../views/pageNotFound';

import theme from '../utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login/" component={Login} />
              <Route path="/dashboard/" component={Dashboard} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
