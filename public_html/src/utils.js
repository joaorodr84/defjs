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
 * Checks whether a value is an ID of a DIV element
 * @access public
 * @memberOf def.utils
 * @method isIdOfDiv
 * @param {*} value - Value to be checked
 * @returns {Boolean} Whether the value is an ID of a DIV element
 * @static
 * @example
 * &lthtml&gt
 *     &ltbody&gt
 *         &ltdiv id="one"&gt&lt/div&gt
 *         &ltspan id="two"&gt&lt/span&gt
 *         &ltscript&gt
 *             def.utils.isIdOfDiv(77);        // Returns false
 *             def.utils.isIdOfDiv('one');     // Returns true
 *             def.utils.isIdOfDiv('two');     // Returns false
 *             def.utils.isIdOfDiv('three');   // Returns false
 *         &lt/script&gt
 *     &lt/body&gt
 * &lt/html&gt
 */
def.utils.isIdOfDiv = function(value) {
    /* Gets the element by ID, if it exists */
    var el = document.getElementById(value);
    /* Returns whether the value is an ID of a DIV element */
    return el !== null && el.tagName === 'DIV';
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
 * Checks whether the value is in the unit interval, i.e. between 0 and 1, both included
 * @access public
 * @memberOf def.utils
 * @method isInUnitInterval
 * @param {*} value - Value to be checked
 * @returns {Boolean} Whether the value is in the unit interval
 * @static
 * @example
 * def.utils.isInUnitInterval('Hello!');       // Returns false
 * def.utils.isInUnitInterval(0);              // Returns true
 * def.utils.isInUnitInterval(-2);             // Returns false
 * def.utils.isInUnitInterval(3.7);            // Returns false
 * def.utils.isInUnitInterval(0.3);            // Returns true
 * def.utils.isInUnitInterval(1);              // Returns true
 */
def.utils.isInUnitInterval = function(value) {
    return def.utils.isNumber(value) && value >= 0 && value <= 1;
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
 */
def.utils.isNumber = function(value) {
    return typeof value === 'number';
    //return typeof value === 'number' && !isNaN(value);    // TODO: use this!
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