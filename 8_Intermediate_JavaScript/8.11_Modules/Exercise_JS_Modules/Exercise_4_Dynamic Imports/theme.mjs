/**

    4. Dynamic Imports:** Utilize dynamic imports for conditionally loading modules for theme management based on time.
    - Create `theme.mjs`, which exports functions that manage the application's theme. The function `setLightTheme` and `setDarkTheme` set and log the theme being set to the console.
    - Create `app.js`. Implement an async function, `loadConfig,` that dynamically imports the `theme.mjs` and decides which theme function to call based on the current hour (e.g., light theme before 6 PM, dark theme afterward).

**/

let theme = null;

export const setLightTheme = () => {
    console.log('Setting light theme.');
    theme = 'light';
}

export const setDarkTheme = () => {
    console.log('Setting dark theme.');
    theme = 'dark';
}
