import { ISongsState } from '../../typings/songs';
import { AnyAction } from 'redux';
import { FETCH_ARTISTS_SUCCESS } from '../actions/songs';

export const defaultState = {
  artists: [],
}

export function songsReducer(state: ISongsState = defaultState, action: AnyAction): ISongsState {

  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS: {
      const { data } = action.payload;

      return data ? {
        artists: data,
      } : state;
    }
    default:
      return state;
  }

}
