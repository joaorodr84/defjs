$(function() {

    /**
     * def.utils tests
     */
    
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isArray");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isArray(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isArray(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isArray();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isArray(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isBoolean");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isBoolean(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isBoolean(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isBoolean();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isBoolean(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isFloat");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isFloat(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isFloat(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isFloat(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isFloat();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isFloat(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isFunction");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isFunction(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isFunction(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isFunction();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isFunction(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isInteger");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isInteger(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isInteger(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isInteger();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isInteger(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isInteger(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isNumber");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isNumber(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isNumber(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isNumber(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isNumber(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isNumber();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isNumber(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isNumber(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isObject");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isObject(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isObject(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isObject();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isObject(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    QUnit.module("Test module " + putNum() + " - def.utils - isString");

    QUnit.test("array", function(assert) {
        var value = [1, 2, 3];
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("boolean", function(assert) {
        var value = true;
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("function", function(assert) {
        var value = function() {var x = 'hello';};
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("float", function(assert) {
        var value = 1.1;
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("integer", function(assert) {
        var value = 1;
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("null", function(assert) {
        var value = null;
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("number", function(assert) {
        var value = -1.5;
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("object", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("string", function(assert) {
        var value = 'hello';
        var actualVal = def.utils.isString(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, object property", function(assert) {
        var value = {a: 1, b: 2};
        var actualVal = def.utils.isString(value.c);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("undefined, no argument", function(assert) {
        var actualVal = def.utils.isString();
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("zero", function(assert) {
        var value = 0;
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("NaN", function(assert) {
        var value = NaN;
        var actualVal = def.utils.isString(value);
        assert.ok(!actualVal, "The value is " + actualVal);
    });

    QUnit.test("empty string", function(assert) {
        var value = '';
        var actualVal = def.utils.isString(value);
        assert.ok(actualVal, "The value is " + actualVal);
    });

});