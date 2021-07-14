import CONFIG from './config';

const API_ENDPOINT = {
  RESTO_LIST: `${CONFIG.BASE_URL}list?api_key=${CONFIG.KEY}`,
  NOW_PLAYING: `${CONFIG.MBASE_URL}movie/now_playing?api_key=${CONFIG.MKEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
