import app from 'commander';
import pkg from '../package.json';
import data from './data';
import { write } from './util/fs'
import { app as debug } from './util/debug';

const getTemplate = name =>
  require(`./tmpl/${name}.js`).default;

app.
  name(pkg.name).
  version(pkg.version);

app.
  command('build <type> [outfile]').
  action((type, outfile) => {
    data.
      map(getTemplate(type)).
      concatMap(result => write(outfile, result, 'utf8')).
      subscribe(
        null,
        e => debug.error(e),
        () => debug.info(`redendered '${type}' to '${outfile}'`)
      );
  });

app.parse(process.argv);

