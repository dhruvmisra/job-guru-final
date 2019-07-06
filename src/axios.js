import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://secure.payu.in/_payment'
});

export default instance;