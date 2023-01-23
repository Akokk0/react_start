import React, { Component } from "react";
// 改为xxx.module.css可以使用这种方式引入样式，可以防止样式冲突
import welcome from './index.module.css'

export default class Welcome extends Component {
    render() {
        return(
            <div className={welcome.title}>
                <h1>Welcome, React</h1>
            </div>
        )
    }
}
