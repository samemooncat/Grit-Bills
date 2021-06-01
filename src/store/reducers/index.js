import { combineReducers } from 'redux';
import { SignInReducer } from './signin';

export default combineReducers({ signIn: SignInReducer });
