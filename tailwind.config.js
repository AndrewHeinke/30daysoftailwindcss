const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        safeList: [],
        content: ['./index.html', './src/**/*.vue', './src/**/*.js'],
    },
    darkMode: 'media',
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontWeight: ['hover', 'focus'],
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
