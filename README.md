# mini-lodash

A lightweight utility library built from scratch as part of my journey to deeply understand JavaScript fundamentals — closures, higher-order functions, and functional composition.

## Why I built this

I'm a self-taught developer working through JavaScript from the ground up. Instead of just using lodash, I wanted to understand HOW each utility works internally. Every function here was built without looking at lodash's source code, forcing me to derive each implementation from first principles.

## What's inside

### Array utilities
- `map(arr, fn)` — transform each element
- `filter(arr, fn)` — keep elements that pass a test
- `reduce(arr, fn, initial)` — accumulate into a single result
- `find(arr, fn)` — return first element matching a condition
- `every(arr, fn)` — true if all elements match
- `some(arr, fn)` — true if any element matches
- `flatten(arr)` — recursively flatten nested arrays
- `chunk(arr, size)` — split into chunks of given size
- `groupBy(arr, keyFn)` — group elements by a computed key

### Object utilities
- `deepClone(value)` — recursively copy nested structures

### Function utilities
- `debounce(fn, delay)` — defer execution until calls stop
- `throttle(fn, delay)` — limit execution rate
- `memoize(fn)` — cache results for repeated calls

## Usage

```js
const { map, filter, reduce, debounce } = require('./src');

const doubled = map([1, 2, 3], x => x * 2);
// [2, 4, 6]

const sum = reduce(
  filter([1, 2, 3, 4, 5], x => x > 2),
  (acc, x) => acc + x,
  0
);
// 12

const handleSearch = debounce((query) => {
  console.log('Searching:', query);
}, 300);
```

## Running tests

```bash
npm test
```

## What I learned building this

- Closures are the foundation of debounce, throttle, and memoize — each keeps state private between calls through closed-over variables
- reduce is the most general higher-order function — it can implement map, filter, flatten, and more
- deepClone revealed how reference semantics work in JavaScript and why shallow copies cause subtle bugs
- Writing from scratch forces understanding that just using doesn't

## License

MIT
