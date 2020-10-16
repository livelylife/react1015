import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 123,
            name: "news"
        };
    }

    fun() {
        this.setState({
            num: this.state.num + 1
        })
    }

    pubSub() {
        PubSub.publish("evt", this.state.num)
    }

    render() {
        return (
            <div>
                <p>news--{this.props.test}--{this.state.num}--{this.state.name}</p>
                <button onClick={this.fun.bind(this)}>点我</button>
                <button onClick={this.props.fufun.bind(this, "ziText")}>发送数据</button>
                <button onClick={this.pubSub.bind(this)}>点我进行同级传递</button>
            </div>
        )
    }
}
