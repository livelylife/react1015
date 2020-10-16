import React, {Component, Fragment} from "react";
import News from "./news";
import Phone from "./phone";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "我是默认值"
        }
    }

    dataFun = (v) => {
        console.log(v)
        this.setState({
            text: v
        })
    }

    render() {
        return <Fragment>
            <div>
                home----{this.state.text}
            </div>
            <News test={"传递参数"} fufun={this.dataFun}/>
            <Phone/>
        </Fragment>
    }
}
