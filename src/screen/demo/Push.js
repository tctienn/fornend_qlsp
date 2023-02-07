import React from 'react';
import axios from 'axios';

export default class Push extends React.Component {
    state = {

        name: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.put(`https://63e1d068f59c591411a6e1bb.mockapi.io/cart/1`, { dataa: user.name })
            .then(res => {
                console.log(axios);
                console.log(res.data);
            })
            .catch(function (error) {
                axios.post(`https://63e1d068f59c591411a6e1bb.mockapi.io/cart`, { dataa: [1, 2, 3] })
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
