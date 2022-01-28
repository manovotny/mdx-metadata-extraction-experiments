import {resolve} from 'node:path';

const path = resolve('./src/pages/index.mdx');
const Content = await import(path);

console.log(Content);
