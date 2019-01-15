import {
  createArraySelector,
  createObjectSelector,
  createListSelector,
  createMapSelector,
  Mapper,
  KeyMapper
} from "../src/index";

import { List, Map } from "immutable";

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

function testListSelector() {
  type State = {
    items: List<number>;
    mul: number;
  };

  const selector = createListSelector(
    (state: State) => state.items as Mapper<number, List<number>>,
    (state: State) => state.mul,
    (elem, mul) => elem * mul
  );
}

function testMapSelector() {
  type State = {
    items: Map<string, number>;
    mul: number;
  };

  const selector = createListSelector(
    (state: State) =>
      state.items as KeyMapper<number, string, Map<string, number>>,
    (state: State) => state.mul,
    (elem, mul) => elem * mul
  );
}
