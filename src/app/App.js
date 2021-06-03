import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../store/store';
import Login from '../views/login/index';
import Dashboard from '../views/dashboard';
import PageNotFound from '../views/pageNotFound';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
