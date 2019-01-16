# ts-jest-build-error
A minimal repo to reproduce a rare test failure related to how ts-jest handles ts modules

# Description
Ts-jest succeeds to transform a ts file from a dependent module if the module has been linked with `npm link`. However it fails to transform the same file if the module was copied to node_modules instead of linking with `npm link`.

The error message looks like:

```
Test suite failed to run

    TypeError: Unable to require `.d.ts` file.
    This is usually the result of a faulty configuration or import. Make sure there is a `.js`, `.json` or another executable extension available alongside `index.ts`.

    > 1 | import { callA, anotherCallA } from "localLib";
        | ^
      2 | 
      3 | export function checkB(s: string) : string | null {
      4 |     const a = callA(anotherCallA(s));

      at getOutput (node_modules/ts-jest/dist/compiler.js:163:23)
      at Object.<anonymous> (src/b.ts:1:1)

Test Suites: 1 failed, 1 total
```

# Steps to reproduce
```
cd localLib
   (sudo) npm link
   
cd ../main
   npm install
   npm link localLib
   npm run clearJest
   npm test  => success
   
   (sudo) rm -rf node_modules/localLib
   cp -r ../localLib node_modules
   npm run clearJest
   npm test => failure
```
