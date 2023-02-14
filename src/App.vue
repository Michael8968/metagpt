<template>
    <div id="app">
        <Main />
    </div>
</template>

<script>
import Main from "./views/Main.vue";

export default {
    name: "App",
    components: {
        Main,
    },
};
</script>

<style>
body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    overscroll-behavior: none;
    touch-action: manipulation;
    -webkit-touch-callout: none;
    padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
    padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
    padding-top: constant(safe-area-inset-top); /*兼容 IOS<11.2*/
    padding-top: env(safe-area-inset-top); /*兼容 IOS>11.2*/
    box-sizing: border-box;
}
#app {
    font-family: Microsoft YaHei, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
}
* {
    box-sizing: border-box;
}
p {
    margin: 0;
}
</style>

