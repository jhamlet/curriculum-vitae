// import expect from 'expect.js';
import { test as debug } from 'util/debug';
import data from 'data';

describe('data', () => {
  it('should be true', done => {
    data.
      subscribe(
        f => {
          const { tools: { items: tools } } = f;
          const { skills: { items: skills } } = f;
          const { contact: { items: contacts } } = f;

          debug.log(f);

          if (skills) {
            skills.forEach(i => debug.log(i));
          }

          if (tools) {
            tools.forEach(i => debug.log(i));
          }

          if (contacts) {
            contacts.forEach(i => debug.log(i));
          }
        },
        done,
        done
      );
  });
});

