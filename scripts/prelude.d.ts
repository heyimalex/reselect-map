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
