import { createSelectorCreator } from 'reselect'
import { memoizeMap, memoizeList } from './memoize'

export const createArraySelector = createSelectorCreator(memoizeList, {
  mapper(arr, callback) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
      result[i] = callback(arr[i])
    }
    return result;
  },
})

export const createObjectSelector = createSelectorCreator(memoizeMap, {
  unique: true,
  mapper(obj, callback) {
    const result = {}
    Object.keys(obj).forEach((key) => {
      result[key] = callback(key, obj[key])
    })
    return result;
  },
});

export const createListSelector = createSelectorCreator(memoizeList, {
  mapper(mapable, callback) {
    return mapable.map(callback)
  },
})

export const createMapSelector = createSelectorCreator(memoizeMap, {
  mapper(mapable, callback) {
    return mapable.map((v, k) => callback(k, v))
  },
})
