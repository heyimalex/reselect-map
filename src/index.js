import { createSelectorCreator, defaultMemoize } from "reselect";
import { memoizeMap, memoizeList } from "./memoize";

export { memoizeMap, memoizeList };

export const arrayMemoize = (fn, equalityCheck) =>
  memoizeList(fn, {
    equalityCheck,
    mapper(arr, callback) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
      }
      return result;
    },
  });

export const objectMemoize = (fn, equalityCheck) =>
  memoizeMap(fn, {
    equalityCheck,
    unique: true,
    mapper(obj, callback) {
      const result = {};
      Object.keys(obj).forEach((key) => {
        result[key] = callback(key, obj[key]);
      });
      return result;
    },
  });

export const listMemoize = (fn, equalityCheck) =>
  memoizeList(fn, {
    equalityCheck,
    mapper(mapable, callback) {
      return mapable.map(callback);
    },
  });

export const mapMemoize = (fn, equalityCheck) =>
  memoizeMap(fn, {
    equalityCheck,
    mapper(mapable, callback) {
      return mapable.map((v, k) => callback(k, v));
    },
  });

// reselect's createSelectorCreator will use the passed memoization function
// for wrapping the result function, but will also (as of v4.0.0) use it to
// memoize the actual selector. Unfortunately our specialized mapped
// memoization functions won't work for general purpose memoization, so this
// breaks.
//
// At the time of writing (reselect v4.0.0) the memoizeOptions passed to
// createSelectorCreator are _only_ passed through to the memoize that wraps
// the result func. We can use this param to determine whether to use our
// special memoize, or to use reselect's defaultMemoize.
//
// In this way we make createSelectorCreator use our mapped memoize for
// wrapping the result func and defaultMemoize for wrapping the selector. It
// sucks that we're relying on an implementation detail but I'll be back to fix
// this code again whenever it breaks :)
export function createMappedSelectorCreator(memoize, ...memoizeOptions) {
  return createSelectorCreator((fn, mapmem) => {
    if (mapmem === true) {
      return memoize(fn, ...memoizeOptions);
    } else {
      return defaultMemoize(fn, ...memoizeOptions);
    }
  }, true);
}

export const createArraySelector = createMappedSelectorCreator(arrayMemoize);
export const createObjectSelector = createMappedSelectorCreator(objectMemoize);
export const createListSelector = createMappedSelectorCreator(listMemoize);
export const createMapSelector = createMappedSelectorCreator(mapMemoize);

export const createArraySelectorCreator = (equalityCheck) =>
  createMappedSelectorCreator(arrayMemoize, equalityCheck);
export const createObjectSelectorCreator = (equalityCheck) =>
  createMappedSelectorCreator(objectMemoize, equalityCheck);
export const createListSelectorCreator = (equalityCheck) =>
  createMappedSelectorCreator(listMemoize, equalityCheck);
export const createMapSelectorCreator = (equalityCheck) =>
  createMappedSelectorCreator(mapMemoize, equalityCheck);
