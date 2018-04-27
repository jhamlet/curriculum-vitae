import { dirname, sep, relative } from 'path';
import { curryN } from 'ramda';

export const explode = (filepath, memo = []) => {
  const dir = dirname(filepath);
  memo.push(filepath);

  if (dir === sep) {
    memo.push(dir);
    return memo;
  }

  return explode(dir, memo);
};

export const relativeTo = curryN(2, relative);

