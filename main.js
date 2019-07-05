'use strict';

const bytenode = require('bytenode');
const fs = require('fs');
const v8 = require('v8');
const path = require('path');

v8.setFlagsFromString('--no-lazy');

if (!fs.existsSync(path.join(__dirname, './main-window.jsc'))) {
  bytenode.compileFile(path.join(__dirname, './main-window.src.js'),path.join(__dirname,  './main-window.jsc'));
}

require(path.join(__dirname,'./main-window.jsc'));
