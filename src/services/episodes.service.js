import BaseCrudService from './baseCrud.service';

class EpisodesService extends BaseCrudService {
  constructor() {
    if (EpisodesService.instance instanceof EpisodesService) {
      return EpisodesService.instance;
    }
    super('episodes');
    Object.freeze(this);
    EpisodesService.instance = this;
    return EpisodesService.instance;
  }

  getRandom(data = {}, successCallback, errorCallback) {
    return this.constructor.get(this.endpoints().random, data, successCallback, errorCallback);
  }
}

export default new EpisodesService();
