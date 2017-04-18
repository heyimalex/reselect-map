import { createSelectorCreator } from "reselect";
import { memoizeMap, memoizeList } from "./memoize";

export const arrayMemoize = (fn, equalityCheck) =>
  memoizeList(fn, {
    equalityCheck,
    mapper(arr, callback) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
      }
      return result;
    }
  });

export const objectMemoize = (fn, equalityCheck) =>
  memoizeMap(fn, {
    equalityCheck,
    unique: true,
    mapper(obj, callback) {
      const result = {};
      Object.keys(obj).forEach(key => {
        result[key] = callback(key, obj[key]);
      });
      return result;
    }
  });

export const listMemoize = (fn, equalityCheck) =>
  memoizeList(fn, {
    equalityCheck,
    mapper(mapable, callback) {
      return mapable.map(callback);
    }
  });

export const mapMemoize = (fn, equalityCheck) =>
  memoizeMap(fn, {
    equalityCheck,
    mapper(mapable, callback) {
      return mapable.map((v, k) => callback(k, v));
    }
  });

export const createArraySelector = createSelectorCreator(arrayMemoize);
export const createObjectSelector = createSelectorCreator(objectMemoize);
export const createListSelector = createSelectorCreator(listMemoize);
export const createMapSelector = createSelectorCreator(mapMemoize);
