/**
 * @namespace def.utils
 * @description Auxiliary functions for the Sigga framework.
 */
def.utils = {};
/**
 * Checks whether a value is an array
 * @access public
 * @memberOf def.utils
 * @method isArray
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is an array
 * @static
 * @example
 * def.utils.isArray(77);              // Returns false
 * def.utils.isArray('Hello!');        // Returns false
 * def.utils.isArray([1, 2, 3]);       // Returns true
 * def.utils.isArray({a: 1, b: 2});    // Returns false
 */
def.utils.isArray = function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
};
/**
 * Checks whether a value is a boolean
 * @access public
 * @memberOf def.utils
 * @method isBoolean
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is a boolean
 * @static
 * @example
 * def.utils.isBoolean(77);              // Returns false
 * def.utils.isBoolean('Hello!');        // Returns false
 * def.utils.isBoolean([1, 2, 3]);       // Returns false
 * def.utils.isBoolean(true);            // Returns false
 */
def.utils.isBoolean = function(value) {
    return typeof value === 'boolean';
};
/**
 * Checks whether a value is a float
 * @access public
 * @memberOf def.utils
 * @method isFloat
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is a number
 * @static
 * @example
 * def.utils.isFloat(5);              // Returns false
 * def.utils.isFloat(5.2);            // Returns true
 * def.utils.isFloat(-1);             // Returns false
 * def.utils.isFloat(-3.7);           // Returns true
 * def.utils.isFloat(0);              // Returns false
 * def.utils.isFloat('Hello!');       // Returns false
 * def.utils.isFloat([1, 2, 3]);      // Returns false
 * def.utils.isFloat({a: 1, b: 2});   // Returns false
 * def.utils.isFloat(NaN);            // Returns false
 */
def.utils.isFloat = function(value) {
    return def.utils.isNumber(value) && !def.utils.isInteger(value);
};
/**
 * Checks whether a value is a function
 * @access public
 * @memberOf def.utils
 * @method isFunction
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is a function
 * @static
 * @example
 * def.utils.isFunction(function () {});  // Returns true
 * def.utils.isFunction('Hello!');        // Returns false
 * def.utils.isFunction([1, 2, 3]);       // Returns false
 * def.utils.isFunction({a: 1, b: 2});    // Returns false
 */
def.utils.isFunction = function(value) {
    return typeof value === 'function';
};
/**
 * Checks whether a value is an integer
 * @access public
 * @memberOf def.utils
 * @method isInteger
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is an integer
 * @static
 * @example
 * def.utils.isInteger(5);              // Returns true
 * def.utils.isInteger(5.2);            // Returns false
 * def.utils.isInteger(-1);             // Returns true
 * def.utils.isInteger(-3.7);           // Returns false
 * def.utils.isInteger(0);              // Returns true
 */
def.utils.isInteger = function(value) {
    return def.utils.isNumber(value) && value % 1 === 0;
};
/**
 * Checks whether a value is a number
 * @access public
 * @memberOf def.utils
 * @method isNumber
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is a number
 * @static
 * @example
 * def.utils.isNumber(5);              // Returns true
 * def.utils.isNumber(5.2);            // Returns true
 * def.utils.isNumber(-1);             // Returns true
 * def.utils.isNumber(-3.7);           // Returns true
 * def.utils.isNumber(0);              // Returns true
 * def.utils.isNumber('Hello!');       // Returns false
 * def.utils.isNumber([1, 2, 3]);      // Returns false
 * def.utils.isNumber({a: 1, b: 2});   // Returns false
 * def.utils.isNumber(NaN);            // Returns false
 */
def.utils.isNumber = function(value) {
    return typeof value === 'number' && !isNaN(value);
};
/**
 * Checks whether a value is an object, excluding arrays
 * @access public
 * @memberOf def.utils
 * @method isObject
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is an object
 * @static
 * @example
 * def.utils.isObject(77);             // Returns false
 * def.utils.isObject('Hello!');       // Returns false
 * def.utils.isObject({a: 1, b: 2});   // Returns true
 * def.utils.isObject([1, 2, 3]);      // Returns false
 * def.utils.isObject(null);           // Returns false
 */
def.utils.isObject = function(value) {
    return typeof value === 'object' && !def.utils.isArray(value) && value !== null;
};
/**
 * Checks whether a value is a string
 * @access public
 * @memberOf def.utils
 * @method isString
 * @param {*} value - Value to be type checked
 * @returns {Boolean} Whether the value is a string
 * @static
 * @example
 * def.utils.isString(77);             // Returns false
 * def.utils.isString([1, 2, 3]);      // Returns false
 * def.utils.isString('Hello!');       // Returns true
 * def.utils.isString('');             // Returns true
 */
def.utils.isString = function(value) {
    return typeof value === 'string';
};
