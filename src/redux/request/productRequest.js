import axios from 'axios';

export function callGetProduct() {
    return axios.get('/api/product')
        .then(response => response)
        .catch(error => {throw error.response || error});
}