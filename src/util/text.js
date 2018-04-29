import {
  always, concat, converge, flip, join, nthArg, pipe, replace, times
} from 'ramda';

const arg0 = nthArg(0);
const arg1 = nthArg(1);
const arg2 = nthArg(2);

export const prefix  = concat;
export const postfix = flip(concat);

export const surround = converge(concat, [
  arg0,
  converge(postfix, [ arg1, arg2 ])
]);

export const bookend  = converge(surround, [ arg0, arg0, arg1 ]);

export const repeat = converge(join(''), [
  converge(times, [ pipe(arg0, always), arg1 ])
]);

export const underlay = converge(concat, [ pipe(arg1, postfix('\n')), arg0 ]);
export const unwrap   = replace(/\n/g, ' ');

