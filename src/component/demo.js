import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HomeA from "./home/homeA";
import HomeB from "./home/homeB";
import {Route, NavLink} from "react-router-dom";

class Demo extends Component {
    render() {
        return (
            <div>
                <p>demo</p>
                <NavLink to={"/demo/homeA"}>homeA</NavLink>
                <NavLink to={"/demo/homeB"}>homeB</NavLink>
                <div>
                    <Route component={HomeA} path={"/demo/homeA"}></Route>
                    <Route component={HomeB} path={"/demo/homeB"}></Route>
                </div>
            </div>
        );
    }
}

Demo.propTypes = {};

export default Demo;
