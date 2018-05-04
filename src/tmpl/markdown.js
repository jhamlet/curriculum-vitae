import moment from 'moment';
import wordwrap from 'word-wrap';
import {
  complement, converge, curryN, filter, flatten, flip, join, map, merge, pluck,
  pipe, prop, split, unapply// , tap
} from 'ramda';
import { a, bq, em, h1, h2, h3, h4, p } from 'util/markdown';
// import { app as debug } from 'util/debug';

const parseBaseTenInt = curryN(2, flip(parseInt))(10);

const pluckNumbers = pipe(
  split (''),
  map(parseBaseTenInt),
  filter(complement(isNaN)),
  // tap(n => debug.log(n)),
  join('')
);

export const renderSummary = props => {
  const { summary: { name, title, content } } = props;

  return [
    h1(`${name} ${em(title)}`),
    h2('Summary'),
    p(content)
  ];
};

export const renderBlockquotedItem = ({ title, items }) => {
  return [
    h2(title),
    bq(wordwrap(join(', ', pluck('label', items)), { width: 68, indent: '' }))
  ];
};

export const renderSkills = converge(renderBlockquotedItem, [
  converge(merge, [prop('options'), prop('skills')])
]);

export const renderTools = converge(renderBlockquotedItem, [
  converge(merge, [prop('options'), prop('tools')])
]);

export const renderContactMethod = ({ label, value, type }) => {
  switch (type) {
    case 'phone':
      return a(`${label}: ${value}`, `tel:${encodeURIComponent(pluckNumbers(value))}`);
    case 'email':
      return a(`${label}: ${value}`, `mailto:${encodeURIComponent(value)}`);
    case 'link':
      return a(label, value);
    default:
      return '';
  }
};

export const renderContact = props => {
  const { contact: { items } } = props;

  return [
    h2('Contact'),
    p(wordwrap(join(
      ' |\n',
      items.map(renderContactMethod)),
      { indent: '', width: 72 }
    ))
  ];
};

export const renderExperience = ({ experience }) => {
  const {
    title, from, to, company, companyUrl, city, state, content
  } = experience;

  const timeRange =
    moment(from).format('MMM YYYY') +
    ' to ' +
    (to
    ? moment(to).format('MMM YYYY')
    : 'Current');

  const companyPlace = `${company}, ${city}, ${state}`;

  return [
    h3(`${title} ${em('— ' + timeRange)}`),
    h4(companyUrl ? a(companyPlace, companyUrl) : companyPlace),
    p(content)
  ];
};

export const renderExperiences = props => {
  const { options, experience } = props;

  return [h2('Experience')].
    concat(
      experience.
        map(experience => renderExperience({ options, experience }))
    );
};

export const render = converge(
  pipe(unapply(flatten), join('')),
  [
    renderSummary,
    renderSkills,
    renderTools,
    renderExperiences,
    renderContact
  ]
);

export default render;

