import axios from 'axios'

// axios.get(`https://62b6e8c76999cce2e809fa1e.mockapi.io/dkt/products`)

export const api = axios.create({
    baseURL: 'https://62d59d9515ad24cbf2caa1cd.mockapi.io/tets/',
    // baseURL: 'http://localhost:3000/',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export const getProducts = () => {

    return api.get(`/data`);
}

export const search = (params) => {
    return api.get(`/data`, { params })
}
export const postcart = (id, data) => {
    return (
        axios.put(`https://639365baab513e12c50d3b55.mockapi.io/obj/users/`, data)
            .then(res => {
                console.log(axios);
                console.log(res.data);
            })
            .catch(function (error) {
                axios.post(`https://639365baab513e12c50d3b55.mockapi.io/obj/users/`, { name: 'ay' })
            })
    )
}