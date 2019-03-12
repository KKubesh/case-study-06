import axios from 'axios';

export function callGetProduct() {
    return axios.get('/api/product')
        .then(response => response.data)
        .catch(error => {throw error.response || error});
}