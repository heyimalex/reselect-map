# reselect-map

[![npm](https://img.shields.io/npm/v/reselect-map.svg)](https://www.npmjs.com/package/reselect-map)

Selectors for mapping over collections.

## Installation

```shell
npm install reselect-map reselect
```

## Usage

This package exposes a few special selector creators. They're mostly [the same as reselect's `createSelector`](https://github.com/reactjs/reselect), with one major difference: the first dependency gets [mapped](https://en.wikipedia.org/wiki/Map_(higher-order_function)) over.

To give you a better idea, here's an example of how a selector to multiply an array of numbers would look in basic reselect and then using reselect-map.

```javascript
import { createSelector } from "reselect";
import { createArraySelector } from "reselect-map";

const exampleState = {
  numbers: [1, 2, 3],
  multiplier: 5
};

const numbers = state => state.numbers;
const multiplier = state => state.multiplier;

// reselect
const mul1 = createSelector(
  [numbers, multiplier],
  (numbers, multiplier) => numbers.map(n => n * multiplier)
);

// reselect-map
const mul2 = createArraySelector(
  [numbers, multiplier],
  (number, multiplier) => number * multiplier
);

// Result: [5, 10, 15]
```

Notice the second version uses `number` instead of `numbers`; the result function is passed _each element_ of `numbers` instead of the whole thing, and then the results are reassembled into an array.

So why would you use this? The answer is that you probably shouldn't! However, in certain situations it may significantly improve performance. Learn more in the [motivation](#motivation) section.

## API

The only thing to know is that the first dependency/selector passed is the one that gets mapped over, and all other selectors work just like they do in reselect proper. Additionally, key-based selectors like `createObjectSelector` and `createMapSelector` pass the key as the final argument.

**NOTICE**: This package makes use of the builtin Map. If you need to support environments without Map, you are going to have to polyfill it.

### createArraySelector

Takes in an array, runs each element through the result function, and returns the results in a new array.

```javascript
import { createArraySelector } from "reselect-map";

const exampleState = {
  numbers: [1, 2, 3],
  multiplier: 5
};

const mul = createArraySelector(
  state => state.numbers,
  state => state.multiplier,
  (number, multiplier) => number * multiplier
);

console.log(mul(exampleState)); // [5, 10, 15]
```

### createObjectSelector

Takes an object, runs the value at each key through the result function, and returns an object with the results. The key is passed as the last argument to the selector function.

```javascript
import { createObjectSelector } from "reselect-map";

const exampleState = {
  numbers: { a: 1, b: 2 },
  multiplier: 5
};

const mul = createObjectSelector(
  state => state.numbers,
  state => state.multiplier,
  (number, multiplier, key) => `${key}:${number * multiplier}`
);

console.log(mul(exampleState)); // { a: 'a:5', b: 'b:10' }
```

### createListSelector

Takes anything with an array-like `map` function, and returns whatever that returns. This conveniently makes it compatible with Immutable js collections and similar without erasing the input type.

```javascript
import { createListSelector } from "reselect-map";
import Immutable from "immutable";

const exampleState = {
  numbers: Immutable.List([1, 2, 3]),
  multiplier: 5
};

const mul = createListSelector(
  state => state.numbers,
  state => state.multiplier,
  (number, multiplier) => number * multiplier
);

console.log(String(mul(exampleState))); // List [5, 10, 15]
```

### createMapSelector

Like the sequence selector, but it expects the map function to provide a second argument to the callback that represents the key. This key is passed as the last argument to the selector function. This is mostly to support Immutable's Collection.Keyed types.

```javascript
import { createMapSelector } from "reselect-map";
import Immutable from "immutable";

const exampleState = {
  numbers: Immutable.Map({ a: 1, b: 2 }),
  multiplier: 5
};

const mul = createMapSelector(
  state => state.numbers,
  state => state.multiplier,
  (number, multiplier, key) => `${key}:${number * multiplier}`
);

console.log(String(mul(exampleState))); // Map { "a": "a:5", "b": "b:10" }
```

### Need more?

I'm hoping that what I've got here covers most common use cases, but it's not difficult to expand. Please let me know if there are any other selector types you'd like, or submit a pull request!

## Motivation

When doing **very expensive** computations on elements of a collection, reselect might not give you the granularity of caching that you need. Imagine a selector that looks like this:

```javascript
import { createSelector } from "reselect";

const expensiveSelector = createSelector(
  state => state.largeArray,
  largeArray => largeArray.map(expensiveFunction)
);
```

Notice that every time `largeArray` is changed, *every single element* of the array will be run back through `expensiveFunction`. If `largeArray` is very large or `expensiveFunction` is very expensive, this could be very slow.

What would be better is if we only recomputed those elements that are new or have changed. **That's what this package does.** Your `expensiveFunction` only runs on the elements it needs to.

### When shouldn't you use reselect-map

When you don't need it. If your selector takes an array and multiplies every element by five (like in all of the examples), this package _will slow your code down_. In situations where you're having performance issues with reselect and you're thinking about how to cache on an element level, this package is here for you.
