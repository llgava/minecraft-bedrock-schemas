import { BlocksEventsResponse } from './BlocksEventsResponse';

export class BlocksEvents {
  public 'namespace:event_name': BlocksEventsResponse;

  constructor() {
    this['namespace:event_name'] = new BlocksEventsResponse();
  }
}
