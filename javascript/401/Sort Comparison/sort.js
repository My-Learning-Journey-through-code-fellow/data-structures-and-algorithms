'use strict';
import { Movies } from './movies';

const { mainModule } = require('process');

function sortYear(arr) {
  arr.sort(Movies)
}

function compareYear(a,b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}

function sortTitle(arr) {
  arr.sort(Movies)
}

function compareTitle(a,b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
