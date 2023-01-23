import React, {Component} from 'react';
import PropTypes from "prop-types";
import './index.css'

class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeAllDoneState: PropTypes.func.isRequired,
        deleteAllDone: PropTypes.func.isRequired
    }

    // 勾选全选函数
    checkedAllDone = (event) => {
        const { changeAllDoneState } = this.props
        changeAllDoneState(event.target.checked)
    }

    // 删除所有已完成待办事项
    deleteAllDoneFunc = () => {
        const { deleteAllDone } = this.props
        if (window.confirm('您确定要删除全部已完成待办事项吗？')) {
            deleteAllDone()
        }
    }

    render() {
        const { todos } = this.props
        // 获取总长
        const allLength = todos.length
        // 获取已完成待办事项的长度
        const doneLength = todos.reduce((pre, todo) => pre + (todo.done ? 1: 0), 0)

        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={doneLength === allLength && allLength !== 0} onChange={this.checkedAllDone}/>
                    </label>
                    <span>
          <span>已完成{doneLength}</span> / 全部{allLength}
        </span>
                    <button className="btn btn-danger" onClick={this.deleteAllDoneFunc}>清除已完成任务</button>
                </div>
            </div>
        );
    }
}

export default Footer;
