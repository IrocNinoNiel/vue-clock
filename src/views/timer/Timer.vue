<template>
    <div>
        <h1>Timer</h1>
        <br/>
        <VueTimer :time-left="timeLeft" :timeLimit="timeLimit"/> 
        <br/>
        <button class="button" :style="{background:'#4CAF50'}" @click="startTimer" v-show="!started">Start</button>
        <button class="button" :style="{background:'#f44336'}" @click="stopTimer" v-show="started">Stop</button>
    </div>
</template>

<script>
    import VueTimer from '../../components/Vuetimer.vue'
    export default {
        name:'Timer',
        components:{
            VueTimer,
        },
        data() {
            return {
                timeLimit: 20,
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
                this.started = false;
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