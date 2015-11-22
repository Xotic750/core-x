/**
 * @file {@link http://xotic750.github.io/core-x/ core-x}
 * Core bundle for project-x projects.
 * @version 1.0.23
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
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

  var defProps;
  require('es5-shim');
  require('es5-shim/es5-sham');
  require('json3');
  require('es6-shim');
  require('cycle-x');
  defProps = require('define-properties');
  defProps(module.exports, {
    ES: require('es-abstract'),
    BigNumber: require('bignumber.js'),
    deepEqual: require('deep-equal'),
    defProps: defProps,
    error: require('error-x'),
    isPlainObject: require('lodash.isplainobject')
  });
}());
