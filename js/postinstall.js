/* 
  The sole purpose of this script is to create the "dependencies" folder, 
  so that this project can be used as a website or browser extension. 
*/

import fs from 'fs';
import { execSync } from 'child_process';

const dependencies = [
  { src: 'node_modules/marked/lib/marked.esm.js', dest: 'dependencies/marked/' },
  { src: 'node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3.mjs', dest: 'dependencies/sqlite3/' },
  { src: 'node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3.wasm', dest: 'dependencies/sqlite3/' },
  { src: 'node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3-opfs-async-proxy.js', dest: 'dependencies/sqlite3/' },
  { src: 'node_modules/twig/twig.min.js', dest: 'dependencies/twig/' },
  { src: 'node_modules/ace-builds/src-min/mode-xml.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/mode-twig.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/mode-javascript.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/mode-html.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/mode-css.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/mode-markdown.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/ace.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/ext-*', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/theme-github_light_default.js', dest: 'dependencies/ace/' },
  { src: 'node_modules/ace-builds/src-min/snippets/markdown.js', dest: 'dependencies/ace/snippets/' },
  { src: 'node_modules/jszip/dist/jszip.min.js', dest: 'dependencies/jszip/' },
];

if (fs.existsSync('node_modules')) {
  dependencies.forEach(({ src, dest }) => {      
    execSync(`copyfiles -V -f ${src} ${dest}`, { stdio: 'inherit' });
  });

  fs.rmSync('node_modules', { recursive: true, force: true });
  console.log('node_modules removed');
}
