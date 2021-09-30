const reducers = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_START':
      return true;
    case 'LOADING_END':
      return false;
    default:
      return state;
  }
};

export default reducers;
