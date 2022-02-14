import axios from 'axios';

const URL_API = 'https://mystique-v2-americanas.juno.b2w.io';

const getSearchResult = (search) => axios.get(`${URL_API}/autocomplete?content=${search}&source=nanook`);

export {
  getSearchResult
};
