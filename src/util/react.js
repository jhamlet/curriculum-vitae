import ReactDom from 'react-dom';
import { keys, omit, pipe } from 'ramda';
import debug from 'debug'

const DEFAULTS = {
  tagName: 'div',
  id: 'app-container',
  className: 'ui-app'
};

export const render  = (query = 'body', reactElement, opts = {}) => {
  const options = { ...DEFAULTS, ...opts };
  const root = document.querySelector(query);
  const firstChild = root.firstChild;
  const el = document.createElement(options.tagName);

  pipe(omit(['tagName']), keys)(options).
    forEach(prop => el[prop] = options[prop]);

  if (firstChild) {
    root.insertBefore(el, firstChild);
  }
  else {
    root.appendChild(el);
  }

  try {
    ReactDom.render(reactElement, el);
  }
  catch (error) {
    debug('app:error')(error)
  }
};

