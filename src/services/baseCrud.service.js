/* eslint-disable no-param-reassign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import _BaseHttpService from './baseHttp.service';

class BaseCrudService extends _BaseHttpService {
  constructor(key = null) {
    super(key);
  }

  endpoints() {
    return this.constructor._endpoints(this.__key);
  }

  create(data, successCallback, errorCallback) {
    return this._checkAuth(
      (data, successCallback, errorCallback) => this.constructor.post(
        this.endpoints().create, data, successCallback, errorCallback,
      ),
      ...arguments,
    );
  }

  update(itemId, data, successCallback, errorCallback) {
    return this._checkAuth(
      (itemId, data, successCallback, errorCallback) => this.constructor.patch(this.endpoints().update.replace('{:id}', itemId), data, successCallback, errorCallback),
      ...arguments,
    );
  }

  getList(params, successCallback, errorCallback) {
    params = params || { sort: '-id', page: 1 };
    const clean = { ...params };
    delete clean.filter;
    return this.constructor.get(
      this.endpoints().list,
      {
        params: Object.assign(clean, {
          filters: JSON.stringify(params.filter),
        }),
      }, successCallback, errorCallback,
    );
  }

  drop(itemId, successCallback, errorCallback) {
    // eslint-disable-next-line no-underscore-dangle
    return this._checkAuth(
      (itemId, successCallback, errorCallback) => this.constructor.delete(this.endpoints().update.replace('{:id}', itemId), successCallback, errorCallback),
      ...arguments,
    );
  }

  item(itemId, successCallback, errorCallback) {
    return this.constructor.get(this.endpoints().get.replace('{:id}', itemId), {}, successCallback, errorCallback);
  }

  structure(itemId, successCallback, errorCallback) {
    return this.constructor.get(this.endpoints().structure.replace('{:id}', itemId), {}, successCallback, errorCallback);
  }

  itemWithParams(itemId, params, successCallback, errorCallback) {
    return this.constructor.get(this.endpoints().get.replace('{:id}', itemId), params, successCallback, errorCallback);
  }
}

export default BaseCrudService;
