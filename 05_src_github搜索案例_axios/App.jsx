import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {

    state = { // 初始化状态
        users: [], // users初始值为数组
        isFirst: true, // 是否为第一次打开页面
        isLoading: false,
        err: ''
    }

    // search组件装users的函数
    loadUsers = (users) => {
        this.setState({ users })
    }

    changeState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search loadUsers={this.loadUsers} changeState={this.changeState}></Search>
                <List {...this.state}></List>
            </div>
        );
    }
}

export default App;
