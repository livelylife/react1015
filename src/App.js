import React from 'react';
import './App.css';
import GetData from "./component/getData";
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import Home from "./component/home";
import Phone from "./component/phone";
import User from "./component/user";
import Demo from "./component/demo";
import ReduxDemo from "./component/reduxDemo";

function App() {
    return (
        <div className="App">
            {/*<div>*/}
            {/*    /!*NavLink会自动添加active类*!/*/}
            {/*    <NavLink to={"/home"}>点我去home</NavLink><br/>*/}
            {/*    <NavLink to={"/phone"}>点我去phone</NavLink><br/>*/}
            {/*    <NavLink to={"/getData"}>点我去getData</NavLink><br/>*/}
            {/*    <NavLink to={"/user"}>点我去user</NavLink><br/>*/}
            {/*    <NavLink to={"/demo"}>点我去demo</NavLink><br/>*/}
            {/*</div>*/}
            {/*<Switch>*/}
            {/*    /!*<Route path={"/"} exact component={Home}/>*!/*/}
            {/*    <Route path={"/home"} component={Home}/>*/}
            {/*    <Route path={"/phone"} component={Phone}/>*/}
            {/*    <Route path={"/getData"} component={GetData}/>*/}
            {/*    <Route path={"/user"} component={User}/>/!*switch去掉重复*!/*/}
            {/*    /!*<Route path={"/user"} component={User}/>*!/*/}
            {/*    <Route path={"/demo"} component={Demo}/>*/}
            {/*    <Redirect from={"/"} to={"/demo/homeA"}/>*/}

            {/*</Switch>*/}
            <ReduxDemo/>
        </div>
    );
}

export default App;
