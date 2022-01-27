import {resolve} from 'path';

const path = resolve('./src/pages/index.mdx');
const Content = await import(path);

console.log(Content);
