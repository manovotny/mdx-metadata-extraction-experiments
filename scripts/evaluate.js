import {resolve} from 'path';
import {readFileSync} from 'fs';

import * as runtime from 'react/jsx-runtime.js';
import {evaluate} from 'xdm';

const path = resolve('./src/pages/index.mdx');
const contents = readFileSync(path);
const baseUrl = `file://${path}`;
const {meta} = await evaluate(contents, {...runtime, baseUrl, useDynamicImport: true});

console.log(meta);
