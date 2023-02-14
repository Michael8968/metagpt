<template>
    <div class="search-container">
        <div class="search-wrapper">
            <!-- <van-field class="input" v-model="value" placeholder="请输入问题" /> -->
            <input type="text" placeholder="请输入问题" class="input" />
            <span class="icon" @click="speak"></span>
        </div>
        <canvas class="canvas" id="oscilloscope" />
    </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";
import AudioMeter from "../lib/oscilloscope.js";

Vue.use(Field);
export default {
    props: {},
    data() {
        return {
            value: "",
        };
    },
    mounted() {},
    methods: {
        speak() {
            this.audioMeter = new AudioMeter();
            this.audioMeter.init();
        },
    },
};
</script>

<style scoped lang="less">
.search-container {
    position: fixed;
    bottom: 0px;
    height: 150px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .search-wrapper {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        .input {
            width: 100%;
            border: none;
            font-size: 12px;
        }

        .icon {
            background-image: url(../assets/img/microphone.png);
            width: 32px;
            height: 32px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            display: inline-block;
        }

        .canvas {
            height: 100px;
            width: 100%;
        }
    }
}
</style>

