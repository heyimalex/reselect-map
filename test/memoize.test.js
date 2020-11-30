import { memoizeList, memoizeMap } from "../src/memoize";

describe("memoizeList", () => {
  test("basic memoizeList", () => {
    let recomputations = 0;
    let func = (v) => {
      recomputations++;
      return v * 5;
    };
    let mapper = (array, callback) => array.map(callback);
    const mem = memoizeList(func, { mapper });

    expect(mem([1, 2, 3, 4])).toEqual([5, 10, 15, 20]);
    expect(mem([1, 2, 3, 4])).toEqual([5, 10, 15, 20]);
    expect(recomputations).toBe(4);

    expect(mem([2, 2, 2, 2])).toEqual([10, 10, 10, 10]);
    expect(recomputations).toBe(4);

    expect(mem([1, 1, 1, 1])).toEqual([5, 5, 5, 5]);
    expect(recomputations).toBe(5);

    expect(mem([1, 2])).toEqual([5, 10]);
    expect(recomputations).toBe(6);

    expect(mem([3, 4])).toEqual([15, 20]);
    expect(recomputations).toBe(8);

    expect(mem([])).toEqual([]);
    expect(recomputations).toBe(8);

    expect(mem([1, 2])).toEqual([5, 10]);
    expect(recomputations).toBe(10);
  });

  test("another argument change", () => {
    let recomputations = 0;
    let func = (v, mul) => {
      recomputations++;
      return v * mul;
    };
    let mapper = (array, callback) => array.map(callback);
    const mem = memoizeList(func, { mapper });

    expect(mem([1, 2, 3, 4], 5)).toEqual([5, 10, 15, 20]);
    expect(mem([1, 2, 3, 4], 5)).toEqual([5, 10, 15, 20]);
    expect(recomputations).toBe(4);

    expect(mem([1, 2, 3, 4], 2)).toEqual([2, 4, 6, 8]);
    expect(recomputations).toBe(8);
  });
});

describe("memoizeMap", () => {
  test("basic memoizeMap", () => {
    let recomputations = 0;
    let func = (v) => {
      recomputations++;
      return v * 5;
    };
    let mapper = (obj, callback) => {
      const result = {};
      Object.keys(obj).forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = callback(key, obj[key]);
        }
      });
      return result;
    };
    const mem = memoizeMap(func, { mapper });

    expect(mem({ a: 1, b: 2 })).toEqual({ a: 5, b: 10 });
    expect(mem({ a: 1, b: 2 })).toEqual({ a: 5, b: 10 });
    expect(recomputations).toBe(2);

    expect(mem({ a: 2, b: 2 })).toEqual({ a: 10, b: 10 });
    expect(recomputations).toBe(3);

    expect(mem({ a: 2, b: 3 })).toEqual({ a: 10, b: 15 });
    expect(recomputations).toBe(4);

    expect(mem({})).toEqual({});
    expect(recomputations).toBe(4);

    expect(mem({ a: 1, b: 2 })).toEqual({ a: 5, b: 10 });
    expect(recomputations).toBe(6);
  });

  test("another argument change", () => {
    let recomputations = 0;
    let func = (v, mul) => {
      recomputations++;
      return v * mul;
    };
    let mapper = (obj, callback) => {
      const result = {};
      Object.keys(obj).forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = callback(key, obj[key]);
        }
      });
      return result;
    };
    const mem = memoizeMap(func, { mapper });

    expect(mem({ a: 1, b: 2 }, 5)).toEqual({ a: 5, b: 10 });
    expect(mem({ a: 1, b: 2 }, 5)).toEqual({ a: 5, b: 10 });
    expect(recomputations).toBe(2);

    expect(mem({ a: 1, b: 2 }, 2)).toEqual({ a: 2, b: 4 });
    expect(recomputations).toBe(4);
  });

  test("with key argument", () => {
    let recomputations = 0;
    let func = (v, mul, k) => {
      recomputations++;
      return `${k}:${v * mul}`;
    };
    let mapper = (obj, callback) => {
      const result = {};
      Object.keys(obj).forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = callback(key, obj[key]);
        }
      });
      return result;
    };
    const mem = memoizeMap(func, { mapper });

    expect(mem({ a: 1, b: 2 }, 5)).toEqual({ a: "a:5", b: "b:10" });
    expect(mem({ a: 1, b: 2 }, 5)).toEqual({ a: "a:5", b: "b:10" });
    expect(recomputations).toBe(2);

    expect(mem({ a: 1, b: 2 }, 2)).toEqual({ a: "a:2", b: "b:4" });
    expect(recomputations).toBe(4);
  });
});
