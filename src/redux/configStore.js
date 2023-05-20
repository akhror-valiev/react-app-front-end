import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { greetingsReducer } from './action_reducers';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
