<template>
    <div class="main-container">
        <Search />
    </div>
</template>

<script>
import SpeechTranscription from "alibabacloud-nls";
import Search from "../components/Search.vue";
export default {
    components: { Search },
    props: {},
    mounted() {
        const URL = "wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1";
        const APPKEY = "7NvqthGux28ndtgJ";
        const TOKEN = "64adadf521be4bbd88c41b83d2667172";
        this.st = new SpeechTranscription({
            url: URL,
            appkey: APPKEY,
            token: TOKEN,
        });
        this.st.start();
    },
};
</script>

<style scoped lang="less"></style>

