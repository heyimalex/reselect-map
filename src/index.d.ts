import {
  Selector,
  ParametricSelector,
  OutputSelector,
  OutputParametricSelector
} from "reselect";

export as namespace ReselectMap;

type ObjectMap<T> = { [key: string]: T } | { [key: number]: T };

export interface Mapper<E, RT> {
  map<T>(mapper: (value: E) => T): RT;
}

type MapperElementType<M extends Mapper<any, any>> = M extends {
  map(mapper: (elem: infer E) => any): any;
}
  ? E
  : never;

type MapperReturnType<M extends Mapper<any, any>> = M extends {
  map(mapper: (elem: any) => any): infer RT;
}
  ? RT
  : never;

export interface KeyMapper<E, K, RT> {
  map<T>(mapper: (value: E, key: K) => T): RT;
}

type KeyMapperElementType<M extends KeyMapper<any, any, any>> = M extends {
  map<T>(mapper: (value: infer E, key: any) => T): any;
}
  ? E
  : never;

type KeyMapperKeyType<M extends KeyMapper<any, any, any>> = M extends {
  map<T>(mapper: (value: any, key: infer K) => T): any;
}
  ? K
  : never;

type KeyMapperReturnType<M extends KeyMapper<any, any, any>> = M extends {
  map<T>(mapper: (value: any, key: any) => T): infer RT;
}
  ? RT
  : never;

/* 1 selector */

export function createArraySelector<S, E, T>(
  arraySelector: Selector<S, E[]>,
  combiner: (elem: E) => T
): OutputSelector<S, T[], (elem: E) => T>;

export function createArraySelector<S, E, T>(
  selectors: [Selector<S, E[]>],
  combiner: (elem: E) => T
): OutputSelector<S, T[], (elem: E) => T>;

export function createArraySelector<S, P, E, T>(
  arraySelector: ParametricSelector<S, P, E[]>,
  combiner: (elem: E) => T
): OutputParametricSelector<S, P, T[], (elem: E) => T>;

export function createArraySelector<S, P, E, T>(
  selectors: [ParametricSelector<S, P, E[]>],
  combiner: (elem: E) => T
): OutputParametricSelector<S, P, T[], (elem: E) => T>;

export function createObjectSelector<S, E, T>(
  objectSelector: Selector<S, ObjectMap<E>>,
  combiner: (elem: E, key: string) => T
): OutputSelector<S, ObjectMap<T>, (elem: E, key: string) => T>;

export function createObjectSelector<S, E, T>(
  selectors: [Selector<S, ObjectMap<E>>],
  combiner: (elem: E, key: string) => T
): OutputSelector<S, ObjectMap<T>, (elem: E, key: string) => T>;

export function createObjectSelector<S, P, E, T>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  combiner: (elem: E, key: string) => T
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, key: string) => T>;

export function createObjectSelector<S, P, E, T>(
  selectors: [ParametricSelector<S, P, ObjectMap<E>>],
  combiner: (elem: E, key: string) => T
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, key: string) => T>;

export function createListSelector<S, T, M extends Mapper<any, any>>(
  listSelector: Selector<S, M>,
  combiner: (elem: MapperElementType<M>) => T
): OutputSelector<S, MapperReturnType<M>, (elem: MapperElementType<M>) => T>;

export function createListSelector<S, T, M extends Mapper<any, any>>(
  selectors: [Selector<S, M>],
  combiner: (elem: MapperElementType<M>) => T
): OutputSelector<S, MapperReturnType<M>, (elem: MapperElementType<M>) => T>;

export function createListSelector<S, P, T, M extends Mapper<any, any>>(
  listSelector: ParametricSelector<S, P, M>,
  combiner: (elem: MapperElementType<M>) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>) => T
>;

export function createListSelector<S, P, T, M extends Mapper<any, any>>(
  selectors: [ParametricSelector<S, P, M>],
  combiner: (elem: MapperElementType<M>) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>) => T
>;

