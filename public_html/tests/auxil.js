// Numbers the map DIVs
var testNum = 0;

// Numbers the test modules
var testModuleNum = 0;
function putNum() {
    ++testModuleNum;
    if (testModuleNum < 10) return '00' + testModuleNum;
    if (testModuleNum < 100) return '0' + testModuleNum;
    else return testModuleNum;
}

// Checks if two arrays are equal
function arrayEqual(a, b) {
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i)
        if (a[i] !== b[i]) return false;
    return true;
}

// Checks if two objects are equal
function objectEqual(a, b) {
    if (sigga.utils.countKeys(a) !== sigga.utils.countKeys(b)) return false;
    for (var i in a)
        if (a[i] !== b[i]) return false;
    return true;
}

// Checks if two JSON objects are equal
function jsonEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

// Copies an object
function objectCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Checks if two values are almost equal, i.e. their difference is less than d
function almostEqual(a, b, d) {
    d = typeof d === 'undefined' ? 0.0000001 : d;
    return (Math.abs(a - b) < d);
}

// Counts the keys of a given object
function countKeys(obj) {
    /* Checks if the argument is an object */
    if (!Object.prototype.toString.call(obj) === "[object Object]") {
        /* The argument is not an object */
        throw 'The argument is not an object';
    }
    /* Counter for the keys of the object */
    var counter = 0;
    /* Traverses the object */
    for (var k in obj) {
        /* Counts the current key */
        counter++;
    }
    /* Returns the number of keys of the object */
    return counter;
};

/* Converts a jQuery object into a string */
function jQueryObjectToString(jQueryObj) {
    return $('<div />').append(jQueryObj).html();
}
