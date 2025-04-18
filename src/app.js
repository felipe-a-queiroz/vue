const myApp = {
    data() {
        return {
            message: 'Hello World',
            input_name: ''
        }
    }
};


Vue.createApp(myApp).mount('#app');