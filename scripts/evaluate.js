import {promises as fs} from 'node:fs';
import {pathToFileURL} from 'node:url';

import * as runtime from 'react/jsx-runtime.js';
import {evaluate} from 'xdm';

const {href, pathname} = pathToFileURL('./src/pages/index.mdx');
const contents = await fs.readFile(pathname);
const {meta} = await evaluate(contents, {
    ...runtime,
    baseUrl: href,
    useDynamicImport: true,
});

console.log(meta);
