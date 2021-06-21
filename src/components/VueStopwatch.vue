<template>
    <div class="base-timer">
        <span class="base-timer__label">
            {{formattedTime}}
        </span>
    </div>
    <br/>
    <button class="button" :style="{background:'#4CAF50'}" @click="startTimer" v-show="!started">Start</button>
    <button class="button" :style="{background:'yellow'}" @click="pauseTimer" v-show="started">Pause</button>
    <button class="button" :style="{background:'red'}" @click="stopTimer" v-show="started">Stop</button>
</template>

<script>
    export default {
        name:"VueStopwatch",
        computed:{
            formattedTime() {
                let minutes = Math.floor(this.timePassed / 60)
                let seconds = this.timePassed % 60

                if (seconds < 10) {
                    seconds = `0${seconds}`
                }
                if (minutes < 10) {
                    minutes = `0${minutes}`
                }
                return `${minutes}:${seconds}`
            },
        },
        data() {
            return {
                started: false,
                timerInterval: null,
                timePassed: 0,
            }
        },
        methods:{
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
            }
        }
    }
</script>

<style scoped>
    .base-timer {
        position: relative;
        display: inline-block;
        width: 300px;
        height: 300px;
    }
    .base-timer__label {
        position: absolute;    
    
        /* Size should match the parent container */    
        width: 300px;
        height: 300px;
        /* Keep the label aligned to the top */    
        top: 0;
        /* Create a flexible box that centers content vertically and horizontally */    
        display: flex;
        align-items: center;
        justify-content: center;
        /* Sort of an arbitrary number; adjust to your liking */
        font-size: 48px;
    }
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