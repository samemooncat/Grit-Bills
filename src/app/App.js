import logo from '../logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Login from '../views/login/index';
import { Provider } from 'react-redux';
import store from '../store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
