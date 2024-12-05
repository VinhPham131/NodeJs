// const calPeri = require('./rectangle');

import { calPeri } from './rectangle.mjs';

const width = 5;
const height = 6;

const perimeter = calPeri(width, height);
console.log(`The perimeter of the rectangle is ${perimeter}`);