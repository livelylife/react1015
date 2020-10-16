import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class Phone extends Component {
    constructor(props) {
        super(props);
        PubSub.subscribe("evt",(msg,data)=>{
            console.log("phone---"+data)
        })
    }
    render() {
        return (
            <div>
                phone
            </div>
        );
    }
}

export default Phone;
