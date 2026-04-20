const {
  map, filter, reduce, find, every, some,
  flatten, chunk, groupBy,
  deepClone,
  debounce, throttle, memoize
} = require('../src');

let passed = 0;
let failed = 0;

function test(name, condition) {
  if (condition) {
    console.log('✓ ' + name);
    passed++;
  } else {
    console.log('✗ FAIL: ' + name);
    failed++;
  }
}

// Array
test('map doubles values',
  JSON.stringify(map([1,2,3], x => x * 2)) === '[2,4,6]');

test('filter keeps even numbers',
  JSON.stringify(filter([1,2,3,4], x => x % 2 === 0)) === '[2,4]');

test('reduce sums to 10',
  reduce([1,2,3,4], (a, b) => a + b, 0) === 10);

test('find returns first match',
  find([1,2,3,4], x => x > 2) === 3);

test('every returns true when all match',
  every([2,4,6], x => x % 2 === 0) === true);

test('every returns false when one fails',
  every([2,4,5], x => x % 2 === 0) === false);

test('some returns true when any matches',
  some([1,2,3], x => x > 2) === true);

test('some returns false when none match',
  some([1,2,3], x => x > 10) === false);

test('flatten nested arrays',
  JSON.stringify(flatten([1,[2,[3,[4]]]])) === '[1,2,3,4]');

test('chunk array of 5 by 2',
  JSON.stringify(chunk([1,2,3,4,5], 2)) === '[[1,2],[3,4],[5]]');

const grouped = groupBy([1.1, 2.2, 1.3, 2.4], Math.floor);
test('groupBy correct counts',
  grouped[1].length === 2 && grouped[2].length === 2);

// Object
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 99;
test('deepClone: original unchanged after mutating clone',
  original.b.c === 2);

// Function
let callCount = 0;
const slowFn = (n) => { callCount++; return n * 2; };
const memoized = memoize(slowFn);
memoized(5);
memoized(5);
memoized(5);
test('memoize only calls fn once for same args',
  callCount === 1);

console.log(`\n${passed} passed, ${failed} failed`);