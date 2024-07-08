/**

    3. Re-exporting Modules:** Organize utility functions using re-exporting techniques to create a streamlined import process.
    - Create a `utils` directory. Within the utils directory, create individual modules: `stringUtils.mjs` for string manipulation functions and `numberUtils.mjs` for numeric operations that export various utility functions. Implement the `index.mjs`, which aggregates and re-exports all utility functions from the utils directory, facilitating a single point of import.
    - Create `app.mjs` that imports utilities from the aggregated `utils/index.mjs` and demonstrates their use.

**/

export const checkSubString = (str, sub) => str.includes(sub);

export const reverseString = str => [...str].reverse().join('');
