import fetchJson from './utils/fetch-json.js';

const BACKEND_URL = 'https://course-js.javascript.ru';

fetchJson(url)
  .then(data => {
    console.log(data);
  });

export default class ColumnChart {

}
