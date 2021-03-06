import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
    render() {
        const { data, onRemove, onUpdate } = this.props //from app.js

        if(!data) return null

        const list = data.map(info => (
            <PhoneInfo 
                onUpdater={onUpdate}
                onRemover={onRemove}
                infor={info} 
                key={info.id} 
            />
        ))
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;