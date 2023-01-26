import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    // 获取学生数据函数
    getStudentsData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            // 成功回调函数
            res => console.log('成功了', res.data),
            // 失败回调函数
            err => console.log('失败了', err)
        )
    }

    // 获取汽车数据函数
    getCarsData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            res => console.log('成功了', res.data),
            err => console.log('失败了', err)
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentsData}>点击按钮获取学生数据</button>
                <button onClick={this.getCarsData}>点击按钮获取汽车数据</button>
            </div>
        );
    }
}

export default App;
