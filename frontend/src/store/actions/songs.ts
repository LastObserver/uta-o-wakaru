export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAIL = 'FETCH_ARTISTS_FAIL';


export function getArtists() {
  return {
    type: FETCH_ARTISTS,
    meta: {
      request: {
        url: '/api/artists',
        method: 'GET',
      }
    },
    actions: [FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAIL],
  }
}