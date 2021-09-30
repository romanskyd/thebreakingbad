/* eslint-disable no-underscore-dangle */
import endpoints from '../endpoints';

const axios = require('axios');

class BaseHttpService {
  constructor(key = null) {
    this.__key = key || '';
  }

  static _http() {
    return axios;
  }

  static _endpoints(key = null) {
    if (key) {
      return endpoints[key] || {};
    }
    return {};
  }

  static get(url, params, successCallback, errorCallback) {
    return BaseHttpService._http().get(url, params).then(successCallback).catch(errorCallback);
  }

  static post(url, data, successCallback, errorCallback) {
    return BaseHttpService._http().post(url, data).then(successCallback).catch(errorCallback);
  }

  static put(url, data, successCallback, errorCallback) {
    return BaseHttpService._http().put(url, data).then(successCallback).catch(errorCallback);
  }

  static patch(url, data, successCallback, errorCallback) {
    return BaseHttpService._http().patch(url, data).then(successCallback).catch(errorCallback);
  }

  static deleteWithData(url, data, successCallback, errorCallback) {
    return BaseHttpService._http().delete(url, { body: data })
      .then(successCallback).catch(errorCallback);
  }

  static delete(url, successCallback, errorCallback) {
    return BaseHttpService._http().delete(url, {}).then(successCallback).catch(errorCallback);
  }
}

export default BaseHttpService;
