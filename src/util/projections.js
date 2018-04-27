import {
  always, concat, converge, empty, head, ifElse, identity, join, map, of,
  pipe, split/* , tap */, tail, toLower, toUpper
} from 'ramda';
import { isArray, isNil } from 'util/predicates';
/**
 * A `projection` is a mapping function. Something that 'projects' one thing
 * into something else.
 */
export const emptyObject         = pipe(always({}), empty);
export const emptyArray          = pipe(always([]), empty);
export const defaultToEmptyArray = ifElse(isNil, emptyArray, of);
export const defaultToArray      = ifElse(isArray, identity, defaultToEmptyArray);

//------------------------------------------------------------------------------
// Camel Case and Back Again Utilities
//------------------------------------------------------------------------------
// this matches the position before any uppercase letter
const CAMEL_REGEX = /(?=[A-Z])/;
export const upFirst      = converge(concat, [pipe(head, toUpper), tail]);
export const splitCamel   = split(CAMEL_REGEX);
export const splitKabob   = split('-');
export const splitSnake   = split('_');
export const joinCamel    = join('');
export const joinKabob    = join('-');
export const joinSnake    = join('_');
export const allLower     = map(toLower);
export const allToUpFirst = map(upFirst);
export const camelToKabob = pipe(splitCamel, allLower, joinKabob);
export const camelToSnake = pipe(splitCamel, allLower, joinSnake);

export const kabobToCamel =
  pipe(
    splitKabob,
    converge(concat, [
      pipe(head, toLower, of),
      pipe(tail, allLower, allToUpFirst)
    ]),
    joinCamel
  );

export const snakeToCamel =
  pipe(
    splitSnake,
    converge(concat, [
      pipe(head, toLower, of),
      pipe(tail, allLower, allToUpFirst)
    ]),
    joinCamel
  );
