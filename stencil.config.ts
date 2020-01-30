import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'super-stencil',
  plugins: [
    sass(
      {
        injectGlobalPaths: [
          'src/scss/_global.scss'
        ],
        includePaths : [
          'node_modules'
        ]
      }
    )
  ],
  copy: [ //https://codyburleson.com/copy-assets-from-node-modules-in-stencil-js/
    { src: '../node_modules/bootstrap/dist/css/bootstrap.min.css', dest: 'assets/css/bootstrap.min.css' },
    { src: '../node_modules/bootstrap/dist/js/bootstrap.min.js', dest: 'assets/js/bootstrap.min.js' },
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
