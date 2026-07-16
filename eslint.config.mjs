// ESLint flat config. ESLint 10 removed .eslintrc support, and Next 16 removed
// the `next lint` wrapper, so linting runs through the ESLint CLI (`eslint .`)
// against this file. eslint-config-next 16 ships a native flat-config array;
// its `core-web-vitals` entry is the same rule set the project used under the
// old `next/core-web-vitals`, now including the TypeScript block. The shared
// config already ignores .next, out, build, and next-env.d.ts.
import next from "eslint-config-next/core-web-vitals";

const config = [...next];

export default config;
