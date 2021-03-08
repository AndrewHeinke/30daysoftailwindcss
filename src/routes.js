import Home from './views/Home.vue';
import Day1 from './views/Day1.vue';
import Day2 from './views/Day2.vue';
import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
    { path: '/', component: Home },
    {
        path: '/Day1',
        component: Day1,
        meta: {
            title: 'Day 1',
            description:
                'Install Tailwind CSS without any Javascript Framework locally with purgeCSS, enable the dark mode option, preferences or class is up to you.',
        },
    },
    {
        path: '/Day2',
        component: Day2,
        meta: {
            title: 'Day 2',
            description:
                'Write some text including headings and subheadings, quotes, italics. Train your typography.',
        },
    },
    { path: '/:path(.*)', component: NotFound },
];
