import matter from 'gray-matter';
import moment from 'moment';
import { matterDelimiters as delimiters } from 'config';
import { traverseDirectory } from 'util/fs';
import {
  always, anyPass, converge, dissoc, filter, has, head, ifElse, isNil,
  identical, invoker, merge, mergeAll, nthArg, objOf, pick, pipe, prop, sort,
  split, trim, unapply, whereEq
} from 'ramda';
import { isString } from 'util/predicates';

const { env: { DATA_DIR } } = process;
const matterOpts = { delimiters };

const arg0             = nthArg(0);
const arg1             = nthArg(1);
const mergeEvery       = unapply(mergeAll);
const getData          = prop('data');
const getContent       = prop('content');
const getFrom          = prop('from');
const getTo            = prop('to');
const getTags          = prop('tags');
const hasFrom          = has('from');
const hasTo            = has('to');
const hasTags          = has('tags');
const ofFrom           = objOf('from');
const ofTo             = objOf('to');
const ofTags           = objOf('tags');
const ofExperience     = objOf('experience');
const ofSummary        = objOf('summary');
const ofContact        = objOf('contact');
const ofObjective      = objOf('objective');
const ofSkills         = objOf('skills');
const ofTools          = objOf('tools');
const removeData       = dissoc('data');
const removeStats      = dissoc('stats');
const whereExperience  = whereEq({ category: 'experience' });
const whereSummary     = whereEq({ category: 'summary' });
const whereContact     = whereEq({ category: 'contact' });
const whereObjective   = whereEq({ category: 'objective' });
const whereSkills      = whereEq({ category: 'skills' });
const whereTools       = whereEq({ category: 'tools' });
const filterExperience = filter(whereExperience);
const filterSummary    = filter(whereSummary);
const filterContact    = filter(whereContact);
const filterObjective  = filter(whereObjective);
const filterSkills     = filter(whereSkills);
const filterTools      = filter(whereTools);

export const getMatter = converge(matter, [ arg0, always(matterOpts) ]);

export const bufferToString =
  converge(invoker(1, 'toString'), [ always('utf8'), arg0 ]);

export const parseMatter = pipe(bufferToString, getMatter);
export const liftData = converge(merge, [
  pipe(arg0, getData),
  pipe(arg0, removeData)
]);
export const momentToIsoString = invoker(0, 'toISOString');
export const stringToIsoString = pipe(moment, momentToIsoString);

export const parseNode = converge(mergeEvery, [
  pipe(arg0, removeStats),
  pipe(arg1, parseMatter, pick(['content', 'data']))
]);

export const mergeWithNode = converge(pipe, [
  pipe(arg0, parseNode),
  always(liftData)
]);

const toNullOrIsoString = ifElse(isNil, always(null), stringToIsoString);
const getObjOfIsoString =
  converge(pipe, [ arg0, always(toNullOrIsoString), arg1 ]);

export const expandDates = ifElse(
  anyPass([ hasFrom, hasTo ]),
  converge(mergeEvery, [
    arg0,
    getObjOfIsoString(getFrom, ofFrom),
    getObjOfIsoString(getTo, ofTo)
  ]),
  arg0
);

const stringToArray = pipe(trim, split(/(?:,|\s)\s*/));

export const expandTags = ifElse(
  hasTags,
  converge(merge, [
    arg0,
    pipe(getTags, ifElse(isString, stringToArray, arg0), ofTags)
  ]),
  arg0
);

const organizeNode = converge(pipe, [
  pipe(arg0, mergeWithNode),
  always(expandDates),
  always(expandTags)
]);

const mapFileNode = converge(invoker(1, 'map'), [
  pipe(arg0, organizeNode),
  pipe(arg0, getContent)
]);

const sortByFromAndTo = sort(({ from: fa }, { from: fb }) =>
  moment(fa).isBefore(fb) ? 1 : moment(fa).isAfter(fb) ? -1 : 0
);

const onlyOrAll = ifElse(
  pipe(prop('length'), identical(1)),
  head,
  arg0
);

const collateData = converge(mergeEvery, [
  pipe(filterSummary, onlyOrAll, ofSummary),
  pipe(filterObjective, onlyOrAll, ofObjective),
  pipe(filterContact, onlyOrAll, ofContact),
  pipe(filterExperience, sortByFromAndTo, onlyOrAll, ofExperience),
  pipe(filterSkills, onlyOrAll, ofSkills),
  pipe(filterTools, onlyOrAll, ofTools)
]);

export default traverseDirectory(DATA_DIR).
  concatMap(mapFileNode).
  toArray().
  map(collateData).
  publishLast().
  refCount();

