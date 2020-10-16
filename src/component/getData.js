import React, {Component} from "react";
import axios from 'axios'

class GetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        this.ajaxFun()
    }

    //json-server命令
    //json-server 文件名 -p 端口号

    ajaxFun = () => {
        axios.get("http://localhost:4000/arr").then((response) => {
            console.log(response.data)
            this.setState({
                arr: response.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.arr.map((value, key) => {
                    return <p key={key}>{value.name}</p>
                })}
            </div>
        );
    }
}

export default GetData;
