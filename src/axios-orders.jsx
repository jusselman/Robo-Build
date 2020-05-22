import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://robot-builder-58e42.firebaseio.com/'
})

export default instance;