import chai from 'chai'
import { memoizeList, memoizeMap } from '../src/memoize'

const assert = chai.assert

suite('memoizeList', () => {

  test('basic memoizeList', () => {
    let recomputations = 0;
    let func = (v) => {
      recomputations++;
      return v * 5;
    };
    let mapper = (array, callback) => array.map(callback)
    const mem = memoizeList(func, { mapper })

    assert.deepEqual(mem([1, 2, 3, 4]), [5, 10, 15, 20])
    assert.deepEqual(mem([1, 2, 3, 4]), [5, 10, 15, 20])
    assert.equal(recomputations, 4)

    assert.deepEqual(mem([2, 2, 2, 2]), [10, 10, 10, 10])
    assert.equal(recomputations, 4)

    assert.deepEqual(mem([1, 1, 1, 1]), [5, 5, 5, 5])
    assert.equal(recomputations, 5)

    assert.deepEqual(mem([1, 2]), [5, 10])
    assert.equal(recomputations, 6)

    assert.deepEqual(mem([3, 4]), [15, 20])
    assert.equal(recomputations, 8)

    assert.deepEqual(mem([]), [])
    assert.equal(recomputations, 8)

    assert.deepEqual(mem([1, 2]), [5, 10])
    assert.equal(recomputations, 10)
  })

  test('another argument change', () => {
    let recomputations = 0;
    let func = (v, mul) => {
      recomputations++;
      return v * mul;
    };
    let mapper = (array, callback) => array.map(callback)
    const mem = memoizeList(func, { mapper })

    assert.deepEqual(mem([1, 2, 3, 4], 5), [5, 10, 15, 20])
    assert.deepEqual(mem([1, 2, 3, 4], 5), [5, 10, 15, 20])
    assert.equal(recomputations, 4)

    assert.deepEqual(mem([1, 2, 3, 4], 2), [2, 4, 6, 8])
    assert.equal(recomputations, 8)
  })

})

suite('memoizeMap', () => {

  test('basic memoizeMap', () => {
    let recomputations = 0;
    let func = (v) => {
      recomputations++;
      return v * 5;
    };
    let mapper = (obj, callback) => {
      const result = {}
      Object.keys(obj).forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = callback(key, obj[key])
        }
      })
      return result;
    }
    const mem = memoizeMap(func, { mapper })

    assert.deepEqual(mem({ a: 1, b: 2 }), { a: 5, b: 10 })
    assert.deepEqual(mem({ a: 1, b: 2 }), { a: 5, b: 10 })
    assert.equal(recomputations, 2)

    assert.deepEqual(mem({ a: 2, b: 2 }), { a: 10, b: 10 })
    assert.equal(recomputations, 3)

    assert.deepEqual(mem({ a: 2, b: 3 }), { a: 10, b: 15 })
    assert.equal(recomputations, 4)

    assert.deepEqual(mem({}), {})
    assert.equal(recomputations, 4)

    assert.deepEqual(mem({ a: 1, b: 2 }), { a: 5, b: 10 })
    assert.equal(recomputations, 6)
  })

  test('another argument change', () => {
    let recomputations = 0;
    let func = (v, mul) => {
      recomputations++;
      return v * mul;
    };
    let mapper = (obj, callback) => {
      const result = {}
      Object.keys(obj).forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = callback(key, obj[key])
        }
      })
      return result;
    }
    const mem = memoizeMap(func, { mapper })

    assert.deepEqual(mem({ a: 1, b: 2 }, 5), { a: 5, b: 10 })
    assert.deepEqual(mem({ a: 1, b: 2 }, 5), { a: 5, b: 10 })
    assert.equal(recomputations, 2)

    assert.deepEqual(mem({ a: 1, b: 2 }, 2), { a: 2, b: 4 })
    assert.equal(recomputations, 4)
  })

})
