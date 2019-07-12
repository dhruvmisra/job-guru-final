<template>
    <div>
        <div class="d-block spinner-border mx-auto my-5" role="status" v-if="!loaded">
            <span class="sr-only">Loading...</span>
        </div>        
        <div class="my-5" v-else>
            <div class="text-center" v-if="payment != null">
                <h1>Payment Successfull</h1>
                <small>Please refresh the home page to update the payment</small>
            </div>
            <h1 class="text-center" v-else>Payment Failed</h1>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase';
import axios from '../axios';

export default {
    data() {
        return {
            payment: null,
            loaded: false
        }
    },
    mounted() {
        axios.get('getUserData/' + firebase.auth().currentUser.uid)
            .then(res => {
                console.log(res.data);
                this.payment = res.data.payment;
                this.$store.dispatch('setPayment', res.data.payment);
                this.loaded = true;
                setTimeout(() => {
                    this.$router.push('/');
                }, 10000);
            });
    }
}
</script>

