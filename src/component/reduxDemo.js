import React, {Component} from 'react';
import {store} from "../redux/store";
import * as action from "../redux/action"

/**
 * redux javascript提供的一个可预测性（给定一个固定的输入  那么必定可以等到一个结果）的状态容器
 * 集中的管理react中的多个组件的状态
 * 三大原则：
 * 1.单一数据源 整个react中的状态都会被统一的管理到store
 * 2.state是只读的 只能通过触发redux中的特定方法进行修改
 * 3.使用纯函数执行修改操作 action来改变redux中的state
 *
 * npm install --save redux
 * */

class ReduxDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: store.getState()
        }
    }

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                num:store.getState()
            })
        })
    }

    render() {
        return (
            <div>
                ReduxDemo-----{this.state.num}
                <button onClick={()=>{store.dispatch(action.add(1))}}>点我加1</button>
                <button onClick={()=>{store.dispatch(action.del(1))}}>点我减1</button>
            </div>
        );
    }
}

export default ReduxDemo;
