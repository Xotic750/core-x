/**
 * @file {@link http://xotic750.github.io/core-x/ core-x}
 * Core bundle for project-x projects.
 * @version 1.0.15
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL-3.0+}
 * @module core-x
 */

/*jslint maxlen:80, es6:false, this:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:6, maxcomplexity:1 */

/*global require */

;(function () {
  'use strict';

  require('es5-shim');
  require('es5-shim/es5-sham');
  require('json3');
  require('es6-shim');
  module.exports.ES = require('es-abstract');
  require('cycle-x');
  module.exports.BigNumber = require('bignumber.js');
  module.exports.deepEqual = require('deep-equal');
  module.exports.defProps = require('define-properties');
  module.exports.error = require('error-x');
}());
