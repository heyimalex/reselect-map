import {
  createArraySelector,
  createObjectSelector,
  createArraySelectorCreator,
  createMappedSelectorCreator,
  memoizeMap
} from "../src/index";

function testArraySelector() {
  type State = {
    items: number[];
    mul: number;
  };

  const selector = createArraySelector(
    (state: State) => state.items,
    (state: State) => state.mul,
    (elem, mul) => elem * mul
  );

  const foo: number[] = selector({ items: [1, 2, 3], mul: 5 });

  // typings:expect-error
  const bar: number = selector({ items: [1, 2, 3], mul: 5 });

  // typings:expect-error
  createArraySelector(
    (state: State) => state.mul,
    (state: State) => state.items,
    (elem, mul) => elem * mul
  );
}

function testObjectSelector() {
  type State = {
    items: { [key: string]: number };
    mul: number;
  };

  const selector = createObjectSelector(
    (state: State) => state.items,
    (state: State) => state.mul,
    (elem, mul, key) => `${key}:${elem * mul}`
  );

  const foo: { [key: string]: string } = selector({
    items: { a: 1, b: 2 },
    mul: 5
  });

  // typings:expect-error
  const bar: string = selector({ items: { a: 1, b: 2 }, mul: 5 });

  // typings:expect-error
  createObjectSelector(
    (state: State) => state.mul,
    (state: State) => state.items,
    (elem, mul) => elem * mul
  );
}

function testArraySelectorCreator() {
  type State = {
    items: number[];
    mul: number;
  };

  function customEqualityFn<T>(a: T, b: T): boolean {
    return true;
  }

  const selector = createArraySelectorCreator(customEqualityFn)(
    (state: State) => state.items,
    (state: State) => state.mul,
    (elem, mul) => elem * mul
  );

  const foo: number[] = selector({ items: [1, 2, 3], mul: 5 });
}

const arrayWithIndexMemoize = <F extends Function, T> (fn: F, equalityCheck: <T>(a: T, b: T) => boolean) =>
  memoizeMap(fn, {
    equalityCheck,
    mapper: (arr: Array<T>, callback: (key: number, value: T) => T) => {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        result[i] = callback(i, arr[i]);
      }
      return result;
    }
  });

createMappedSelectorCreator(arrayWithIndexMemoize);
