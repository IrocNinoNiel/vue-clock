<template>
    <div>
        <h1>Stopwatch</h1>
        <VueStopwatch/>
    </div>
</template>

<script>
    import VueStopwatch from '../../components/VueStopwatch.vue'
    export default {
        name:'Stopwatch',
        components:{
            VueStopwatch,
        }
    }
</script>

<style scoped>

</style>