import debug from 'debug';
import { isArray } from 'util/predicates';

const METHODS = [
  ['log', 'debug'],
  'info',
  'warn',
  'error'
];

export default function createDebug (namespace) {
  return METHODS.
    map(arg => {
      let method, name;

      if (isArray(arg)) {
        [method, name] = arg;
      }
      else {
        method = name = arg;
      }

      return { [`${method}`]: debug(`${namespace}:${name}`) };
    }).
    reduce(Object.assign, {});
}

export const app    = createDebug('app');
export const server = createDebug('server');
export const test   = createDebug('test');
