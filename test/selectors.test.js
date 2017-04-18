import Immutable from 'immutable'

import {
  createArraySelector,
  createObjectSelector,
  createListSelector,
  createMapSelector,
} from '../src'

describe('createArraySelector', () => {

  test('basic array selector', () => {
    const sel = createArraySelector(
      state => state,
      (element) => element * 5
    )

    expect(sel([1, 2, 3, 4])).toEqual([5, 10, 15, 20])
    expect(sel([1, 2, 3, 4])).toEqual([5, 10, 15, 20])
    expect(sel.recomputations()).toBe(4)

    expect(sel([2, 2, 2, 2])).toEqual([10, 10, 10, 10])
    expect(sel.recomputations()).toBe(4)

    expect(sel([1, 1, 1, 1])).toEqual([5, 5, 5, 5])
    expect(sel.recomputations()).toBe(5)

    expect(sel([1, 2])).toEqual([5, 10])
    expect(sel.recomputations()).toBe(6)

    expect(sel([3, 4])).toEqual([15, 20])
    expect(sel.recomputations()).toBe(8)

    expect(sel([])).toEqual([])
    expect(sel.recomputations()).toBe(8)

    expect(sel([1, 2])).toEqual([5, 10])
    expect(sel.recomputations()).toBe(10)
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

    expect(sel(state)).toEqual([1, 2, 3, 4])
    expect(sel.recomputations()).toBe(4)

    expect(sel(state)).toEqual([1, 2, 3, 4])
    expect(sel.recomputations()).toBe(4)

    state = Object.assign({}, state, {
      numbers: [1, 2, 3, 4]
    });
    expect(sel(state)).toEqual([1, 2, 3, 4])
    expect(sel.recomputations()).toBe(4)

    state = Object.assign({}, state, {
      mul1: 2,
    });
    expect(sel(state)).toEqual([2, 4, 6, 8])
    expect(sel.recomputations()).toBe(8)

    state = Object.assign({}, state, {
      mul1: 1,
      mul2: 2,
    });
    expect(sel(state)).toEqual([2, 4, 6, 8])
    expect(sel.recomputations()).toBe(12)

    state = Object.assign({}, state, {
      numbers: [2, 3, 4, 5]
    });
    expect(sel(state)).toEqual([4, 6, 8, 10])
    expect(sel.recomputations()).toBe(13)
  })

})

describe('createObjectSelector', () => {

  test('basic object selector', () => {
    const sel = createObjectSelector(
      state => state,
      (element) => element * 5
    )

    expect(sel({ a: 1, b: 2 })).toEqual({ a: 5, b: 10 })
    expect(sel.recomputations()).toBe(2)

    const state = { a: 1, b: 2 }
    expect(sel(state)).toEqual({ a: 5, b: 10 })
    expect(sel(state)).toEqual({ a: 5, b: 10 })
    expect(sel.recomputations()).toBe(2)

    expect(sel({ a: 2, b: 1 })).toEqual({ a: 10, b: 5 })
    expect(sel.recomputations()).toBe(4)

    expect(sel({ a: 1, b: 1 })).toEqual({ a: 5, b: 5 })
    expect(sel.recomputations()).toBe(5)

    expect(sel({ a: 1, b: 1, c: 1 })).toEqual({ a: 5, b: 5, c: 5 })
    expect(sel.recomputations()).toBe(6)

    expect(sel({ a: 1 })).toEqual({ a: 5 })
    expect(sel.recomputations()).toBe(6)
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

    expect(sel(state)).toEqual({ a: 1, b: 2 })
    expect(sel.recomputations()).toBe(2)

    expect(sel(state)).toEqual({ a: 1, b: 2 })
    expect(sel.recomputations()).toBe(2)

    state = Object.assign({}, state, {
      numbers: { a: 1, b: 2 },
    });
    expect(sel(state)).toEqual({ a: 1, b: 2 })
    expect(sel.recomputations()).toBe(2)

    state = Object.assign({}, state, {
      mul1: 2,
    });
    expect(sel(state)).toEqual({ a: 2, b: 4 })
    expect(sel.recomputations()).toBe(4)

    state = Object.assign({}, state, {
      mul1: 1,
      mul2: 2,
    });
    expect(sel(state)).toEqual({ a: 2, b: 4 })
    expect(sel.recomputations()).toBe(6)

    state = Object.assign({}, state, {
      numbers: { a: 1, b: 1 },
    });
    expect(sel(state)).toEqual({ a: 2, b: 2 })
    expect(sel.recomputations()).toBe(7)
  })

  test('with key argument', () => {
    const sel = createObjectSelector(
      state => state.numbers,
      state => state.mul1,
      state => state.mul2,
      (element, mul1, mul2, key) => `${key}:${element * mul1 * mul2}`
    )

    let state = {
      numbers: { a: 1, b: 2 },
      mul1: 1,
      mul2: 1,
    }

    expect(sel(state)).toEqual({ a: 'a:1', b: 'b:2' })
    expect(sel.recomputations()).toBe(2)

    expect(sel(state)).toEqual({ a: 'a:1', b: 'b:2' })
    expect(sel.recomputations()).toBe(2)

    state = Object.assign({}, state, {
      numbers: { a: 1, b: 2 },
    });
    expect(sel(state)).toEqual({ a: 'a:1', b: 'b:2' })
    expect(sel.recomputations()).toBe(2)

    state = Object.assign({}, state, {
      mul1: 2,
    });
    expect(sel(state)).toEqual({ a: 'a:2', b: 'b:4' })
    expect(sel.recomputations()).toBe(4)

    state = Object.assign({}, state, {
      mul1: 1,
      mul2: 2,
    });
    expect(sel(state)).toEqual({ a: 'a:2', b: 'b:4' })
    expect(sel.recomputations()).toBe(6)

    state = Object.assign({}, state, {
      numbers: { a: 1, b: 1 }
    });
    expect(sel(state)).toEqual({ a: 'a:2', b: 'b:2' })
    expect(sel.recomputations()).toBe(7)
  })

})

