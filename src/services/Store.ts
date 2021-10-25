import {createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {countReducer} from '../reducers/CountReducer';
import {applyMiddleware, compose} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {PersistConfig, Persistor} from 'redux-persist/es/types';

const persistConfig: PersistConfig<any> = {
  key: 'persistedReducer',
  storage: AsyncStorage,
};

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const {logger} = require('redux-logger');

  middlewares.push(logger);
}

const enhancer = compose(applyMiddleware(...middlewares));
const persistedReducer = persistReducer(persistConfig, countReducer);

export class Store {
  public static readonly instance = createStore(persistedReducer, enhancer);
  public static readonly persist: Persistor = persistStore(Store.instance);
}
