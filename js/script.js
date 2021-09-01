console.log('js ok');
console.log(Vue);

const root = new Vue({
    el: '#root',

    data: {
        randomMail: '',
    },
    methods: {},
    created() {


        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                let response = res.data.response
                this.randomMail = response;
            })
    }

})