describe('createListSelector', () => {

  test('basic list selector', () => {
    const sel = createListSelector(
      state => state,
      (element) => element * 5
    )

    expect(sel([1, 2, 3, 4])).toEqual([5, 10, 15, 20])
    expect(sel([1, 2, 3, 4])).toEqual([5, 10, 15, 20])
    expect(sel.recomputations()).toBe(4)

    expect(sel([2, 2, 2, 2])).toEqual([10, 10, 10, 10])
    expect(sel.recomputations()).toBe(4)

    expect(sel([1, 1, 1, 1])).toEqual([5, 5, 5, 5])
    expect(sel.recomputations()).toBe(5)

    expect(sel([1, 2])).toEqual([5, 10])
    expect(sel.recomputations()).toBe(6)

    expect(sel([3, 4])).toEqual([15, 20])
    expect(sel.recomputations()).toBe(8)

    expect(sel([])).toEqual([])
    expect(sel.recomputations()).toBe(8)

    expect(sel([1, 2])).toEqual([5, 10])
    expect(sel.recomputations()).toBe(10)
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

    expect(sel(state)).toEqual([1, 2, 3, 4])
    expect(sel.recomputations()).toBe(4)

    expect(sel(state)).toEqual([1, 2, 3, 4])
    expect(sel.recomputations()).toBe(4)

    state = Object.assign({}, state, {
      numbers: [1, 2, 3, 4]
    });
    expect(sel(state)).toEqual([1, 2, 3, 4])
    expect(sel.recomputations()).toBe(4)

    state = Object.assign({}, state, {
      mul1: 2
    });
    expect(sel(state)).toEqual([2, 4, 6, 8])
    expect(sel.recomputations()).toBe(8)

    state = Object.assign({}, state, {
      mul1: 1,
      mul2: 2,
    });
    expect(sel(state)).toEqual([2, 4, 6, 8])
    expect(sel.recomputations()).toBe(12)

    state = Object.assign({}, state, {
      numbers: [2, 3, 4, 5]
    });
    expect(sel(state)).toEqual([4, 6, 8, 10])
    expect(sel.recomputations()).toBe(13)
  })
})

describe('createMapSelector', () => {

  test('basic map selector', () => {
    const sel = createMapSelector(
      state => state,
      (element) => element * 5
    )

    expect(Immutable.is(
      sel(Immutable.Map({ a: 1, b: 2 })),
      Immutable.Map({ a: 5, b: 10 })
    )).toBeTruthy()
    expect(sel.recomputations()).toBe(2)

    expect(Immutable.is(
      sel(Immutable.Map({ a: 1, b: 2 })),
      Immutable.Map({ a: 5, b: 10 })
    )).toBeTruthy()
    expect(sel.recomputations()).toBe(2)

    expect(Immutable.is(
      sel(Immutable.Map({ a: 3, b: 4 })),
      Immutable.Map({ a: 15, b: 20 })
    )).toBeTruthy()
    expect(sel.recomputations()).toBe(4)
  })

})
