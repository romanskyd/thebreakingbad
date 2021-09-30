import BaseCrudService from './baseCrud.service';

class CharactersService extends BaseCrudService {
  constructor() {
    if (CharactersService.instance instanceof CharactersService) {
      return CharactersService.instance;
    }
    super('characters');
    Object.freeze(this);
    CharactersService.instance = this;
    return CharactersService.instance;
  }

  getRandom(data = {}, successCallback, errorCallback) {
    return this.constructor.get(this.endpoints().random, data, successCallback, errorCallback);
  }
}

export default new CharactersService();
