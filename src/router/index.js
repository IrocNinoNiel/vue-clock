import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/clock/VueClock';
import Alarm from '../views/alarm/Alarm';
import Stopwatch from '../views/stopwatch/Stopwatch';
import Timer from '../views/timer/Timer';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/alarm',
        name: 'Alarm',
        // component: () => import('@/views/alarm/Alarm'),
        component: Alarm
    },
    {
        path: '/stopwatch',
        name: 'Stopwatch',
        component: Stopwatch
    },
    {
        path: '/timer',
        name: 'Timer',
        component: Timer
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;