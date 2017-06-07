import {
    Selector,
    ParametricSelector,
    OutputSelector,
    OutputParametricSelector,
} from 'reselect';

export as namespace ReselectMap;

type ObjectMap<T> = { [key: string]: T; } | { [key: number]: T; };

/* 1 selector */

export function createArraySelector<S, E, T>(
    selector1: Selector<S, E[]>,
    combiner: (elem: E) => T,
): OutputSelector<S, T[], (elem: E) => T>;

export function createArraySelector<S, E, T>(
    selectors: [
        Selector<S, E[]>
    ],
    combiner: (elem: E) => T,
): OutputSelector<S, T[], (elem: E) => T>;

export function createArraySelector<S, P, E, T>(
    selector1: ParametricSelector<S, P, E[]>,
    combiner: (elem: E) => T,
): OutputParametricSelector<S, P, T[], (elem: E) => T>;

export function createArraySelector<S, P, E, T>(
    selectors: [
        ParametricSelector<S, P, E[]>
    ],
    combiner: (elem: E) => T,
): OutputParametricSelector<S, P, T[], (elem: E) => T>;

export function createObjectSelector<S, E, T>(
    selector1: Selector<S, ObjectMap<E>>,
    combiner: (elem: E, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, key: string) => T>;

export function createObjectSelector<S, E, T>(
    selectors: [
        Selector<S, ObjectMap<E>>
    ],
    combiner: (elem: E, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, key: string) => T>;

export function createObjectSelector<S, P, E, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    combiner: (elem: E, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, key: string) => T>;

export function createObjectSelector<S, P, E, T>(
    selectors: [
        ParametricSelector<S, P, ObjectMap<E>>
    ],
    combiner: (elem: E, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, key: string) => T>;

/* 2 selectors */

export function createArraySelector<S, E, R2, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    combiner: (elem: E, res2: R2) => T,
): OutputSelector<S, T[], (elem: E, res2: R2) => T>;

export function createArraySelector<S, E, R2, T>(
    selectors: [
        Selector<S, E[]>,
        Selector<S, R2>
    ],
    combiner: (elem: E, res2: R2) => T,
): OutputSelector<S, T[], (elem: E, res2: R2) => T>;

export function createArraySelector<S, P, E, R2, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    combiner: (elem: E, res2: R2) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2) => T>;

export function createArraySelector<S, P, E, R2, T>(
    selectors: [
        ParametricSelector<S, P, E[]>,
        ParametricSelector<S, P, R2>
    ],
    combiner: (elem: E, res2: R2) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2) => T>;

export function createObjectSelector<S, E, R2, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    combiner: (elem: E, res2: R2, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, key: string) => T>;

export function createObjectSelector<S, E, R2, T>(
    selectors: [
        Selector<S, ObjectMap<E>>,
        Selector<S, R2>
    ],
    combiner: (elem: E, res2: R2, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, key: string) => T>;

export function createObjectSelector<S, P, E, R2, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    combiner: (elem: E, res2: R2, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, key: string) => T>;

export function createObjectSelector<S, P, E, R2, T>(
    selectors: [
        ParametricSelector<S, P, ObjectMap<E>>,
        ParametricSelector<S, P, R2>
    ],
    combiner: (elem: E, res2: R2, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, key: string) => T>;

/* 3 selectors */

export function createArraySelector<S, E, R2, R3, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    combiner: (elem: E, res2: R2, res3: R3) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createArraySelector<S, E, R2, R3, T>(
    selectors: [
        Selector<S, E[]>,
        Selector<S, R2>,
        Selector<S, R3>
    ],
    combiner: (elem: E, res2: R2, res3: R3) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createArraySelector<S, P, E, R2, R3, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    combiner: (elem: E, res2: R2, res3: R3) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createArraySelector<S, P, E, R2, R3, T>(
    selectors: [
        ParametricSelector<S, P, E[]>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>
    ],
    combiner: (elem: E, res2: R2, res3: R3) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3) => T>;

export function createObjectSelector<S, E, R2, R3, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    combiner: (elem: E, res2: R2, res3: R3, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, T>(
    selectors: [
        Selector<S, ObjectMap<E>>,
        Selector<S, R2>,
        Selector<S, R3>
    ],
    combiner: (elem: E, res2: R2, res3: R3, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    combiner: (elem: E, res2: R2, res3: R3, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, T>(
    selectors: [
        ParametricSelector<S, P, ObjectMap<E>>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>
    ],
    combiner: (elem: E, res2: R2, res3: R3, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, key: string) => T>;

/* 4 selectors */

export function createArraySelector<S, E, R2, R3, R4, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4) => T>;

export function createArraySelector<S, E, R2, R3, R4, T>(
    selectors: [
        Selector<S, E[]>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, T>(
    selectors: [
        ParametricSelector<S, P, E[]>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4) => T>;

export function createObjectSelector<S, E, R2, R3, R4, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, T>(
    selectors: [
        Selector<S, ObjectMap<E>>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, T>(
    selectors: [
        ParametricSelector<S, P, ObjectMap<E>>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, key: string) => T>;

/* 5 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, T>(
    selectors: [
        Selector<S, E[]>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>,
        Selector<S, R5>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, T>(
    selectors: [
        ParametricSelector<S, P, E[]>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>,
        ParametricSelector<S, P, R5>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, T>(
    selectors: [
        Selector<S, ObjectMap<E>>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>,
        Selector<S, R5>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, T>(
    selectors: [
        ParametricSelector<S, P, ObjectMap<E>>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>,
        ParametricSelector<S, P, R5>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, key: string) => T>;

/* 6 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, R6, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, R6, T>(
    selectors: [
        Selector<S, E[]>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>,
        Selector<S, R5>,
        Selector<S, R6>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, T>(
    selectors: [
        ParametricSelector<S, P, E[]>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>,
        ParametricSelector<S, P, R5>,
        ParametricSelector<S, P, R6>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, T>(
    selectors: [
        Selector<S, ObjectMap<E>>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>,
        Selector<S, R5>,
        Selector<S, R6>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, T>(
    selectors: [
        ParametricSelector<S, P, ObjectMap<E>>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>,
        ParametricSelector<S, P, R5>,
        ParametricSelector<S, P, R6>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, key: string) => T>;

/* 7 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, T>(
    selectors: [
        Selector<S, E[]>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>,
        Selector<S, R5>,
        Selector<S, R6>,
        Selector<S, R7>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, T>(
    selectors: [
        ParametricSelector<S, P, E[]>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>,
        ParametricSelector<S, P, R5>,
        ParametricSelector<S, P, R6>,
        ParametricSelector<S, P, R7>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, T>(
    selectors: [
        Selector<S, ObjectMap<E>>,
        Selector<S, R2>,
        Selector<S, R3>,
        Selector<S, R4>,
        Selector<S, R5>,
        Selector<S, R6>,
        Selector<S, R7>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, T>(
    selectors: [
        ParametricSelector<S, P, ObjectMap<E>>,
        ParametricSelector<S, P, R2>,
        ParametricSelector<S, P, R3>,
        ParametricSelector<S, P, R4>,
        ParametricSelector<S, P, R5>,
        ParametricSelector<S, P, R6>,
        ParametricSelector<S, P, R7>
    ],
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, key: string) => T>;

/* 8 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, key: string) => T>;

/* 9 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, key: string) => T>;

/* 10 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selector1: Selector<S, E[]>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    selector10: Selector<S, R10>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selector1: ParametricSelector<S, P, E[]>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    selector10: ParametricSelector<S, P, R10>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selector1: Selector<S, ObjectMap<E>>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    selector10: Selector<S, R10>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    selector10: ParametricSelector<S, P, R10>,
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, key: string) => T>;

/* 11 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selector1: Selector<S, E[]>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selector1: ParametricSelector<S, P, E[]>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selector1: Selector<S, ObjectMap<E>>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, key: string) => T>;

/* 12 selectors */

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selector1: Selector<S, E[]>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;

export function createArraySelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputSelector<S, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selector1: ParametricSelector<S, P, E[]>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;

export function createArraySelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputParametricSelector<S, P, T[], (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selector1: Selector<S, ObjectMap<E>>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T>;

export function createObjectSelector<S, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T,
): OutputSelector<S, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selector1: ParametricSelector<S, P, ObjectMap<E>>,
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T>;

export function createObjectSelector<S, P, E, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
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
    combiner: (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T,
): OutputParametricSelector<S, P, ObjectMap<T>, (elem: E, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12, key: string) => T>;
