import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { songsReducer } from './reducers/songs';
import { apiMiddleware } from './middleware';
import { ISongsState } from '../typings/songs';

const API_ERROR = 'API_ERROR';
const API_SUCCESS = 'API_SUCCESS';

export interface IStore {
  songs: ISongsState;
}

export const store = () => {
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers<{}>({
      songs: songsReducer,
    }),
    {},
    composeEnhancers(
      applyMiddleware(
        apiMiddleware({
          defaultErrorAction: API_ERROR,
          defaultSuccessAction: API_SUCCESS,
        })
      )
    ),
  )
}