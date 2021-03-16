import Home from './views/Home.vue';
import Day1 from './views/Day1.vue';
import Day2 from './views/Day2.vue';
import Day3 from './views/Day3.vue';
import Day4 from './views/Day4.vue';
import Day5 from './views/Day5.vue';
import Day6 from './views/Day6.vue';
import Day7 from './views/Day7.vue';
import Day8 from './views/Day8.vue';
import Day9 from './views/Day9.vue';
import Day10 from './views/Day10.vue';
import Day11 from './views/Day11.vue';
import Day12 from './views/Day12.vue';
import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
    { path: '/', component: Home },
    {
        path: '/day1',
        component: Day1,
        meta: {
            title: 'Day 1',
            description:
                'Install Tailwind CSS without any Javascript Framework locally with purgeCSS, enable the dark mode option, preferences or class is up to you.',
        },
    },
    {
        path: '/day2',
        component: Day2,
        meta: {
            title: 'Day 2',
            description:
                'Write some text including headings and subheadings, quotes, italics. Train your typography.',
        },
    },
    {
        path: '/day3',
        component: Day3,
        meta: {
            title: 'Day 3',
            description:
                'Create state buttons with a hover and a transition effect, like primary button, secondary and for example disable.',
        },
    },
    {
        path: '/day4',
        component: Day4,
        meta: {
            title: 'Day 4',
            description:
                'Create and rework a select element including options and style it with only Tailwind.',
        },
    },
    {
        path: '/day5',
        component: Day5,
        meta: {
            title: 'Day 5',
            description:
                'Create a form with buttons, inputs and text areas. Remember the download and upload buttons, those can be also included. And center it in the middle. Make it responsive.',
        },
    },
    {
        path: '/day6',
        component: Day6,
        meta: {
            title: 'Day 6',
            description:
                'Create an avatar inside a card along with some text, and make it 100% responsive.',
        },
    },
    {
        path: '/day7',
        component: Day7,
        meta: {
            title: 'Day 7',
            description:
                'Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal.',
        },
    },
    {
        path: '/day8',
        component: Day8,
        meta: {
            title: 'Day 8',
            description:
                'Create a grid with columns and rows, use tailwinds flexbox utilities make it responsive.',
        },
    },
    {
        path: '/day9',
        component: Day9,
        meta: {
            title: 'Day 9',
            description: 'Create a 5 widget and position them differently on the website.',
        },
    },
    {
        path: '/day10',
        component: Day10,
        meta: {
            title: 'Day 10',
            description:
                'Make a card with and image and text. The text has to be on top of the image, use absolute and relative.',
        },
    },
    {
        path: '/day11',
        component: Day11,
        meta: {
            title: 'Day 11',
            description:
                'Make some sections and a container within and give them different widths and heights.',
        },
    },
    {
        path: '/day12',
        component: Day12,
        meta: {
            title: 'Day 12',
            description:
                'Create a section with an image, with text to the right, left or underneath or on top of it. Make it responsive.',
        },
    },
    { path: '/:path(.*)', component: NotFound },
];
