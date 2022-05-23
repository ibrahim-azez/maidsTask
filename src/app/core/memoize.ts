import * as memoizee from 'memoizee';

export function Memoize(config?: any) {
  return function (target: any, key: any, descriptor: any) {
    const oldFunction = descriptor.value;
    const newFunction = memoizee(oldFunction, config);
    descriptor.value = function () {
      return newFunction.apply(this, arguments);
    };
  };
}