export function createMapSelector<S, T, M extends KeyMapper<any, any, any>, O>(
  mapSelector: Selector<S, M>,
  combiner: (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
>;

export function createMapSelector<S, T, M extends KeyMapper<any, any, any>, O>(
  selectors: [Selector<S, M>],
  combiner: (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O
>(
  mapSelector: ParametricSelector<S, P, M>,
  combiner: (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O
>(
  selectors: [ParametricSelector<S, P, M>],
  combiner: (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, key: KeyMapperKeyType<M>) => T
>;

/* 2 selectors */

export function createArraySelector<S, E, T, R2>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  combiner: (elem: E, res2: R2) => T
): OutputSelector<S, T[], (elem: E, res2: R2) => T>;

export function createArraySelector<S, E, T, R2>(
  selectors: [Selector<S, E[]>, Selector<S, R2>],
  combiner: (elem: E, res2: R2) => T
): OutputSelector<S, T[], (elem: E, res2: R2) => T>;

export function createArraySelector<S, P, E, T, R2>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  combiner: (elem: E, res2: R2) => T
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2) => T>;

export function createArraySelector<S, P, E, T, R2>(
  selectors: [ParametricSelector<S, P, E[]>, ParametricSelector<S, P, R2>],
  combiner: (elem: E, res2: R2) => T
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2) => T>;

export function createObjectSelector<S, E, T, R2>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  combiner: (elem: E, res2: R2, key: string) => T
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, key: string) => T>;

export function createObjectSelector<S, E, T, R2>(
  selectors: [Selector<S, ObjectMap<E>>, Selector<S, R2>],
  combiner: (elem: E, res2: R2, key: string) => T
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, key: string) => T>;

export function createObjectSelector<S, P, E, T, R2>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  combiner: (elem: E, res2: R2, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>
  ],
  combiner: (elem: E, res2: R2, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, key: string) => T
>;

export function createListSelector<S, T, M extends Mapper<any, any>, R2>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  combiner: (elem: MapperElementType<M>, res2: R2) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2) => T
>;

export function createListSelector<S, T, M extends Mapper<any, any>, R2>(
  selectors: [Selector<S, M>, Selector<S, R2>],
  combiner: (elem: MapperElementType<M>, res2: R2) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2) => T
>;

export function createListSelector<S, P, T, M extends Mapper<any, any>, R2>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  combiner: (elem: MapperElementType<M>, res2: R2) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2) => T
>;

export function createListSelector<S, P, T, M extends Mapper<any, any>, R2>(
  selectors: [ParametricSelector<S, P, M>, ParametricSelector<S, P, R2>],
  combiner: (elem: MapperElementType<M>, res2: R2) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, res2: R2, key: KeyMapperKeyType<M>) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2
>(
  selectors: [Selector<S, M>, Selector<S, R2>],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, res2: R2, key: KeyMapperKeyType<M>) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, res2: R2, key: KeyMapperKeyType<M>) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2
>(
  selectors: [ParametricSelector<S, P, M>, ParametricSelector<S, P, R2>],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (elem: KeyMapperElementType<M>, res2: R2, key: KeyMapperKeyType<M>) => T
>;

/* 3 selectors */

export function createArraySelector<S, E, T, R2, R3>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  combiner: (elem: E, res2: R2, res3: R3) => T
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createArraySelector<S, E, T, R2, R3>(
  selectors: [Selector<S, E[]>, Selector<S, R2>, Selector<S, R3>],
  combiner: (elem: E, res2: R2, res3: R3) => T
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createArraySelector<S, P, E, T, R2, R3>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  combiner: (elem: E, res2: R2, res3: R3) => T
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createArraySelector<S, P, E, T, R2, R3>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>
  ],
  combiner: (elem: E, res2: R2, res3: R3) => T
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createObjectSelector<S, E, T, R2, R3>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  combiner: (elem: E, res2: R2, res3: R3, key: string) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, key: string) => T
>;

export function createObjectSelector<S, E, T, R2, R3>(
  selectors: [Selector<S, ObjectMap<E>>, Selector<S, R2>, Selector<S, R3>],
  combiner: (elem: E, res2: R2, res3: R3, key: string) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  combiner: (elem: E, res2: R2, res3: R3, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>
  ],
  combiner: (elem: E, res2: R2, res3: R3, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, key: string) => T
>;

export function createListSelector<S, T, M extends Mapper<any, any>, R2, R3>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3) => T
>;

export function createListSelector<S, T, M extends Mapper<any, any>, R2, R3>(
  selectors: [Selector<S, M>, Selector<S, R2>, Selector<S, R3>],
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3) => T
>;

export function createListSelector<S, P, T, M extends Mapper<any, any>, R2, R3>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3) => T
>;

export function createListSelector<S, P, T, M extends Mapper<any, any>, R2, R3>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>
  ],
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3
>(
  selectors: [Selector<S, M>, Selector<S, R2>, Selector<S, R3>],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 4 selectors */

export function createArraySelector<S, E, T, R2, R3, R4>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4) => T>;

export function createArraySelector<S, E, T, R2, R3, R4>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4) => T>;

export function createArraySelector<S, P, E, T, R2, R3, R4>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>
  ],
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>
  ],
  combiner: (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 5 selectors */

export function createArraySelector<S, E, T, R2, R3, R4, R5>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
): OutputSelector<
  S,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createArraySelector<S, E, T, R2, R3, R4, R5>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
): OutputSelector<
  S,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (elem: MapperElementType<M>, res2: R2, res3: R3, res4: R4, res5: R5) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 6 selectors */

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
): OutputSelector<
  S,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
>;

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
): OutputSelector<
  S,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>
  ],
  combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5, R6>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5, R6>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 7 selectors */

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6, R7>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputSelector<
  S,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T
>;

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6, R7>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputSelector<
  S,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6, R7>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6, R7>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6, R7>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6, R7>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5, R6, R7>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5, R6, R7>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: string
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 8 selectors */

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6, R7, R8>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6, R7, R8>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6, R7, R8>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6, R7, R8>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6, R7, R8>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6, R7, R8>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5, R6, R7, R8>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
>;

