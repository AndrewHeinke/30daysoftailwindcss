const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        safeList: [],
        content: ['./*.html', './src/**/*.vue', './src/**/*.js'],
    },
    darkMode: 'media',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontWeight: ['hover', 'focus'],
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
