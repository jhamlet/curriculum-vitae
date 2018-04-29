import {
  always, concat, converge, curryN, flip, identity, ifElse, join, length, map,
  nthArg, pipe, split, test
} from 'ramda';

import {
  bookend, postfix, prefix, repeat, surround, underlay
} from 'util/text';

const arg0 = nthArg(0);
const arg1 = nthArg(1);

export const emphasis = bookend('*');
export const strong   = bookend('**');
export const code     = bookend('`');
export const block    = postfix('\n\n');

export const headerLine = converge(repeat, [ arg0, pipe(arg1, length) ]);
export const hashHeader = converge(concat, [
  pipe(arg0, repeat('#'), flip(concat)(' ')),
  arg1
]);

export const underlayHeader = converge(underlay, [
  converge(headerLine, [ arg0, arg1 ]),
  arg1
]);

export const equalsHeader = pipe(underlayHeader('='), block);
export const dashHeader   = pipe(underlayHeader('-'), block);

export const header = curryN(2, pipe(hashHeader, block));

export const h1 = equalsHeader;
export const h2 = dashHeader;
export const h3 = header(3);
export const h4 = header(4);
export const h5 = header(5);
export const h6 = header(6);

export const linkLabel = surround('[', ']');
export const linkValue = surround('(', ')');

export const link = converge(concat, [
  pipe(arg0, linkLabel),
  pipe(arg1, linkValue)
]);

export const imageLabel = converge(concat, [
  always('!'),
  pipe(arg0, linkLabel)
]);

export const image = converge(concat, [
  pipe(arg0, imageLabel),
  pipe(arg1, linkValue)
]);

export const blockquote = pipe(
  split(/\n/),
  map(ifElse(test(/^\s*$/), identity, prefix('> '))),
  join('\n'),
  block
);

export {
  emphasis as em, emphasis as italic, emphasis as i,
  strong as bold, strong as b,
  link as anchor, link as a,
  image as img,
  block as paragraph, block as p,
  blockquote as bq
};

