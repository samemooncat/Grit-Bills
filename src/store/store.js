import { createStore } from 'redux';
import { REDUX_DEVTOOLS } from '../utils/constants';

import reducers from './reducers';

const store = createStore(reducers, REDUX_DEVTOOLS);

export default store;
