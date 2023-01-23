// 创建"外壳"组件App
import React, { Component } from "react";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

class App extends Component {
    render() {
        return(
            <div>
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}

export default App
