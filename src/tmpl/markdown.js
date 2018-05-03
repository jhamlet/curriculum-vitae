import moment from 'moment';
import wordwrap from 'word-wrap';
import {
  converge, flatten, join, merge, pluck, pipe, prop, unapply
} from 'ramda';
import { a, b, bq, em, h1, h2, h3, p } from 'util/markdown';

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
    case 'email':
      return value;
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
    wordwrap(join(' | ', items.map(renderContactMethod)), { width: 72 })
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
    h3(`${title} ${em(timeRange)}`),
    p(b(companyUrl ? a(companyPlace, companyUrl) : companyPlace)),
    p(content)
  ];
};

export const renderExperiences = props => {
  const { options, experience } = props;

  return experience.
    map(experience => renderExperience({ options, experience }));
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

