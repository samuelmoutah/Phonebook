import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone
        })
        this.setState({
            name: '',
            phone: ''
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}    
                />
                <input 
                    name="phone"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handleChange}    
                />

                <button type="submit">Register</button>

            </form>
        );
    }
}

export default PhoneForm;