const loadConfig = async () => {
    const useTheme = await import('./theme.mjs');

    new Date().getHours() > 18 ? useTheme.setDarkTheme() : useTheme.setLightTheme();
}

loadConfig();