'use strict';

const {
  es5Paths,
  esNextPaths,
} = require('./scripts/shared/pathsByLanguageVersion');

const restrictedGlobals = require('confusing-browser-globals');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [],

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  plugins: [
    'babel',
    'react-internal',
  ],

  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
};
