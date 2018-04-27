import matter from 'gray-matter';
import { traverseDirectory } from 'util/fs';
import {
  always, converge, dissoc, identity, invoker, merge, nthArg, omit, pick, pipe, prop
} from 'ramda';

export const getMatter = converge(matter, [
  nthArg(0),
  always({ delimiters: '~~~' })
]);

export const bufferToString =
  converge(invoker(1, 'toString'), [ always('utf8'), nthArg(0) ]);

export const parseMatter = pipe(bufferToString, getMatter);
export const liftData = converge(merge, [
  pipe(nthArg(0), prop('data')),
  pipe(nthArg(0), dissoc('data'))
]);

export const trimExcerpt = identity;

export default traverseDirectory(process.env.DATA_DIR).
  concatMap(fileNode =>
    fileNode.
    content.
    map(pipe(parseMatter, pick(['content', 'data']), merge(fileNode))).
    map(omit(['stats', 'filename'])).
    map(liftData).
    map(trimExcerpt)
  );

