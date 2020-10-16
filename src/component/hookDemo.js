import React, {useState} from "react";

//useState用来定义一个状态 他与类组件的状态不同，函数组件的状态可以是对象也可以是基础数据类型
//useState返回的是一个数组 第一个是当前的状态值 第二个是对象表明用于更改状态的函数（类似于setState）
// function HookDemo(props) {
//     let [val, setVal] = useState(9)
//     return (
//         <div>
//             使用数据:{val}
//             <button onClick={() => {
//                 setVal(val + 1)
//             }}>点我进行数据修改
//             </button>
//         </div>
//     )
// }

function HookDemo(props) {
    let [val, setVal] = useState({
        valA: 0,
        valB: 1,
        valC: 2
    })
    let [valA, setValA] = useState(3)
    let [valB, setValB] = useState(4)
    let [valC, setValC] = useState(5)
    return (
        <div>
            使用数据:{val.valA}---{val.valB}---{val.valC}
            <br/>
            使用数据:{valA}---{valB}---{valC}
            <br/>
            <button onClick={() => {
                setVal({
                    valA: val.valA + 1
                })
            }}>点我进行数据修改
            </button>
        </div>
    )
}

export default HookDemo
