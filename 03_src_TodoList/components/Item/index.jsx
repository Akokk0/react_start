import React, {Component} from 'react';
import PropTypes from "prop-types";
import './index.css'

class Item extends Component {

    static propTypes = {
        changeDone: PropTypes.func.isRequired
    }

    // 定义状态对象
    state = {
        mouse: false
    }

    // 定义鼠标事件
    onMouseState = (flag /*判断鼠标移入还是移出*/) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 定义孙向爷传值函数
    onChange = (id) => {
        const { changeDone } = this.props
        return (event) => {
            changeDone(id, event.target.checked)
        }
    }

    // 定义删除一个代办项函数
    deleteOne = (id) => {
        const { deleteTodo } = this.props
        if (window.confirm('你确定要删除吗？')) {
            deleteTodo(id)
        }
    }

    render() {
        // 获取父组件传来的props
        const { id, name, done } = this.props
        // 获取状态值
        const { mouse } = this.state
        // 渲染函数
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseOver={this.onMouseState(true)} onMouseLeave={this.onMouseState(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.onChange(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}} onClick={() => this.deleteOne(id)}>删除</button>
            </li>
        );
    }
}

export default Item;
