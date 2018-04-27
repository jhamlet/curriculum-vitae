// import expect from 'expect.js';
import { test as debug } from 'util/debug';
import data from 'data';

describe('data', () => {
  it('should be true', done => {
    data.
      subscribe(
        f => debug.log(f),
        done,
        done
      );
  });
});

