<template>
    <form @submit="sendTime">
		<label for="min">Minutes<br/>
            <input type="number" v-model="minutes" name="time_m" id="min" min="0" max="59">
		</label>
		<label for="sec">Seconds<br />
			<input type="number" v-model="seconds" name="time_s" id="sec" max="59" min="0">
		</label>
		<input type="submit" value="Set Time" class="btn btn-block" />
	</form>
</template>

<script>
export default {
    name:"VueTimerHeader",
    data () {
        return {
            minutes: 0,
            seconds: 0
        }
    },
    methods: {
        sendTime(e) {
            e.preventDefault();
            // console.log({minutes:this.minutes, seconds:this.seconds});
            if(this.minutes == 0){
                alert('Please Add Minutes')
            }else {
                this.$emit('set-time', {minutes:this.minutes, seconds:this.seconds})
            }
        }
    }
}
</script>

<style scoped>
  html {
		box-sizing:border-box;
  }

  *, *::before, *::after {
		box-sizing: inherit;
  }

  #app {
		text-align: center;
  }

  body {
		font-family: sans-serif;
		padding: 0;
		margin: 0;
  }
  #app {
		padding: 10px;
		margin: 0 auto;
		max-width: 1000px;
  }

  input[type=number] {
		padding: 10px;
		font-size: inherit;
		width:100%;
  }

  input[type=submit] {
		padding:10px;
  }

  [v-cloak] {
		opacity:0;
  }

  label {
		width:20%;
		padding:10px 0;
		display:inline-block;
  }

  .timer {
		font-size: 2em;
		margin: 20px;
  }
</style>