import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://floating-reef-97336.herokuapp.com/v1/'
    // baseURL: 'http://d677c430.ngrok.io/v1/'
    // baseURL: 'http://192.168.0.116:3000/v1/'
});

export default instance;