export function createObjectSelector<S, P, E, T, R2, R3, R4, R5, R6, R7, R8>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: string
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 9 selectors */

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6, R7, R8, R9>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createArraySelector<S, E, T, R2, R3, R4, R5, R6, R7, R8, R9>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6, R7, R8, R9>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createArraySelector<S, P, E, T, R2, R3, R4, R5, R6, R7, R8, R9>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6, R7, R8, R9>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
>;

export function createObjectSelector<S, E, T, R2, R3, R4, R5, R6, R7, R8, R9>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: string
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 10 selectors */

export function createArraySelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createArraySelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createArraySelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createArraySelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createObjectSelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: string
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 11 selectors */

export function createArraySelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createArraySelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createArraySelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createArraySelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createObjectSelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: string
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    key: KeyMapperKeyType<M>
  ) => T
>;

/* 12 selectors */

export function createArraySelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  arraySelector: Selector<S, E[]>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  selector12: Selector<S, R12>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createArraySelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    Selector<S, E[]>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>,
    Selector<S, R12>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputSelector<
  S,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createArraySelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  arraySelector: ParametricSelector<S, P, E[]>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  selector12: ParametricSelector<S, P, R12>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createArraySelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    ParametricSelector<S, P, E[]>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>,
    ParametricSelector<S, P, R12>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputParametricSelector<
  S,
  P,
  T[],
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createObjectSelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  objectSelector: Selector<S, ObjectMap<E>>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  selector12: Selector<S, R12>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    Selector<S, ObjectMap<E>>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>,
    Selector<S, R12>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
): OutputSelector<
  S,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  objectSelector: ParametricSelector<S, P, ObjectMap<E>>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  selector12: ParametricSelector<S, P, R12>,
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
>;

export function createObjectSelector<
  S,
  P,
  E,
  T,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    ParametricSelector<S, P, ObjectMap<E>>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>,
    ParametricSelector<S, P, R12>
  ],
  combiner: (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
): OutputParametricSelector<
  S,
  P,
  ObjectMap<T>,
  (
    elem: E,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: string
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  listSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  selector12: Selector<S, R12>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createListSelector<
  S,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>,
    Selector<S, R12>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputSelector<
  S,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  listSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  selector12: ParametricSelector<S, P, R12>,
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createListSelector<
  S,
  P,
  T,
  M extends Mapper<any, any>,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>,
    ParametricSelector<S, P, R12>
  ],
  combiner: (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
): OutputParametricSelector<
  S,
  P,
  MapperReturnType<M>,
  (
    elem: MapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  mapSelector: Selector<S, M>,
  selector2: Selector<S, R2>,
  selector3: Selector<S, R3>,
  selector4: Selector<S, R4>,
  selector5: Selector<S, R5>,
  selector6: Selector<S, R6>,
  selector7: Selector<S, R7>,
  selector8: Selector<S, R8>,
  selector9: Selector<S, R9>,
  selector10: Selector<S, R10>,
  selector11: Selector<S, R11>,
  selector12: Selector<S, R12>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    Selector<S, M>,
    Selector<S, R2>,
    Selector<S, R3>,
    Selector<S, R4>,
    Selector<S, R5>,
    Selector<S, R6>,
    Selector<S, R7>,
    Selector<S, R8>,
    Selector<S, R9>,
    Selector<S, R10>,
    Selector<S, R11>,
    Selector<S, R12>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
): OutputSelector<
  S,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  mapSelector: ParametricSelector<S, P, M>,
  selector2: ParametricSelector<S, P, R2>,
  selector3: ParametricSelector<S, P, R3>,
  selector4: ParametricSelector<S, P, R4>,
  selector5: ParametricSelector<S, P, R5>,
  selector6: ParametricSelector<S, P, R6>,
  selector7: ParametricSelector<S, P, R7>,
  selector8: ParametricSelector<S, P, R8>,
  selector9: ParametricSelector<S, P, R9>,
  selector10: ParametricSelector<S, P, R10>,
  selector11: ParametricSelector<S, P, R11>,
  selector12: ParametricSelector<S, P, R12>,
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
>;

export function createMapSelector<
  S,
  P,
  T,
  M extends KeyMapper<any, any, any>,
  O,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  selectors: [
    ParametricSelector<S, P, M>,
    ParametricSelector<S, P, R2>,
    ParametricSelector<S, P, R3>,
    ParametricSelector<S, P, R4>,
    ParametricSelector<S, P, R5>,
    ParametricSelector<S, P, R6>,
    ParametricSelector<S, P, R7>,
    ParametricSelector<S, P, R8>,
    ParametricSelector<S, P, R9>,
    ParametricSelector<S, P, R10>,
    ParametricSelector<S, P, R11>,
    ParametricSelector<S, P, R12>
  ],
  combiner: (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
): OutputParametricSelector<
  S,
  P,
  KeyMapperResultType<M>,
  (
    elem: KeyMapperElementType<M>,
    res2: R2,
    res3: R3,
    res4: R4,
    res5: R5,
    res6: R6,
    res7: R7,
    res8: R8,
    res9: R9,
    res10: R10,
    res11: R11,
    res12: R12,
    key: KeyMapperKeyType<M>
  ) => T
>;
