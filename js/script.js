console.log('js ok');
console.log(Vue);

const root = new Vue({
    el: '#root',

    data: {
        mailList: [],
        error: false,
        errorMsg: 'Errore di caricamento...',
    },
    methods: {
        isLoading() {

            return this.mailList.length < 10;
        }
    },
    created() {

        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    let response = res.data.response

                    this.mailList.push(response)
                }).catch((err) => {
                    this.error = true;
                    console.log(err)
                }
                )
        }
        console.log(this.mailList);

    }

})