import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://floating-reef-97336.herokuapp.com/v1/'
});

export default instance;