import {callAllEndPointsFn} from '../service/restApi';

export const rootResolver = {
  result: () => {
    return callAllEndPointsFn();
  }
}
