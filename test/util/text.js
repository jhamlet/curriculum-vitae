import expect from 'expect.js';
import { bookend, postfix, surround, underlay, unwrap } from 'util/text';

describe('util/text', () => {
  describe('postfix(string, string)', () => {
    it('it should append the given string', () => {
      expect(postfix('*', 'foo')).to.equal('foo*');
    });
  });
  describe('bookend(string, string)', () => {
    it('it should bookend the given string', () => {
      expect(bookend('*', 'foo')).to.equal('*foo*');
    });
  });
  describe('surround(string, string, string)', () => {
    it('it should surround the given string', () => {
      expect(surround('[', ']', 'foo')).to.equal('[foo]');
    });
  });
  describe('underlay(string, string)', () => {
    it('it should underlay the given string', () => {
      expect(underlay('---', 'foo')).to.equal('foo\n---');
    });
  });
  describe('unwrap(string)', () => {
    it('it should unwrap the text', () => {
      expect(unwrap('f\no\no\n')).to.equal('f o o ');
    });
  });
});

