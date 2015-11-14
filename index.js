/**
 * @file {@link http://xotic750.github.io/core-x/ core-x}
 * Core bundle for project-x projects.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL-3.0+}
 * @module core-x
 */

/*jslint maxlen:80, es6:false, this:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:2, maxdepth:2,
  maxstatements:11, maxcomplexity:4 */

/*global define, exports, require, requirejs */

// UMD (Universal Module Definition)
;(function (root, factory) {
  'use strict';

  var cdnjs;
  if (typeof define === 'function' && define.amd) {
    cdnjs = 'https://cdnjs.cloudflare.com/ajax/libs/';
    requirejs.config({
      paths: {
        'es5-shim': cdnjs + 'es5-shim/4.3.1/es5-shim.min',
        'es6-shim': cdnjs + 'es6-shim/0.33.13/es6-shim.min',
        json3: cdnjs + 'json3/3.3.2/json3.min',
        cycle: 'https://rawgit.com/douglascrockford/JSON-js/master/cycle'
      },
      //Remember: only use shim config for non-AMD scripts,
      //scripts that do not already call define(). The shim
      //config will not work correctly if used on AMD scripts,
      //in particular, the exports and init config will not
      //be triggered, and the deps config will be confusing
      //for those cases.
      shim: {
        cycle: {
          //These script dependencies should be loaded first.
          deps: ['es5-shim', 'json3', 'es6-shim']
        }
      }
    });
    // AMD. Register as an anonymous module.
    define(['es5-shim', 'json3', 'es6-shim', 'cycle'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    require('es5-shim');
    require('json3');
    require('es6-shim');
    require('./node_modules/json2/cycle.js');
    factory();
  } else {
    factory();
  }
}(this, function (obj) {
  'use strict';

  if (Object.defineProperty) {
    obj = {};
    try {
      Object.defineProperty(obj, 'x', {
        enumerable: false,
        value: obj
      });
    } catch (ignore) {}
    if (!Object.keys(obj).length && obj.x === obj) {
      obj = {
        parse: JSON.parse,
        stringify: JSON.stringify,
        decycle: JSON.decycle,
        retrocycle: JSON.retrocycle
      };
      Object.keys(obj).forEach(function (name) {
        Object.defineProperty(JSON, name, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: obj[name]
        });
      });
    }
  }
}));
