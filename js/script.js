console.log('js ok');
console.log(Vue);

const root = new Vue({
    el: '#root',

    data: {
        randomMail: '',
        mailList: []
    },
    methods: {},
    created() {


        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    let response = res.data.response

                    this.mailList.push(response)


                })

        }

        console.log(this.mailList);

    }

})