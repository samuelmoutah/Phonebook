import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const { infor, onRemover } = this.props
        onRemover(infor.id)
    }

    handleToggleEdit = () => {
        //true -> false
            //onUpdate
        //false ->true
            //state에 info 값들 넣어주기    
        
        const { infor, onUpdater } = this.props
        if(this.state.editing) {
            onUpdater(infor.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        } else {
            this.setState({
                name: infor.name,
                phone: infor.phone  
            })
        }
        this.setState({
            editing: !this.state.editing
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { name, phone } = this.props.infor
        const { editing } = this.state


        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        return (
            
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input 
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                
                <button onClick={this.handleRemove}>Remove</button>
                <button onClick={this.handleToggleEdit}>{ editing ? 'Apply' : 'Edit' }</button>
            </div>
        );
    }
}

export default PhoneInfo;