import expect from 'expect.js';
import {
  blockquote, code, h1, h2, header, headerLine, image, link
} from 'util/markdown';

describe('util/markdown', () => {
  describe('headerLine(string, string)', () => {
    it('it should create a line of tokens', () => {
      expect(headerLine('-', 'foobar')).to.equal('------');
    });
  });
  describe('header(number, string)', () => {
    it('it should create the correct header', () => {
      expect(header(1, 'foo')).to.equal('# foo\n\n');
      expect(header(2, 'foo')).to.equal('## foo\n\n');
      expect(header(3, 'foo')).to.equal('### foo\n\n');
      expect(header(4, 'foo')).to.equal('#### foo\n\n');
      expect(header(5, 'foo')).to.equal('##### foo\n\n');
      expect(header(6, 'foo')).to.equal('###### foo\n\n');
    });
  });
  describe('h1(string)', () => {
    it('should format with underlaid equal signs', () => {
      expect(h1('foo')).to.equal('foo\n===\n\n');
      expect(h1('super amazing heading')).
        to.equal('super amazing heading\n=====================\n\n');
    });
  });
  describe('h2(string)', () => {
    it('should format with underlaid dashes', () => {
      expect(h2('foo')).to.equal('foo\n---\n\n');
      expect(h2('super amazing sub-heading')).
        to.equal('super amazing sub-heading\n-------------------------\n\n');
    });
  });
  describe('code(string)', () => {
    it('it should format the given string', () => {
      expect(code('foo')).to.equal('`foo`');
    });
  });
  describe('link(string, string)', () => {
    it('it should create a link from the given label and url', () => {
      expect(link('foo', 'http://foo.com')).to.equal('[foo](http://foo.com)');
    });
  });
  describe('image(string, string)', () => {
    it('it should create a image link from the given alt text and url', () => {
      expect(image('foo', 'http://foo.com/image.png')).
        to.equal('![foo](http://foo.com/image.png)');
    });
  });
  describe('blockquote(string)', () => {
    it('it should blockquote the text', () => {
      expect(blockquote('f\no\no')).to.equal('> f\n> o\n> o\n\n');
    });
  });
});

