// This file generates the typescript definitions that ultimately end up in
// lib/index.d.ts.

const fs = require("fs");
var path = require("path");
const prettier = require("prettier");

const dst = path.join(__dirname, "../src/index.d.ts");
const confs = [
  {
    name: "array",
    generics: ["E", "T"],
    elementType: "E",
    inputType: "E[]",
    outputType: "T[]"
  },
  {
    name: "object",
    generics: ["E", "T"],
    elementType: "E",
    inputType: "ObjectMap<E>",
    keyType: "string",
    outputType: "ObjectMap<T>"
  },
  {
    name: "list",
    generics: ["T", "M extends Mapper<any,any>"],
    elementType: "MapperElementType<M>",
    inputType: "M",
    outputType: "MapperReturnType<M>"
  },
  {
    name: "map",
    generics: ["T", "M extends KeyMapper<any,any,any>"],
    elementType: "KeyMapperElementType<M>",
    inputType: "M",
    keyType: "KeyMapperKeyType<M>",
    outputType: "KeyMapperResultType<M>"
  }
];
generateAll(dst, 12, confs);

function generateAll(dst, count, confs) {
  // The contents of prelude.d.ts are added to the top of the generated file.
  const prelude = fs.readFileSync(path.join(__dirname, "prelude.d.ts"), {
    encoding: "utf8"
  });
  let output = prelude;

  // Generate type definitions for different numbers of selectors, up to count.
  for (let i = 1; i <= count; i++) {
    // comment to mark the number of subselectors
    output += `\n/* ${i} selector${i == 1 ? "" : "s"} */\n`;
    for (let conf of confs) {
      output += generateSelectorType(i, false, conf);
      output += generateSelectorType(i, true, conf);
    }
  }
  const prettyOutput = prettier.format(output, { parser: "typescript" });
  fs.writeFileSync(dst, prettyOutput);
}

function generateSelectorType(count, isParametric, conf) {
  // rmap calls the passed function with numbers from 2 to count, and returns
  // an array of the results.
  //
  // For example, when count is 4:
  //   rmap(i => `${i}`)
  //   // ['2', '3', '4']
  //
  const rmap = fn => {
    const results = [];
    for (let i = 2; i <= count; i++) {
      results.push(fn(i));
    }
    return results;
  };

  const creatorFuncName = `create${capitalizeFirstLetter(conf.name)}Selector`;

  const generics = [
    "S", // state
    isParametric ? "P" : null, // props
    ...conf.generics,
    ...rmap(i => `R${i}`) // result generics
  ]
    .filter(g => g !== null)
    .join(", ");

  // type signature for the combiner function
  const resultArgs = rmap(i => `res${i}: R${i}`);
  const combinerArgs =
    typeof conf.keyType === "string"
      ? [`elem: ${conf.elementType}`, ...resultArgs, `key: ${conf.keyType}`]
      : [`elem: ${conf.elementType}`, ...resultArgs];
  const combinerType = `(${combinerArgs.join(", ")}) => T`;

  const { inputType } = conf;
  const inputSelector = isParametric
    ? `ParametricSelector<S, P, ${inputType}>`
    : `Selector<S, ${inputType}>`;

  const { outputType } = conf;
  const outputSelector = isParametric
    ? `OutputParametricSelector<S, P, ${outputType}, ${combinerType}>`
    : `OutputSelector<S, ${outputType}, ${combinerType}>`;

  return `
export function ${creatorFuncName}<${generics}>(
  ${[
    `${conf.name}Selector: ${inputSelector}`,
    ...(isParametric
      ? rmap(i => `selector${i}: ParametricSelector<S, P, R${i}>`)
      : rmap(i => `selector${i}: Selector<S, R${i}>`)),
    `combiner: ${combinerType}`
  ].join(",\n  ")},
): ${outputSelector};

export function ${creatorFuncName}<${generics}>(
  selectors: [
    ${[
      inputSelector,
      ...(isParametric
        ? rmap(i => `ParametricSelector<S, P, R${i}>`)
        : rmap(i => `Selector<S, R${i}>`))
    ].join(",\n    ")}
  ],
  combiner: ${combinerType},
): ${outputSelector};
`;
}

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
