<template>
    <div class="nav-container">
        <ul>
            <li :class='currentPage("/") ? "active": ""'><a href="/">Clock</a></li>
            <li :class='currentPage("/alarm") ? "active": ""'><a href="/alarm">Alarm</a></li>
            <li :class='currentPage("/stopwatch") ? "active": ""'><a href="/stopwatch">Stopwatch</a></li>
            <li :class='currentPage("/timer") ? "active": ""'><a href="/timer">Timer</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Header',
        methods: {
            currentPage(page) {
                if(this.$route.path === page){
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    margin-bottom: 20px;
}

li {
    float: left;
    border-right: 1px solid #bbb
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li:last-child {
  border-right: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
}

.active {
    border-bottom: 5px solid green;
}

.nav-container {
    display: inline-block;

}

</style>