import chai from 'chai'
import Immutable from 'immutable'

import {
  createArraySelector,
  createObjectSelector,
  createListSelector,
  createMapSelector,
} from '../src'

const assert = chai.assert

suite('createArraySelector', () => {

  test('basic array selector', () => {
    const sel = createArraySelector(
      state => state,
      (element) => element * 5
    )

    assert.deepEqual(sel([1, 2, 3, 4]), [5, 10, 15, 20])
    assert.deepEqual(sel([1, 2, 3, 4]), [5, 10, 15, 20])
    assert.equal(sel.recomputations(), 4)

    assert.deepEqual(sel([2, 2, 2, 2]), [10, 10, 10, 10])
    assert.equal(sel.recomputations(), 4)

    assert.deepEqual(sel([1, 1, 1, 1]), [5, 5, 5, 5])
    assert.equal(sel.recomputations(), 5)

    assert.deepEqual(sel([1, 2]), [5, 10])
    assert.equal(sel.recomputations(), 6)

    assert.deepEqual(sel([3, 4]), [15, 20])
    assert.equal(sel.recomputations(), 8)

    assert.deepEqual(sel([]), [])
    assert.equal(sel.recomputations(), 8)

    assert.deepEqual(sel([1, 2]), [5, 10])
    assert.equal(sel.recomputations(), 10)
  })

  test('another argument change', () => {
    const sel = createArraySelector(
      state => state.numbers,
      state => state.mul1,
      state => state.mul2,
      (element, mul1, mul2) => element * mul1 * mul2
    )

    let state = {
      numbers: [1, 2, 3, 4],
      mul1: 1,
      mul2: 1,
    }

    assert.deepEqual(sel(state), [1, 2, 3, 4])
    assert.equal(sel.recomputations(), 4)

    assert.deepEqual(sel(state), [1, 2, 3, 4])
    assert.equal(sel.recomputations(), 4)

    state.numbers = [1, 2, 3, 4]
    assert.deepEqual(sel(state), [1, 2, 3, 4])
    assert.equal(sel.recomputations(), 4)

    state.mul1 = 2;
    assert.deepEqual(sel(state), [2, 4, 6, 8])
    assert.equal(sel.recomputations(), 8)

    state.mul1 = 1;
    state.mul2 = 2;
    assert.deepEqual(sel(state), [2, 4, 6, 8])
    assert.equal(sel.recomputations(), 12)

    state.numbers = [2, 3, 4, 5]
    assert.deepEqual(sel(state), [4, 6, 8, 10])
    assert.equal(sel.recomputations(), 13)
  })

})

suite('createObjectSelector', () => {

  test('basic object selector', () => {
    const sel = createObjectSelector(
      state => state,
      (element) => element * 5
    )

    assert.deepEqual(sel({ a: 1, b: 2 }), { a: 5, b: 10 })
    assert.equal(sel.recomputations(), 2)

    const state = { a: 1, b: 2 }
    assert.deepEqual(sel(state), { a: 5, b: 10 })
    assert.deepEqual(sel(state), { a: 5, b: 10 })
    assert.equal(sel.recomputations(), 2)

    assert.deepEqual(sel({ a: 2, b: 1 }), { a: 10, b: 5 })
    assert.equal(sel.recomputations(), 4)

    assert.deepEqual(sel({ a: 1, b: 1 }), { a: 5, b: 5 })
    assert.equal(sel.recomputations(), 5)

    assert.deepEqual(sel({ a: 1, b: 1, c: 1 }), { a: 5, b: 5, c: 5 })
    assert.equal(sel.recomputations(), 6)

    assert.deepEqual(sel({ a: 1 }), { a: 5 })
    assert.equal(sel.recomputations(), 6)
  })

  test('another argument change', () => {
    const sel = createObjectSelector(
      state => state.numbers,
      state => state.mul1,
      state => state.mul2,
      (element, mul1, mul2) => element * mul1 * mul2
    )

    let state = {
      numbers: { a: 1, b: 2 },
      mul1: 1,
      mul2: 1,
    }

    assert.deepEqual(sel(state), { a: 1, b: 2 })
    assert.equal(sel.recomputations(), 2)

    assert.deepEqual(sel(state), { a: 1, b: 2 })
    assert.equal(sel.recomputations(), 2)

    state.numbers = { a: 1, b: 2 }
    assert.deepEqual(sel(state), { a: 1, b: 2 })
    assert.equal(sel.recomputations(), 2)

    state.mul1 = 2;
    assert.deepEqual(sel(state), { a: 2, b: 4 })
    assert.equal(sel.recomputations(), 4)

    state.mul1 = 1;
    state.mul2 = 2;
    assert.deepEqual(sel(state), { a: 2, b: 4 })
    assert.equal(sel.recomputations(), 6)

    state.numbers = { a: 1, b: 1 }
    assert.deepEqual(sel(state), { a: 2, b: 2 })
    assert.equal(sel.recomputations(), 7)
  })

})

