import Vue from "vue";

const app = new Vue({
    data: {
        hello: "hi there 123"
    },
    template: '<div id="app">{{ hello }}</div>'
});

export { app };