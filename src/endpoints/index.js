/* eslint-disable no-param-reassign */
const endpoints = {
  characters: {
    list: 'characters',
    get: 'characters/{:id}',
    random: 'character/random',
  },
  quotes: {
    list: 'quotes',
    random: 'quote/random',
  },
  episodes: {
    list: 'episodes',
  },
};

const appendBase = (list) => {
  Object.keys(list).forEach((key) => {
    if (typeof list[key] === 'object') {
      appendBase(list[key]);
    } else if (list[key].charAt(0) !== '/') {
      list[key] = process.env.REACT_APP_API_BASE_URL + list[key];
    } else {
      list[key] = process.env.REACT_APP_BASE_URL + list[key];
    }
  });
};

appendBase(endpoints);

export default endpoints;
