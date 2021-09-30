import BaseCrudService from './baseCrud.service';

class QuotesService extends BaseCrudService {
  constructor() {
    if (QuotesService.instance instanceof QuotesService) {
      return QuotesService.instance;
    }
    super('quotes');
    Object.freeze(this);
    QuotesService.instance = this;
    return QuotesService.instance;
  }

  getRandom(data = {}, successCallback, errorCallback) {
    return this.constructor.get(this.endpoints().random, data, successCallback, errorCallback);
  }
}

export default new QuotesService();
