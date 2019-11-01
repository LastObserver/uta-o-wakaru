import axios from 'axios';
import { Middleware, AnyAction } from 'redux';
import { IApiOptions } from '../typings/api';

export function apiMiddleware(options: IApiOptions): Middleware {
  return ({ dispatch }) => next => (action: AnyAction) => {
    if (!action.meta || !action.meta.request || action.isNodeApi) {
      return next(action);
    }

    const { request } = action.meta;
    const [SUCCESS = options.defaultSuccessAction, ERROR = options.defaultErrorAction] = action.actions;

    next(action);

    return axios.request({
      ...request,
    }).then(
      (response) => {
        dispatch({
          ...action.meta,
          payload: response,
          type: SUCCESS,
        });
      },
      (error) => {
        dispatch({
          ...action.meta,
          payload: error,
          type: ERROR,
        });
      }
    );
  };
}
