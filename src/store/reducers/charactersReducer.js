const initialState = {
  items: [],
  offset: 0,
  isEnd: false
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return {
        items: [...state.items, ...action.payload.items],
        offset: action.payload.offset,
        isEnd: state.isEnd
      };
    case 'STOP_LOADING_CHARACTERS':
      return { ...state, isEnd: true }
    default:
      return state;
  }
};

export default charactersReducer;
