export function memoizeMap(
  fn,
  { mapper, unique = false, equalityCheck = defaultEqualityCheck }
) {
  return memoizeWithCache(
    new CacheMap(fn, mapper, unique, equalityCheck),
    equalityCheck
  );
}

export function memoizeList(
  fn,
  { mapper, unique = false, equalityCheck = defaultEqualityCheck }
) {
  return memoizeWithCache(
    new CacheSet(fn, mapper, unique, equalityCheck),
    equalityCheck
  );
}

function defaultEqualityCheck(a, b) {
  return a === b;
}

function memoizeWithCache(cache, equalityCheck) {
  let lastInput = null;
  let lastArgs = null;
  let lastResult = null;

  return (input, ...args) => {
    const argsHaveChanged =
      lastArgs === null ||
      args.length !== lastArgs.length ||
      args.some((arg, idx) => !equalityCheck(arg, lastArgs[idx]));

    if (argsHaveChanged) {
      cache.clear();
    } else if (equalityCheck(input, lastInput)) {
      return lastResult;
    }

    lastInput = input;
    lastArgs = args;
    lastResult = cache.compute(input, args);
    return lastResult;
  };
}

// CacheMap maintains a cache that maps keys to inputs and outputs. A nice
// way to think of it is as a collection of independent memoizing functions.
// The key is used to look up the memoization function
class CacheMap {
  constructor(fn, mapper, unique, equalityCheck) {
    this.fn = fn;
    this.mapper = mapper;
    this.unique = unique;
    this.equalityCheck = equalityCheck;

    this.cache = null;
  }

  clear() {
    this.cache = null;
  }

  compute(input, args) {
    const { fn, unique, equalityCheck } = this;

    const prevCache = this.cache;
    const nextCache = new Map();

    const callback = (key, value) => {
      if (!unique) {
        const record = nextCache.get(key);
        if (record !== undefined) {
          return record.result;
        }
      }

      if (prevCache !== null) {
        const record = prevCache.get(key);
        if (record !== undefined && equalityCheck(record.value, value)) {
          nextCache.set(key, record);
          return record.result;
        }
      }

      const result = fn(value, ...args, key);
      nextCache.set(key, { value, result });
      return result;
    };

    const result = this.mapper(input, callback);
    this.cache = nextCache;
    return result;
  }
}

// CacheSet maintains a cache that maps inputs directly to outputs. Consider
// each input as a _set_ of values. From computation to computation: all new
// elements are computed, all removed elements are dropped, and the
// intersection just stays in the cache.
class CacheSet {
  constructor(fn, mapper, unique, equalityCheck) {
    this.fn = fn;
    this.mapper = mapper;
    this.unique = unique;

    this.makemap =
      equalityCheck === defaultEqualityCheck
        ? () => new Map()
        : () => new CustomEqualityMap(equalityCheck);

    this.cache = null;
  }

  clear() {
    this.cache = null;
  }

  compute(input, args) {
    const { fn, unique } = this;

    const prevCache = this.cache;
    const nextCache = this.makemap();

    const callback = value => {
      if (!unique) {
        const result = nextCache.get(value);
        if (result !== undefined) {
          return result;
        }
      }

      if (prevCache !== null) {
        const result = prevCache.get(value);
        if (result !== undefined) {
          nextCache.set(value, result);
          return result;
        }
      }

      const result = fn(value, ...args);
      nextCache.set(value, result);
      return result;
    };

    const result = this.mapper(input, callback);
    this.cache = nextCache;
    return result;
  }
}

// CacheSet would _ideally_ use a native map to maintain the internal mapping
// from inputs to outputs, but unfortunately you cannot use a native map when
// you have a custom equality function.
//
// CustomEqualityMap was written to replace the internal map in that exact
// situation. It's very customized for our use case, and necessarily less
// performant than a native map, but it's the best solution I could think of,
// and common case performance shouldn't suffer much.
//
// The only notably slower things are cache misses and situations where the
// key has changed but still satisfies the equality check.
class CustomEqualityMap {
  constructor(equalityCheck) {
    this.equalityCheck = equalityCheck;
    this.map = new Map();
    this.keys = [];
  }

  get(key) {
    // Search the internal map. Allows us to avoid doing a more expensive
    // lookup when the key satisfies native equality, likely the common case.
    let value = this.map.get(key);
    if (value !== undefined) {
      return value;
    }

    // Linearly search through all keys.
    const { keys, equalityCheck } = this;
    for (let i = 0; i < keys.length; i++) {
      if (equalityCheck(key, keys[i])) {
        value = this.map.get(keys[i]);
        this.map.set(key, value);
        return value;
      }
    }
    return undefined;
  }

  set(key, value) {
    // This will only be called when the key does not exist, so we can avoid
    // doing an existence check.
    this.map.set(key, value);
    this.keys.push(key);
  }
}