suite('createListSelector', () => {

  test('basic list selector', () => {
    const sel = createListSelector(
      state => state,
      (element) => element * 5
    )

    assert.deepEqual(sel([1, 2, 3, 4]), [5, 10, 15, 20])
    assert.deepEqual(sel([1, 2, 3, 4]), [5, 10, 15, 20])
    assert.equal(sel.recomputations(), 4)

    assert.deepEqual(sel([2, 2, 2, 2]), [10, 10, 10, 10])
    assert.equal(sel.recomputations(), 4)

    assert.deepEqual(sel([1, 1, 1, 1]), [5, 5, 5, 5])
    assert.equal(sel.recomputations(), 5)

    assert.deepEqual(sel([1, 2]), [5, 10])
    assert.equal(sel.recomputations(), 6)

    assert.deepEqual(sel([3, 4]), [15, 20])
    assert.equal(sel.recomputations(), 8)

    assert.deepEqual(sel([]), [])
    assert.equal(sel.recomputations(), 8)

    assert.deepEqual(sel([1, 2]), [5, 10])
    assert.equal(sel.recomputations(), 10)
  })

  test('another argument change', () => {
    const sel = createListSelector(
      state => state.numbers,
      state => state.mul1,
      state => state.mul2,
      (element, mul1, mul2) => element * mul1 * mul2
    )

    let state = {
      numbers: [1, 2, 3, 4],
      mul1: 1,
      mul2: 1,
    }

    assert.deepEqual(sel(state), [1, 2, 3, 4])
    assert.equal(sel.recomputations(), 4)

    assert.deepEqual(sel(state), [1, 2, 3, 4])
    assert.equal(sel.recomputations(), 4)

    state.numbers = [1, 2, 3, 4]
    assert.deepEqual(sel(state), [1, 2, 3, 4])
    assert.equal(sel.recomputations(), 4)

    state.mul1 = 2;
    assert.deepEqual(sel(state), [2, 4, 6, 8])
    assert.equal(sel.recomputations(), 8)

    state.mul1 = 1;
    state.mul2 = 2;
    assert.deepEqual(sel(state), [2, 4, 6, 8])
    assert.equal(sel.recomputations(), 12)

    state.numbers = [2, 3, 4, 5]
    assert.deepEqual(sel(state), [4, 6, 8, 10])
    assert.equal(sel.recomputations(), 13)
  })
})

suite('createMapSelector', () => {

  test('basic map selector', () => {
    const sel = createMapSelector(
      state => state,
      (element) => element * 5
    )

    assert.isTrue(Immutable.is(
      sel(Immutable.Map({ a: 1, b: 2 })),
      Immutable.Map({ a: 5, b: 10 })
    ))
    assert.equal(sel.recomputations(), 2)

    assert.isTrue(Immutable.is(
      sel(Immutable.Map({ a: 1, b: 2 })),
      Immutable.Map({ a: 5, b: 10 })
    ))
    assert.equal(sel.recomputations(), 2)

    assert.isTrue(Immutable.is(
      sel(Immutable.Map({ a: 3, b: 4 })),
      Immutable.Map({ a: 15, b: 20 })
    ))
    assert.equal(sel.recomputations(), 4)
  })

})