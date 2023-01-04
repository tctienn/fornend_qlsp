import axios from 'axios'

// axios.get(`https://62b6e8c76999cce2e809fa1e.mockapi.io/dkt/products`)

const api = axios.create({
    baseURL: 'https://62b6e8c76999cce2e809fa1e.mockapi.io/dkt',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export const getProducts = () => {

    return api.get(`products`);
}