//1. Union
function union(setA, setB) {
    return new Set([...setA, ...setB]);
}
var setA = new Set([1, 2, 3, 4, 5]);
var setB = new Set([3, 4, 5, 6]);
console.log(union(setA, setB)) //Set(6) { 1, 2, 3, 4, 5, 6 }

//2. Intersection
function intersect(setA, setB) {
    var commonElements = new Set();

    for (var elem of setB) {
        if (setA.has(elem)) {
            commonElements.add(elem);
        }
    }

    return commonElements;
}
var setA = new Set([1, 2, 3, 4, 5]);
var setB = new Set([3, 4, 5, 6]);
console.log(intersect(setA, setB)); //Set(3) { 3, 4, 5 }

//3 . Difference
function difference(setA, setB) {
    var diff = new Set(setA);
    for (var elem of setB) {
        diff.delete(elem);
    }
    return diff;
}
var setA = new Set([1, 2, 3, 4, 5]);
var setB = new Set([3, 4, 5, 6]);
// SET A - SET B
console.log(difference(setA, setB)); // Set(2) { 1, 2 }
// SET B- SET A
console.log(difference(setB, setA)); //Set(1) { 6 }


//4. Symmetric Difference
function symmetricDifference(setA, setB) {
    var resultSet = new Set(setA);
    for (var elem of setB) {
        if (resultSet.has(elem)) {
            resultSet.delete(elem);
        } else {
            resultSet.add(elem);
        }
    }
    return resultSet;
}
var setA = new Set([1, 2, 3, 4, 5]);
var setB = new Set([3, 4, 5, 6]);
console.log(symmetricDifference(setA, setB)); // Set(3) {1, 2, 6}

//5. isSuperSet
function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
var set = new Set([1, 2, 3, 4]);
var subset = new Set([3, 4]);
console.log(isSuperset(set, subset)); // true
subset = new Set([3, 4, 6]);
console.log(isSuperset(set, subset)); // false