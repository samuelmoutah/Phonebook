import React, { Component } from 'react';

class PhoneInfo extends Component {

    handleRemove = () => {
        const { infor, onRemove} = this.props//from phoneinfolist.js
        onRemove(infor.id)
    }

    render() {
        const { name, phone } = this.props.infor

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        );
    }
}

export default PhoneInfo;