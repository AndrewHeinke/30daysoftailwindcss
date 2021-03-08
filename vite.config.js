import vue from '@vitejs/plugin-vue';

/**
 * @type {import('vite').UserConfig}
 */
export default {
    base: process.env.NODE_ENV === 'production' ? '/30daysoftailwindcss/' : './',
    plugins: [vue()],
};
