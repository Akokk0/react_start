import React, {Component} from 'react';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import './index.css'

class Header extends Component {

    static propTypes = {
        changeState: PropTypes.func.isRequired
    }

    getInputValue = (event) => {
        // 获取子传父函数
        const { changeState } = this.props
        // 获取数据
        const { target, code } = event
        // 按键判断
        if (code === 'Enter') {
            // 判断输入是否为空
            if (target.value.trim() === '') {
                alert('您的输入为空，请重新输入！')
                return
            }
            // 构建新对象
            const newTodo = { id: nanoid(), name: target.value, done: false }
            // 将构建的新对象传入父组件
            changeState(newTodo)
            // 将输入的值清空
            target.value = ''
        }
    }

    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyDown={ this.getInputValue } type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}

export default Header;
