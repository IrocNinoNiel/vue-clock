<template>
    <div>
        <h1>Timer</h1>
        <VueTimerHeader @set-time="getTime"/>
        <br/>
        <VueTimer :time-left="timeLeft" :timeLimit="timeLimit" :started="started" /> 
        <br/>
        <button class="button" :style="{background:'#4CAF50'}" @click="startTimer" v-show="!started">Start</button>
        <button class="button" :style="{background:'yellow'}" @click="pauseTimer" v-show="started">Pause</button>
        <button class="button" :style="{background:'red'}" @click="stopTimer" v-show="started">Stop</button>
    </div>
</template>

<script>
    import VueTimer from '../../components/Vuetimer.vue'
    import VueTimerHeader from '../../components/VueTimerHeader.vue'
    export default {
        name:'Timer',
        components:{
            VueTimer,
            VueTimerHeader,
        },
        data() {
            return {
                timeLimit: 0,
                timePassed: 0,
                timerInterval: null,
                started: false,
            }
        },
        computed: {
            timeLeft() {
                return this.timeLimit - this.timePassed
            },
        },
        methods: {
            startTimer() {
                this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
                this.started = true;
            },
            stopTimer() {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
                this.timePassed = 0;
                this.started = false;
            },
            pauseTimer() {
                clearInterval(this.timerInterval);
                this.started = false;
            },
            getTime(payload) {
                this.timeLimit = (payload.minutes * 60) + payload.seconds;
            }
            
        },
    }
</script>

<style scoped>

.button {
    /* background-color: #4CAF50; Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

</style>