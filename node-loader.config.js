import * as mdxNodeLoader from '@mdx-js/node-loader';
import * as mdxJsxLoader from './loaders/jsx-loader.js';

export default {
    loaders: [mdxNodeLoader, mdxJsxLoader],
};
