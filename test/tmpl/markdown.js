// import expect from 'expect.js';
import data from 'data';
import renderMarkdown from 'tmpl/markdown';
import { test as debug } from 'util/debug';

describe('tmpl/markdown', () => {
  let props;

  before(done =>
    data.subscribe(d => props = d, done, done)
  );

  it('should render...', () => {
    debug.log(renderMarkdown(props));
  });
});

