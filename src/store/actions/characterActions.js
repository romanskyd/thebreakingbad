import CharactersService from '../../services/characters.service';

export const loadCharacters = (limit) => (dispatch, getState) => {
  return new Promise((resolve) => {
    const { characters } = getState();
    if (characters.isEnd) {
      return;
    }
    dispatch({ type: 'LOADING_START' });
    CharactersService.getList(
      { limit, offset: characters.offset },
      (data) => {
        if (data.data.length < limit) {
          dispatch({ type: 'STOP_LOADING_CHARACTERS' });
        }
        dispatch({ type: 'SET_CHARACTERS', payload: { items: data.data, offset: characters.offset + limit }});
        dispatch({ type: 'LOADING_END' });
        resolve()
      },
      (error) => {
        console.error('error', error);
        dispatch({ type: 'LOADING_END' });
      },
    );
  })
};

export const test = 5;
