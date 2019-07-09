<template>
    <div>
        <div class="d-block spinner-border mx-auto my-5" role="status" v-if="!loaded">
            <span class="sr-only">Loading...</span>
        </div>        
        <div v-else>
            <h1 class="text-center" v-if="payment != null">Payment Successfull</h1>
            <h1 class="text-center" v-else>Payment Failed</h1>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase';
import axios from 'axios';

export default {
    data() {
        return {
            payment: null,
            loaded: false
        }
    },
    mounted() {
        axios.get('https://floating-reef-97336.herokuapp.com/v1/getUserData/' + firebase.auth().currentUser.uid)
            .then(res => {
                console.log(res.data);
                this.payment = res.data.payment;
                this.loaded = true;
            });
    }
}
</script>

